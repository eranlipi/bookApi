const jwt = require('jsonwebtoken')
const config = require('config')


module.exports = function(req, res , next){
   // Get token from header

   const token = req.header('x-auth-token');

   // check if is no token

   if(!token){
     return res.status(401).json({msg: 'No Token , autorization denied'});
   }

   try{
     const decoded = jwt.verify(token , config.get('jwrSecret'));

     req.user = decoded.user;
     next();
   } catch(err){
      return res.status(401).json({msg: 'token is not valid'});
   }
};