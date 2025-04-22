import { Schema, model } from "mongoose";

// Esquema de colección de usuario
const UserSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
    password: { type: String, required: true },
    cartId: { type: Schema.Types.ObjectId, ref: "Cart" },
    role: { type: String, default: "user" },
});

// Exportación del modelo
const User = model("User", UserSchema);
export default User;
