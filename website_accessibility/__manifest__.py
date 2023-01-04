# -*- coding: utf-8 -*-
#################################################################################
# Author      : Ashish Hirpara (<www.ashish-hirpara.com>)
# Copyright(c): 2021
# All Rights Reserved.
#################################################################################
{
    'name': 'Website Accessibility Tools',
    'category': "Website",
    'version': '14.0.0.0.0',
    'license': 'OPL-1',
    'summary': 'Add Website accessibility tools to your website with one click! It is the app to help you make your website more accessible to your users by addidng good accessibility features and make your website more reachable and readable.',
    'description': 'Add accessibility features to your website, odoo website accessibility, accessibility app. website app, odoo addon, make odoo website accessible, odoo accessibility features',
    'author': 'Ashish Hirpara',
    'website':'https://ashish-hirpara.com',
    'sequence':9,
    'depends': ['website'],
    'data': [
        'views/templates.xml',
    ],
    'images': ['static/description/banner.gif'],
    'installable': True,
    'auto_install': False,
    'application': True,
}
