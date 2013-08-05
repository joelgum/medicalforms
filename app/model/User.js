Ext.define('medicalForms.model.User', {
    extend: 'Ext.data.Model',

    config: {
        fields: [{
            name: 'firstName', type: 'string'}, 
            {name: 'lastName', type: 'string'}, 
            {name: 'todaysDate', type: 'date'}, 
            {name: 'address', type: 'string'}, 
            {name: 'city', type: 'string'}, 
            {name: 'state', type: 'string'}, 
            {name: 'zipCode', type: 'string'}, 
            {name: 'phoneNumber', type: 'string'}, 
            {name: 'email', type: 'string'}, 
            {name: 'other', type: 'string'}, 
            {name: 'medications', type: 'string'}, 
            {name: 'priorSurgeries', type: 'string'}, 
            {name: 'drugAllergies', type: 'string'}, 
            {name: 'birthDate', type: 'date'}, 
            {name: 'height', type: 'string'}, 
            {name: 'weight', type: 'integer'}, 
            {name: 'refferalSource', type: 'string'}, 
            {name: 'medicalCondition'}, 
            {name: 'gender', type: 'string'}, 
            {name: 'procedure', type: 'string'
        }]
    }
});