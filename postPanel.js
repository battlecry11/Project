Ext.define('AK.view.posts.PostPanel', {
    extend: 'Ext.panel.Panel',
    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    items: [{
        xclass: 'SL.view.Posts.Grid',
    }]
});
