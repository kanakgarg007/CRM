import axios from 'axios';

const TENANT_API_BASE_URL = "http://ec2-13-233-91-89.ap-south-1.compute.amazonaws.com:8080/search";
const TENANT_API_BASE_URL1 = "http://ec2-13-233-91-89.ap-south-1.compute.amazonaws.com:8080/search?code=";
const TENANT_REST_API_URL1 = "http://ec2-13-233-91-89.ap-south-1.compute.amazonaws.com:8080/create"

class TenantService {

    getTenant(){
        return axios.get(TENANT_API_BASE_URL);
    }

    createTenant(tenant){
        return axios.post(TENANT_REST_API_URL1, tenant)
    }

    getTenantByCode(code){
        return axios.get(TENANT_API_BASE_URL1 + code);
    }

}

export default new TenantService();