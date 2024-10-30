import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_URL;

const APIClient = axios.create({ baseURL });
export default APIClient;
