import axios from "axios";
export const singlePropertyLoader = async ({ request, params }) => {
    try {
      const res = await axios.get("http://localhost:8800/api/property/" + params.id, {
        withCredentials: true,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error("Error fetching property:", error);
      throw error;  
    }
  };
export const listPropertyLoader = async ({request, params}) =>{

    const query = request.url.split("?")[1]
    console.log(query);
    const res = await axios.get("http://localhost:8800/api/property?" + query)
    console.log(res);
    return res.data
}


