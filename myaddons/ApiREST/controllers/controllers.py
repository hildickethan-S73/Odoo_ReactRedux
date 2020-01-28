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
        modelToAccess = kw['modelToAccess']
        if modelToAccess in allowedModels:
            model = 'apirest.{}'.format(kw['modelToAccess'])
            modelObj = http.request.env[model]

            # parseAll() is a self made function that parses the records as JSON
            return modelObj.search([]).parseAll()
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
            
            # search with name query
            query = [("name","=",nameToGet)]
            return modelObj.search(args=query, limit=1).parseAll()
        else:
            return {'Error':"Model doesn't exist"}

    ### CREATE 
    @http.route('/api/<string:modelToAccess>/', auth='public', type="json", methods=['POST'])
    def postResponse(self, **kw):
        params = http.request.params
        modelToAccess = kw['modelToAccess']

        if modelToAccess in allowedModels:
            model = 'apirest.{}'.format(kw['modelToAccess'])
            modelObj = http.request.env[model]

            create = modelObj.create(params)
            parsedResult = create.parseOne()

            return parsedResult
        else:
            return {'Error':"Model doesn't exist"}

    ### UPDATE
    @http.route('/api/<string:modelToAccess>/<string:nameToGet>', auth='public', type="json", methods=['PUT'])
    def putResponse(self, **kw):
        params = http.request.params
        modelToAccess = kw['modelToAccess']
        nameToGet = kw['nameToGet']

        if modelToAccess in allowedModels:
            model = 'apirest.{}'.format(kw['modelToAccess'])
            modelObj = http.request.env[model]
            
            # searches and update
            modelObj.search([("name","=",nameToGet)], limit=1).write(params)

            # deletes id from params, disabling an id change
            if 'id' in params:
                del params['id']
                
            # creates query from params to search for the newly modified record
            query = []
            for key in params.keys():
                query.append((key,'=',params[key]))
            result = modelObj.search(args=query, limit=1)

            parsedResult = result.parseOne()

            return parsedResult
        else:
            return {'Error':"Model doesn't exist"}

    ### DELETE
    @http.route('/api/<string:modelToAccess>/<string:nameToGet>', auth='public', type="json", methods=['DELETE'])
    def deleteResponse(self, **kw):
        modelToAccess = kw['modelToAccess']
        nameToGet = kw['nameToGet']

        if modelToAccess in allowedModels:
            model = 'apirest.{}'.format(kw['modelToAccess'])
            modelObj = http.request.env[model]

            # search with name query
            query = [("name","=",nameToGet)]
            record = modelObj.search(args=query, limit=1)

            # check if search yielded anything for more accurate response
            if record.exists():
                # delete record
                record.unlink()
                return {'deleted':True}
            else:
                return {'deleted':False}

        else:
            return {'Error':"Model doesn't exist"}