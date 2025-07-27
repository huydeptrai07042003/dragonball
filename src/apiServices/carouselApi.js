import { request } from "../utils/http";

export const searchApi = async (limit = 10) => {
    try {
        const res = await request.get('characters', {
            params: {
                limit,
            },
        });
        return res.data.items;
    } catch (error) {
        console.error(error);
    }
};
