import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
});

const Register = mongoose.models.Register || mongoose.model("Register", RegisterSchema);

export default Register;