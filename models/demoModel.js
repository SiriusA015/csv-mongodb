var mongoose  =  require('mongoose');  
   
var csvSchema = new mongoose.Schema({  
    name:{  
        type:String  
    },  
    start:{  
        type:Number  
    },  
    last:{  
        type:Number  
    },  
    day:{  
        type:Number  
    }
});  
   
module.exports = mongoose.model('demoModel',csvSchema);  