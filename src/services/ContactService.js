import axios from "./axios";

// Contact form post.
export const sendContact = async (contact) => await axios.post("/contact",contact);


