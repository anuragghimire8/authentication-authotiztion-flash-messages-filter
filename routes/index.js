var express = require('express');
var router = express.Router();

const userModel=require("./users")

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/*
router.get('/failed', function(req, res) {
  req.flash("age",12)
  req.flash("name","Anurag")
  res.send("banyo")
});
router.get("/check" ,function(req,res){
  console.log(req.flash("age"),req.flash("name"));
  res.send("check garni backend ko terminal ma")
})*/

router.get("/create", async function(req,res){
        let userdata= await userModel.create({
          username:"anuragiiii",
          nickname:"ChelseaStarBoy",
          description:"Chelsea is best hai ",
          categories:["js","react","gasp"],
          
        })
        res.send(userdata);
})
/*
router.get("/find", async function(req,res){
 var regex= new RegExp("^Anurag$","i")
  let user =await userModel.find({username:regex})
  res.send(user);
});*/
/*
router.get("/find",async function(req,res){
  let user =await userModel.find({categories:{$all:["gasp","node"]}})
  res.send(user);

})*/

/*
router.get("/find",async function(req,res){
  var date1=new Date("2024-01-29");
  var date2=new Date("2024-03-01")
  let user =await userModel.find({datecreated:{$gte:date1,$lte:date2}});
  res.send(user);
})*/

/*
router.get("/find",async function(req,res){
  let user=await userModel.find({categories:{$exists:true}})
  res.send(user);
  console.log(user);
})*/

router.get("/find",async function(req,res){
  let user=await userModel.find({
    $expr:{
      $and:[
        {$gte:[{$strLenCP:"$nickname"},10]},
        {$lte:[{$strLenCP:"$nickname"},10]}
      ]
    }
  });
  res.send(user);
})
   

module.exports = router;
