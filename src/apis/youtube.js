import axios from "axios";

const KEY = "AIzaSyCV2XWOkkaLS4kUjBohm6XnEJqR8xGYOxo";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
