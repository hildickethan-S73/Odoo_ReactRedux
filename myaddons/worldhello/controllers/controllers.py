# -*- coding: utf-8 -*-
from odoo import http

class Worldhello(http.Controller):
    @http.route('/worldhello/', auth='public', website=True)
    def index(self, **kw):
        return http.request.render('worldhello.index', {})

    # @http.route('/worldhello/worldhello/objects/', auth='public')
    # def list(self, **kw):
    #     return http.request.render('worldhello.listing', {
    #         'root': '/worldhello/worldhello',
    #         'objects': http.request.env['worldhello.worldhello'].search([]),
    #     })

    # @http.route('/worldhello/worldhello/objects/<model("worldhello.worldhello"):obj>/', auth='public')
    # def object(self, obj, **kw):
    #     return http.request.render('worldhello.object', {
    #         'object': obj
    #     })