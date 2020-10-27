Ext.define('AK.model.Post', {
    extend: 'Ext.data.Model',
    fields: ['id', 'userId', 'title', 'body', {
        name: 'publishDate',
        convert: function() {
            return new Date()
        }
    }],
    validators: {
        userId: 'present'
    },
    proxy: {
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'rest',
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }
});
