
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('vanets', { title: 'VANETs' });
};