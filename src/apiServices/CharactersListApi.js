import { request } from "../utils/http";
export const characterList = async (limit = 8)=>{
    const res = await request.get('characters',{
        params:{
            limit
        }
    })
    return res.data
}