const mongoose = require('mongoose')
 
var detail = new mongoose.Schema({
    
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },      
text: {
    type: String,
     trim: true,
  },
done:{
type: String,
trim: true,
}
 
})

module.exports=mongoose.model('Detail', detail);
