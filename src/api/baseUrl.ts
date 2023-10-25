import axios from 'axios';

const HOST_URL = ''; // add when db will be ready

export const host = axios.create({
  baseURL: HOST_URL,
});