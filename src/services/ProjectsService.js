import axios from './axios';

export const getProjects = async ()=>await axios.get("/projects");


