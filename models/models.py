# -*- coding: utf-8 -*-

from odoo import models, fields, api

class worldhello(models.Model):
    _name = 'worldhello.worldhello'
    _description = 'default description'

    name = fields.Char()
    value = fields.Integer()
    value2 = fields.Float(compute="_value_pc", store=True)
    description = fields.Text()

    @api.depends('value')
    def _value_pc(self):
        self.value2 = float(self.value) / 100

class questionmark(models.Model):
    _name = 'worldhello.questionmark'
    _description = '??????????'

    name = fields.Char(string="Title?", required=True)
    description = fields.Text()