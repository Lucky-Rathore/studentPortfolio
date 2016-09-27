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
      collection: 'fellow',
      via: 'students',
      dominant: true
    }

  }
};
/*
{
"name":"Amrita Sahu", "gender":"Female", "instructionHours":"28", "absentDays":"4", "parentInteraction":"40", 
"presentClass":"57e9cdc52e40a6781a0443bf",
"school":"57e86db50f11ba5816b82f56",,
"teachers" : ["57e9ce292e40a6781a0443c1", "57e9ce292e40a6781a0443c0"]

},
{
"name":"Rahul Sharma", "gender":"Female", "instructionHours":"28", "absentDays":"7", "parentInteraction":"30",
"presentClass":"57e9cdc52e40a6781a0443bf",
"school":"57e86db50f11ba5816b82f56",
"teachers" : ["57e9ce292e40a6781a0443c1", "57e9ce292e40a6781a0443c0"]
},
{
"name":"Richa Shah", "gender":"Female", "instructionHours":"28", "absentDays":"2", "parentInteraction":"70",
"presentClass":"57e9cdc52e40a6781a0443bf",
"school":"57e86db50f11ba5816b82f56",
"teachers" : ["57e9ce292e40a6781a0443c1", "57e9ce292e40a6781a0443c0"]
}
*/