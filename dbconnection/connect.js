import mongoose from "mongoose";
export const connectdb = async ()=> {
    try {
const {connection} = await mongoose.connect(process.env.DB, {
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