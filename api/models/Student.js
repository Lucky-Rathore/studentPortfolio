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
  	academic: { //To handl one to many.
  		collection: 'academics',
  		via: 'detailOf'
  	},
    presentClass: {
      model: 'class' //use efficitly make it one way
    },
    school: {
      model: 'school'
    },
    teachers: {
      collection: 'fellow'
    }

  }
};
/*
{
"name":"Richa Shah",
"gender":"Female",
"instructionHours":"28",
"absentDays":"20",
"parentInteraction":"70",
"classes":"1",
"school":"2",
"teachers": "{110987, 111602}"
}

{
"name":"Amrita Sahu",
"gender":"Female",
"instructionHours":"28",
"absentDays":"4",
"parentInteraction":"40",
"classes":"1",
"school":"2",
"teachers": "110987"
},
{
"name":"Rahul Sharma",
"gender":"Female",
"instructionHours":"28",
"absentDays":"7",
"parentInteraction":"30",
"classes":"1",
"school":"2",
"teachers": "110987"
},
{
"name":"Richa Shah",
"gender":"Female",
"instructionHours":"28",
"absentDays":"2",
"parentInteraction":"70",
"classes":"1",
"school":"2",
"teachers": "110987"
}
*/
