/**
 * Class.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
  	
	shift: {
		type: 'string',
		size: 50,
		enum: ['Morning', 'Other'] 
	},
	standard: {
		type: 'string',
		required: true,
		size: 2 
	},
	yearofIntervention: {
		type: 'string',
		required: true,
		size: 4 
	},
	fellows: {
		collection: 'fellow',
		via: 'classes'
	},
	students: {
		collection: 'student',
		via: 'presentClass'
	},
	school: {
		model: 'school'
	}

  }
};
	
/*
"schoolName":"Shri Ram Vidya Mandir",
"schoolType":"Private",
"community":"Delhi South",
"city":"Delhi",
"shift":"Morning",
"standard":"3",
"yearofIntervention":"2"
}*/










