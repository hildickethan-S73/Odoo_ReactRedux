# -*- coding: utf-8 -*-

from odoo import api, fields, models

class questionmark(models.Model):
    _name = 'worldhello.questionmark'
    _description = '??????????'

    name = fields.Char(string="Title?", required=True)
    description = fields.Text()
    def method(self):
        return getRecords(self)


class Session(models.Model):
    _name = 'worldhello.session'
    _description = 'Session'

    name = fields.Char(required=True)
    start_date = fields.Date()
    duration = fields.Float(digits=(0,2), help="Duration in days")
    seats = fields.Integer(string='Number of seats')
    def method(self):
        return getRecords(self)
    

def getRecords(model):
    print(model)
    model = model.search([])
    results = []

    # ???
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


#create
#search
#read
#write
#unlink
#https://www.odoo.com/documentation/12.0/reference/orm.html#model-reference
