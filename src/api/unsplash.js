import axios from "axios";
import { CLIENT_ID } from "./env";
import { SECRET } from "./env";

//Creating a custom client
//use for future apps

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `${CLIENT_ID} ${SECRET}`
    // Authorization:
    //   "Client-ID cedabbd6fc4ea3c5bd5ee969ad5f1f9ba7c0e537f329d2d5bf880ae47ba16950"
  }
});
