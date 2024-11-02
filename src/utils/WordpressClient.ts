import axios from "axios";

export const WordpressClient = axios.create({
  baseURL:
    "http://public-api.wordpress.com/rest/v1/sites/raffaysajjadcom.wordpress.com/",
});
