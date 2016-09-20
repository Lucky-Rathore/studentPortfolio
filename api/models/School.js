/**
 * School.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	schoolName: {
  		type: 'string',
  		required: true,
  		size: 100 
  	},
	schoolType: {
		type: 'string',
		required: true,
		size: 20,
		enum: ['Private', 'Other'] 
	},
	community: {
		type: 'string',
		size: 50 
	},
	city: {
		type: 'string',
		required: true,
		size: 50 
	},
	classes: {
		collection : 'class',
		via : 'school'
	},
	fellows: {
		collection: 'fellow',
		via: 'school'
	}
  }
};

