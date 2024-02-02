import axios from "axios";

const BASE_URL = "http://"
//process.env.REACT_APP_BASE_URL;
//"http://ec2-13-53-205-68.eu-north-1.compute.amazonaws.com";

export const fetcherPublic = axios.create({
  baseURL: BASE_URL,
});
