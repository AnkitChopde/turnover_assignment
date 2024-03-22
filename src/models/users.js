import mongoose,{Schema} from "mongoose"


const userSchema = new Schema({
   name: {
        type: String,
        required: [true, "Please provide name"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
    password: {
       type: String,
       required: [true, "Please provide a password"],
    },
},

{
    timestamps:true
});

const UserModel = mongoose.models.users  || mongoose.model("users",userSchema);

export default UserModel