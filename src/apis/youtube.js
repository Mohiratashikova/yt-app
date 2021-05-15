import axios from "axios";
const KEY = "AIzaSyDXDdWW4G3iIQF0ZyPy3coRfi2Z4TtnQVY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
