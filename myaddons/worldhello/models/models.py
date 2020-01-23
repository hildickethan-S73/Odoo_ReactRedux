# -*- coding: utf-8 -*-

from odoo import api, fields, models

# class worldhello(models.Model):
#     _name = 'worldhello.worldhello'
#     _description = 'default description'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()

#     @api.depends('value')
#     def _value_pc(self):
#         self.value2 = float(self.value) / 100

class questionmark(models.Model):
    _name = 'worldhello.questionmark'
    _description = '??????????'

    name = fields.Char(string="Title?", required=True)
    description = fields.Text()
    def method(self):
        self = self.search([])
        results = []
        for record in self:
            # print(record)
            results.append({
                "id":record.id,
                "name":record.name,
                'description':record.description
                })
        # print(results)
        return results


class Session(models.Model):
    _name = 'worldhello.session'
    _description = 'Session'

    name = fields.Char(required=True)
    start_date = fields.Date()
    duration = fields.Float(digits=(0,2), help="Duration in days")
    seats = fields.Integer(string='Number of seats')
    

# def create(self):
#     print(self)
#     for record in self:
#         print(record)

#create
#search
#read
#write
#unlink
#https://www.odoo.com/documentation/12.0/reference/orm.html#model-reference
