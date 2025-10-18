import mongoose, { trusted } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : [true, "User name wajib di isi"],
            unique : true, //biar ga sm kaya yg lain
            trim : true //untuk menghapus spasi di awal dan akhir
        },
        email : {
            type : String,
            required : [true, "Email wajib di isi"],
            unique : true,
            trim : true
        },
        password : {
            type : String,
            required : [true , "Password wajib di isi"]
        }
    },
    {
        timestamps : true
        }
)

const UserModel = mongoose.model("User12", userSchema)

export default UserModel 