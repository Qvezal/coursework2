import axios from "axios";

export default async function get_user(data: any) {
  const config = {
    headers: {
      "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
      "Content-Type": "application/json"
    }
  }

  return (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/${data.type}s?populate=deep&filters[auth][login][$eq]=${data.login}`, config)).data.data[0];
}