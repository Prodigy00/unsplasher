import axios from "axios";

//Creating a custom client
//use for future apps

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID cedabbd6fc4ea3c5bd5ee969ad5f1f9ba7c0e537f329d2d5bf880ae47ba16950"
  }
});
