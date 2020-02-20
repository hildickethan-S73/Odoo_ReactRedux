# -*- coding: utf-8 -*-
from odoo import http
import hashlib
import os
import jwt
import configparser

class Auth(http.Controller):
    @http.route('/auth/register',
        type='json', auth='public', methods=['POST','OPTIONS'])
    def registerResponse(self, **kw):
        params = http.request.params
        modelObj = http.request.env['auth.user']

        salt = generateSalt()
        hash = hashPassword(params['password'],salt)
        params['password'] = '{}${}'.format(salt.hex(), hash)

        result = modelObj.create(params)
        parsedResult = result.parseOne()

        del parsedResult['password']

        secret = getSecret()
        encoded_jwt = jwt.encode({'id': parsedResult['id']}, secret, algorithm='HS256')
        parsedResult['token'] = encoded_jwt

        return parsedResult

    @http.route('/auth/login',
        type='json', auth='public', methods=['POST','OPTIONS'])
    def loginResponse(self, **kw):
        params = http.request.params
        modelObj = http.request.env['auth.user']

        query = [("name","=",params['name'])]
        result = modelObj.search(args=query, limit=1)

        if result.exists():
            parsedResult = result.parseOne()
            # check for default odoo user in demo.xml, check if password is correct
            if parsedResult['password'] != 'False' and verifyPassword(parsedResult['password'],params['password']):
                del parsedResult['password']

    
                secret = getSecret()
                encoded_jwt = jwt.encode({'id': parsedResult['id']}, secret, algorithm='HS256')
                parsedResult['token'] = encoded_jwt

                return parsedResult
            else:
                return {"error":"Wrong password"}
        else:
                return {"error":"User doesn't exist"}

    @http.route('/auth/logout',
        type='json', auth='public', methods=['POST','OPTIONS'])
    def logoutResponse(self, **kw):
        return {"logout":"yes"}

def hashPassword(password,salt):
    '''
        hash the password with a salt \n
        
        :param: password
            string to hash
        :param: salt
            bytes to salt with, generate with generateSalt()
    '''
    key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100000).hex()
    return key

# generate salt
def generateSalt():
    '''
        generate a salt
    '''
    return os.urandom(32) 


def verifyPassword(password,loginpassword):
    '''
        match 2 passwords \n
        
        :param: password
            password in DB
        :param: loginpassword
            password to check
    '''
    salt, hash = password.split('$')
    salt = bytes.fromhex(salt)

    newhash = hashPassword(loginpassword,salt)

    if hash == newhash:
        return True
    
    return False

def getSecret():
    config = configparser.ConfigParser()
    config.read('/etc/odoo/config.ini')
    secret = config.get('password', 'JWT_PASSWORD')

    return secret