import { client } from "../../../../sanity/lib/client";


const FetchData = async() =>{
    const response = await client.fetch(`*[_type == "product"]`);
    return response;
};

export default FetchData;