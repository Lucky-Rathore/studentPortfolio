/**
 * StudentAcademics.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
  	subject: {
  		type: 'string',
  		size: 20,
  		required: true,
  		enum: ['Math', 'Reading', 'Writing', 'SandL']
  	},
  	period: {
  		type: 'date'
  	},
    periodText: {
      type: 'string',
      required: true
    },
  	score: {
  		type: 'float',
  		required: true
  	},
  	scoreType: {
		type: 'string',
  		required: true,
  		enum: ['Percentage', 'Other']  		
  	},
  	detailOf: {
  		model: 'student'
  	}
  }
};





