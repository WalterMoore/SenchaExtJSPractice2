Ext.onReady(function() { 
    Ext.create('Ext.grid.Panel', { 
        store: Ext.create('Ext.data.Store', {
           fields: [{ 
                name: 'id', 
                type: 'int'
            }, { 
                name: 'first_name', 
                type: 'string'
            } ,{ 
                name: 'last_name', 
                type: 'string'
            }, { 
                name: 'dob', 
                type: 'date', 
                dateFormat: 'Y-m-d'
            }]
            data: [{ 
                'id': 1, 
                'first_name': 'John', 
                'last_name': 'Smith', 
                'dob': '1950-03-04'
            }, { 
                id: 2, 
                'first_name': 'Jane', 
                'last_name': 'Doe', 
                'dob': '1960-07-24'               
            }]     
        }) 
        columns: [{ 
            header: 'ID', 
            dataIndex: 'id'
        }, { 
            header: 'First Name', 
            dataIndex: 'first_name'
        }, { 
            header: 'Last Name', 
            dataIndex: 'last_name'
        }, { 
            header: 'Date of Birth', 
            dataIndex: 'dob', 
            format: 'm/d/Y', 
            xtype: 'datecolumn'
        }] 
    }); 
});