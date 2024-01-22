import mongoose from "mongoose";
export const connectdb = async ()=> {
    try {
const {connection} = await mongoose.connect("mongodb+srv://kamleshksks456:LtnGz4tLIcrsYj0j@cluster0.shgns95.mongodb.net/", {
    dbName: "Ecommerce"
});
console.log("connected");
console.log(connection.host)
}
catch(error) {
    console.log(error)
    console.log("database error Not connected")
}
}