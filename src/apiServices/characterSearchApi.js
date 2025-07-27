import { request } from "../utils/http";

export const characterSearch = async(limit=100)=>{
    const res = await request.get('characters',{
        params:{
            limit
        }
    })
    return res.data;
}