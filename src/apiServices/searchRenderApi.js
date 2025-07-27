import { request } from '../utils/http';
export const renderSkin = async (Id) => {
    const res = await request.get(`characters/${Id}`);
    return res.data;
};
