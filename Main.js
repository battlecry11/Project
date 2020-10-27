Ext.define('AK.view.Main', {
  extend: 'Ext.panel.Panel',


  tabBarPosition: 'top',
  controller: {
    xclass: 'AK.view.MainController',
  },

  items: [
    {
      xtype: 'tabpanel' ,
      reference: 'mainTabPanel',
      closable: true,
      items:[{
        title: 'Tab',
        xtype: 'panel',
        items: [
            {

          xtype: 'form',
          reference: 'form',
          bodyPadding: 10,
          layout: 'hbox',


          fieldDefaults: {
            anchor: '100%',
            allowBlank: false
          },
          listeners: {
            afterrender: 'formAfterRender'
          },
          items: [{
            xtype: 'numberfield',
            name: 'userId',
            fieldLabel: 'User ID'
          }, {
            xtype: 'textfield',
            name: 'title',
            fieldLabel: 'Title'
          }, {
            xtype: 'textarea',
            name: 'body',
            fieldLabel: 'Body'
          }]

        },
          {
             xclass: 'AK.view.Posts.Grid'
          }
        ]
      }]



    }

    ]



});
