import config from "../config";
import request from "../request";

const user = {
    list: async (query) => {
        const response = await request.post(config.backend_host + 'user/list', query);
        return await response.json();        
    }
}

export default user;