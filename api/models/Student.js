/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
  		required: true,
  		size: 50  		
  	},
  	gender: {
  		type: 'string',
  		required: true,
  		size: 20,
  		enum: ['Male', 'Female', 'Not Disclosed']
  	},
  	instructionHours: {
  		type: 'int'
  	},
  	absentDays: {
  		type: 'int'
  	},
  	parentInteraction: {
  		type: 'float'
  	},
  	reading_BOY_2013 :{ 
		type: 'float'
	},
	reading_EOY_2013 : { 
		type: 'float'
	},
	reading_BOY_2014 : { 
		type: 'float'
	},
	reading_EOY_2014 : { 
		type: 'float'
	},
	reading_BOY_2015 : { 
		type: 'float'
	},
	reading_MY_2015 : { 
		type: 'float'
	},

	writing_BOY_2013 : { 
		type: 'float'
	},
	writing_EOY_2013 : { 
		type: 'float'
	},
	writing_BOY_2014 : { 
		type: 'float'
	},
	writing_EOY_2014 : { 
		type: 'float'
	},
	writing_BOY_2015 : { 
		type: 'float'
	},
	writing_MY_2015 : { 
		type: 'float'
	},

	math_BOY_2013 : { 
		type: 'float'
	},
	math_EOY_2013 : { 
		type: 'float'
	},
	math_BOY_2014 : { 
		type: 'float'
	},
	math_EOY_2014 : { 
		type: 'float'
	},
	math_BOY_2015 : { 
		type: 'float'
	},
	math_MY_2015 : { 
		type: 'float'
	},

	sandL_BOY_2015 : { 
		type: 'float'
	},
	sandL_MY_2015 : { 
		type: 'float'
	}//,
	// academics: { //To handl one to many.
	// 	collection: 'StudentAcademics',
	// 	via: 'student'
	// }

  }
};

