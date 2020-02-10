# -*- coding: utf-8 -*-
from odoo import http

class Auth(http.Controller):
    @http.route('/auth/register',
        type='json', auth='public', methods=['POST','OPTIONS'], cors='*')
    def registerResponse(self, **kw):
        params = http.request.params
        modelObj = http.request.env['auth.user']

        result = modelObj.create(params)
        parsedResult = result.parseOne()

        return parsedResult

    # @http.route('/auth/users',
    #     type="http", auth='public', method=['GET'], corse='*')
    # def userResponse(self, **kw):
