/*
 * File: app/model/CarData.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HWTsaProject.model.CarData', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Number'
    ],

    fields: [
        {
            name: 'manufacturer'
        },
        {
            name: 'model'
        },
        {
            type: 'float',
            name: 'price'
        },
        {
            name: 'wiki'
        },
        {
            name: 'img'
        },
        {
            name: 'quality'
        }
    ]
});