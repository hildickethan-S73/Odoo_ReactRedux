# -*- coding: utf-8 -*-
from odoo import http
import json

allowedModels = [
    'restaurant',
    'session'
]

class Apirest(http.Controller):
    @http.route('/apirest/', auth='public', website=True)
    def index(self, **kw):
        return http.request.render('apirest.index', {})

    ### GET ALL
    @http.route('/api/<string:modelToAccess>/', auth='public', type='json', methods=['GET'])
    def getResponse(self, **kw):
        # print(kw)
        # print('apirest.{}'.format(kw['modelToAccess']))

        modelToAccess = kw['modelToAccess']
        if modelToAccess in allowedModels:
            model = 'apirest.{}'.format(kw['modelToAccess'])
            
            modelObj = http.request.env[model]
            
            return modelObj.get()
        else:
            return {'Error':"Model doesn't exist"}
    
    ### GET ONE BY NAME FIELD (should be slug)
    @http.route('/api/<string:modelToAccess>/<string:nameToGet>', auth='public', type='json', methods=['GET'])
    def getOneResponse(self, **kw):
        modelToAccess = kw['modelToAccess']
        nameToGet = kw['nameToGet']

        if modelToAccess in allowedModels:
            model = 'apirest.{}'.format(kw['modelToAccess'])
            
            modelObj = http.request.env[model]
            query = [("name","=",nameToGet)]
            return modelObj.get(query)
        else:
            return {'Error':"Model doesn't exist"}

    ### CREATE 
    @http.route('/api/<string:modelToAccess>/', auth='public', type="json", methods=['POST'])
    def postResponse(self, **kw):
        # print(kw)
        # print(http.request.params)

        params = http.request.params
        modelToAccess = kw['modelToAccess']

        if modelToAccess in allowedModels:
            model = 'apirest.{}'.format(kw['modelToAccess'])
            
            modelObj = http.request.env[model]
            create = modelObj.create(params)
            justCreatedJSON = create.parseOne()

            return justCreatedJSON
        else:
            return {'Error':"Model doesn't exist"}

    ### PUT
    # @http.route('/api/<string:modelToAccess>/', auth='public', type="json", methods=['PUT'])
    # def putResponse(self, **kw):
    #     # print(kw)
    #     # print(http.request.params)

    #     params = http.request.params
    #     modelToAccess = kw['modelToAccess']

    #     if modelToAccess in allowedModels:
    #         model = 'apirest.{}'.format(kw['modelToAccess'])
            
    #         modelObj = http.request.env[model]
    #         put = modelObj.write(params)
            
    #         justCreatedJSON = put.getOne()

    #         return justCreatedJSON
    #     else:
    #         return {'Error':"Model doesn't exist"}