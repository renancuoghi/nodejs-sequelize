import config from "../config";
import request from "../request";

const role = {
    list: async () => {
        const response = await request.get(config.backend_host + 'role');
        return await response.json();        
    },
    save: async (role) => {
        const response = await request.post(config.backend_host + 'role', role);
        return await response.json(); 
    }
}

export default role;