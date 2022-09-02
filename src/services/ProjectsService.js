import axios from './axios';

export const getProjects = async ()=>await axios.get("/projects");

export const removeProject = async (id)=>await axios.delete("/projects/"+id);

