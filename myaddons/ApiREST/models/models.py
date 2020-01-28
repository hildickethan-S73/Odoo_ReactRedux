# -*- coding: utf-8 -*-

from odoo import api, fields, models

class Restaurant(models.Model):
    _name = 'apirest.restaurant'
    _description = '??????????'

    name = fields.Char(string="Title?", required=True)
    description = fields.Text()
    def get(self, query=[], offset=0, limit=None, count=None):
        return getRecords(self,query,offset,limit,count)
    def parseOne(self):
        return parseOne(self)

class Session(models.Model):
    _name = 'apirest.session'
    _description = 'Session'

    name = fields.Char(required=True)
    start_date = fields.Date()
    duration = fields.Float(digits=(0,2), help="Duration in days")
    seats = fields.Integer(string='Number of seats')
    def get(self):
        return getRecords(self)
    def parseOne(self):
        return parseOne(self)
    
# default values are redundant but kept for readability
# searches and returns in JSON
def getRecords(model, query=[], offset=0, limit=None, count=None):
    print(model)
    model = model.search(args=query, offset=offset, limit=limit, count=count)
    results = []

    # ???
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

    for record in model:
        recordObj = {}
        for key in attributes.keys():
            recordObj[key] = str(record[key])
        results.append(recordObj)

    return results

# returns in JSON the record passed
def parseOne(model):
    print(model)

    # ???
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
