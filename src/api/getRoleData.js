import { API } from '../config/api';

const getRoleData = async () => {
    try {
        const response = await API.get("/role/getSelectOpt");
        if (response.status === 200) {
            return response?.data?.data;
        }
    } catch (error) {
        console.log(error);
    }
};

export default getRoleData;
