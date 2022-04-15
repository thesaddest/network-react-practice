import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "b0da98ff-c4df-4586-9e34-dc9cdc3ab2c9"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },

    follow (userId){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },

    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId){
        console.warn('Obsolete method. Please use profileApi instead')
        return profileAPI.getProfile(userId);
    }
}
export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status});
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then (response => {
                return response.data;
            });
    }
}



