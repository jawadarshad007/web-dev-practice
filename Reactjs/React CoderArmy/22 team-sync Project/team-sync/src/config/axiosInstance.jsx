import axios from "axios";


export let axiosInstance = axios.create({
    baseURL: "http://api.team-sync.space/api",
    withCredentials: true
    // jab cookies transfer(authentiction ma aik tokn generate hota ha) hotn hn, is token to frontend ma access krne ka lia withCredentials ko true krna parhta ha 
})