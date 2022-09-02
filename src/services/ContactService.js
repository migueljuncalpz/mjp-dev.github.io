import axios from "./axios";

export const sendContact = async (contact)=>{
    await axios.post("/contact",contact);
}
