import mongoose from "mongoose";

const linkSchema = new mongoose.Schema(
    {},
    {
        title : {
            type : String,
            required : [true, "Wajib di isi"],
            unique : true, //biar ga sm kaya yg lain
            trim : true //untuk menghapus spasi di awal dan akhir
        },
        Icon : {
            type : String,
            required : true [true, "Wajib di isi"],
            unique : true,
            trim : true
        },
        Url : {
            type : String,
            required : [true , "link"],
            trim : true
        },
        User : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required : true 
        }
    },
    {
        timestamps : true
        }
)

const LinkSchema = mongoose.Model("Link", linkSchema)

export default linkSchema 