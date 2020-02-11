# -*- coding: utf-8 -*-

from odoo import models, fields, api

class User(models.Model):
    _name = 'auth.user'
    _description = 'User model'

    name = fields.Char()
    password = fields.Char()
    def parseAll(self):
        return parseAll(self)
    def parseOne(self):
        return parseOne(self)
    # def hashPassword(self,salt):
    #     return hashPassword(self,salt)
    # def generateSalt(self):
    #     return generateSalt()


def parseAll(model):
    results = []
    for record in model:
        recordObj = record.parseOne()
        results.append(recordObj)

    return results

# returns in JSON the record passed
def parseOne(model):

    # gets fields of model, removes odoo generated ones
    # enables a generic toJSON for every model, but in strings
    attributes = model.fields_get([],['type'])
    # print(attributes)
    del attributes['display_name']
    del attributes['create_uid']
    del attributes['create_date']
    del attributes['write_uid']
    del attributes['write_date']
    del attributes['__last_update']
    # print(attributes.keys())

    recordObj = {}
    for key in attributes.keys():
        recordObj[key] = str(model[key])

    return recordObj