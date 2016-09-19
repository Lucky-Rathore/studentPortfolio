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
  		require: true,
  		enum: ['Math', 'Reading', 'Writing', 'SandL']
  	},
  	period: {
  		type: 'date',
  		require: true
  	},
  	score: {
  		type: 'float',
  		require: true
  	},
  	scoreType: {
		type: 'float',
  		require: true,
  		enum: ['Percentage', 'Other']  		
  	},
  	student: {
  		model: 'Student'
  	}
  }
};

