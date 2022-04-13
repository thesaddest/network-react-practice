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
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then (response => {
                return response.data
            });
    }
}


export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
            .then (response => {
                return response.data
            });
    }
}

export const followAPI = {
    getFollow (u) {
        return instance.delete(`follow/${u.id}`)
            .then (response => {
                return response.data
            })
    }
}


export const unfollowAPI = {
    getUnfollow (u) {
        return instance.post(`follow/${u.id}`)
            .then (response => {
                return response.data
            });
    }
}
