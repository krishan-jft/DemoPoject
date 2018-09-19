module.exports = {

  tableName : 'user',

  attributes : {
    fname : {
      type : 'string',
      required : true,
    },
    lname : {
      type: 'string' ,
      required: true,
    },
    email : {
      type : 'email',
      unique : true,
    },
    password : {
      type : 'string',
      required : true,
    },
    contact : {
      type : 'integer',
      required : true,
    },
    address : {
      type : 'string',
    } ,
    DateOfBrith : {
      type : 'date',
    },
  }


};
