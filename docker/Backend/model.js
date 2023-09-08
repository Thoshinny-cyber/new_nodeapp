const mongoose=require('mongoose');
const schema=mongoose.Schema(
    {
        Lab:'String',
        Department:'String',
        Location:'String'
    }
)

const Post=mongoose.model('Post',schema);
module.exports=Post