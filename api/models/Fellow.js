/**
 * Fellow.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK: false,		
  attributes: {
	fellowName: {
		type: 'string',
		required: true,
		size: 50
	},
	employeeID: {
		primaryKey: true,
		type: 'string',
		required: true,
		unique: true,
	},
	cohort: {
		type: 'string',
		size: 4
	},
	programManager: {
		type: 'string',
		required: true,
		size: 50
	},
	classes: {
		model: 'class',
		via: 'fellows'
	}

  }
};

/*
{
"fellowName":"Anand Sharma",
"employeeID":"110987",
"cohort":"2013",
"programManager":"Tushar Vohra",
"classes":"1"
}


{
"fellowName":"Umang Manchanda",
"employeeID":"111602",
"cohort":"2014",
"programManager":"Tushar Vohra",
"classes":"1"
}
*/
