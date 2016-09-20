/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	show: function(req, res, next) {

	// Get an array of all users in the User collection(e.g. table)
	Student.find(function foundUsers(err, studentResp) {
	  if (err) return next(err);
	  // pass the array down to the /views/index.ejs page
	  res.view( { Student : studentResp });
	});
  },

  detail : function(req, res, next) {
  	Student.find(req.param('id'))
  		.populate('academic')
		.exec(function(err, studentResp) {
		  if (err) return next(err);
	      if (!studentResp) return next();
	      console.log(JSON.stringify(studentResp));
	      res.view( {student : JSON.parse(JSON.stringify(studentResp)) } );
		});
  }

};

