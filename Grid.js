Ext.define('AK.view.Posts.Grid', {
    extend: 'Ext.grid.Panel',
    reference: 'mainGrid',
    store: [],
    viewModel: true,

    // store: {model: }
    // bind: '{Posts}',
    // controller: {
    //     xclass: 'AK.view.Posts.GridController'
    // },
    tbar: [{
        text: 'დამატება',
        handler: 'addPost'
    }, {
        text: 'წაშლა',
        bind: {
            disabled: '{!mainGrid.selection}'
        },
        handler: 'deletePost'
    }, {
        text: 'ძებნა',
        handler: 'search'
    }, {
        xtype: 'label',
        bind: 'სათაური: {postTitleUpperCase}'
    }]


});
