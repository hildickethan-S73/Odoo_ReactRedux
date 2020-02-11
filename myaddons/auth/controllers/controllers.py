# -*- coding: utf-8 -*-
from odoo import http
import hashlib
import os

class Auth(http.Controller):
    @http.route('/auth/register',
        type='json', auth='public', methods=['POST','OPTIONS'], cors='*')
    def registerResponse(self, **kw):
        params = http.request.params
        modelObj = http.request.env['auth.user']

        salt = generateSalt()
        hash = hashPassword(params['password'],salt)
        params['password'] = '{}${}'.format(salt.hex(), hash)

        result = modelObj.create(params)
        parsedResult = result.parseOne()

        return parsedResult

    @http.route('/auth/login',
        type='json', auth='public', methods=['POST','OPTIONS'], cors='*')
    def loginResponse(self, **kw):
        params = http.request.params
        modelObj = http.request.env['auth.user']

        query = [("name","=",params['name'])]
        result = modelObj.search(args=query, limit=1)
        parsedResult = result.parseOne()

        if verifyPassword(parsedResult['password'],params['password']):
            del parsedResult['password']
            return parsedResult
        else:
            return {"error":"Wrong password"}

def hashPassword(password,salt):
    '''
        hash the password with a salt \n
        
        :param password
            string to hash
        :param salt
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
        
        :param password
            password in DB
        :param loginpassword
            password to check
    '''
    salt, hash = password.split('$')
    salt = bytes.fromhex(salt)

    newhash = hashPassword(loginpassword,salt)

    if hash == newhash:
        return True
    
    return False
