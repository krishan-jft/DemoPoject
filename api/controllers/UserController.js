module.exports = {
  signUp : function(req ,res){
    if(req.method == 'POST'){
      let inputs = req.body;
      var employe = {
        fname : inputs.fname,
        lname : inputs.lname,
        email : inputs.email,
        password : inputs.password,
        contact : inputs.contact,
        DateOfBrith : inputs.DateOfBrith,
        address : inputs.address,
      };
      console.log(employe);

        UserModel.findOne({ email : employe.email}).exec(function (err ,user) {
        if(err){return res.error;}
        else{
          if(user){
            res.send('User Already Exist.....');
          }else{
            UserModel.create(employe).exec(function (err ,result) {
              if(err) {
                return err;
              }
                res.view('homepage' , {result1 : result});

            });
          }
        }
      });



/*
            UserModel.findOrCreate({email : employe.email },employe).exec(function createFind(err ,result){
              console.log('=========');
              if(err){
                throw err;

              }else {
                if (employe.email) {
                  res.send("User alresdy regiter");
                } else {
                  console.log(result);
                }
              }
             // res.send(result);
            });
*/



    }
 //  res.redirect('/');
  },

 login : function (req ,res) {
    let email1 = req.param('email');
    let password = req.param('password');
    console.log('====');
    UserModel.find({email : email1},{password: password}).exec(function (err ,result) {
      if(err){
        return res.error;
      }else{
        console.log('heelloo');
        console.log(email1);
        function findEmail(result ,email ,email1){
          for(var i = 0 ;i < result.length ; i++ ){
            if(result[i].email == email1){
              console.log(email);
              return i;
            }
          }
        } ;

        if(i){
               return res.view('homepage' , {result1 : result } );
        }
          return res.view('pages/entrance/signup-view');}


    });


  },

};
