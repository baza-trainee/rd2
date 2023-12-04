import axios from "axios";
import { useQuery } from "react-query";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const usePosts = () => {
  return useQuery<Post[], Error>("posts", async () => {
    const responce = await axios.get("https://jsonplaceholder.typicode.com/posts");

    return responce.data;
  });
};
