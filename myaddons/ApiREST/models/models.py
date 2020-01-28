# -*- coding: utf-8 -*-

from odoo import api, fields, models

class Restaurant(models.Model):
    _name = 'apirest.restaurant'
    _description = '??????????'

    name = fields.Char(string="Title?", required=True)
    description = fields.Text()
    def parseAll(self):
        return parseAll(self)
    def parseOne(self):
        return parseOne(self)

class Session(models.Model):
    _name = 'apirest.session'
    _description = 'Session'

    name = fields.Char(required=True)
    start_date = fields.Date()
    duration = fields.Float(digits=(0,2), help="Duration in days")
    seats = fields.Integer(string='Number of seats')
    def parseAll(self):
        return parseAll(self)
    def parseOne(self):
        return parseOne(self)

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




#create
#search
#read
#write
#unlink
#https://www.odoo.com/documentation/12.0/reference/orm.html#model-reference
