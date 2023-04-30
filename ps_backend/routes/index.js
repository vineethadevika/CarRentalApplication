
var express = require('express');
var router = express.Router();
var monk = require('monk')
var db = monk('localhost:27017/test')
var user = db.get('users');
var owner=db.get('owners');
var admin=db.get('admin');
var signup=db.get('signup');
var signup2=db.get('signup2');

/* GET home page. */
if(!db){
  console.log("DB not Connected")
}else{
  console.log("DB Connected")
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getData', function(req, res){
  student.find({},function(err, docs){
    if(err){
      res.send(err)
    }else{
      res.send(docs)
      console.log(docs)
    }
  })
})

router.post('/signin',function(req, res){
  console.log(req.body)
  user.find({"username":req.body.username,"password":req.body.password}, function(err,docs){
      if(err){
        res.sendStatus(500)
      }else{
        res.send(docs)
        // console.log
      }
    })
})

router.post('/ownersignin',function(req, res){
  console.log(req.body)
  owner.find({"username":req.body.username,"password":req.body.password}, function(err,docs){
      if(err){
        res.sendStatus(500)
      }else{
        res.send(docs)
        // console.log
      }
    })
})

router.post('/adminsignin',function(req, res){
  console.log(req.body)
  admin.find({"name":req.body.username,"password":req.body.password}, function(err,docs){
      if(err){
        res.sendStatus(500)
      }else{
        res.send(docs)
        // console.log
      }
    })
})


router.post('/signup',(req,res)=>
{
  // const collection=db.get('signup')
  console.log(req.body)
  user.insert({"username":req.body.values.uname,"password":req.body.values.pass,"confirmpassword":req.body.values.pass},function(err,docs){
      if(err){
        res.sendStatus(500)
      }else{
        res.send(docs)
        // console.log
      }
    
  })
})

router.post('/ownersignup',(req,res)=>
{
  // const collection=db.get('signup')
  console.log(req.body)
  owner.insert({"username":req.body.values.uname,"password":req.body.values.pass,"confirmpassword":req.body.values.pass},function(err,docs){
      if(err){
        res.sendStatus(500)
      }else{
        res.send(docs)
        // console.log
      }
    
  })
})


module.exports = router;