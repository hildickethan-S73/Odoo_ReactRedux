# -*- coding: utf-8 -*-
from odoo import http
import json
import yaml

class Worldhello(http.Controller):
    @http.route('/worldhello/', auth='public', website=True)
    def index(self, **kw):
        return http.request.render('worldhello.index', {})
    
    @http.route('/api/questionmark/', auth='public', type='http')
    def list(self, **kw):
        questionmark = http.request.env['worldhello.questionmark']

        data = http.request.httprequest.data
        data_in_json = yaml.load(data)
        print(data_in_json)

        # print(self)
        # print(questionmark.method())
        return http.Response(
            json.dumps(questionmark.method()), 
            content_type='application/json',
            status=200
        )