/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	show: function(req, res, next) {

	Student.find(function foundUsers(err, studentResp) {
	  if (err) return next(err);
	  Student.find()
  		.populate('school').populate('presentClass')
		.exec(function(err, studentResp) {
		  if (err) return next(err);
	      if (!studentResp) return next();
	      res.view( {student : JSON.parse(JSON.stringify(studentResp)) } );
		});
	});
  },

  detail : function(req, res, next) {
  	Student.find(req.param('id'))
  		.populate('presentClass').populate('school').populate('teachers').populate('academic')
		.exec(function(err, studentResp) {
		  if (err) return next(err);
	      if (!studentResp) return next();
	      res.view( {student : JSON.parse(JSON.stringify(studentResp)) } );
		});
  }

};



