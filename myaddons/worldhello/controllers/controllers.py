# -*- coding: utf-8 -*-
from odoo import http
import json

allowedModels = [
    'questionmark',
    'session'
]

class Worldhello(http.Controller):
    @http.route('/worldhello/', auth='public', website=True)
    def index(self, **kw):
        return http.request.render('worldhello.index', {})
    
    # @http.route('/api/questionmark/', auth='public', type='http', methods=['GET'])
    # def httpResponse(self, **kw):
    #     questionmark = http.request.env['worldhello.questionmark']
        
    #     # print(self)
    #     # print(questionmark.method())
    #     return http.Response(
    #         json.dumps(questionmark.method()), 
    #         content_type='application/json',
    #         status=200
    #     )

    @http.route('/api/questionmark/<test>', auth='public', type="json", methods=['POST', 'PUT', 'DELETE'])
    def jsonResponse(self, **kw):
        print(kw)
        print(http.request.params)


    @http.route('/api/<string:modelToAccess>/', auth='public', type='http', methods=['GET'])
    def httpResponse2(self, **kw):
        print(kw)
        # print('worldhello.{}'.format(kw['modelToAccess']))

        modelToAccess = kw['modelToAccess']
        if modelToAccess in allowedModels:
            model = 'worldhello.{}'.format(kw['modelToAccess'])
            
            modelObj = http.request.env[model]
            return http.Response(
                json.dumps(modelObj.method()), 
                content_type='application/json',
                status=200
            )
        else:
            return http.Response(
                json.dumps({'Error':"Model doesn't exist"}), 
                content_type='application/json',
                status=200
            )