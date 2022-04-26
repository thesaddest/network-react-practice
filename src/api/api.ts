import axios from "axios";
import {ProfileType} from "../types/types";

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

    follow (userId: number){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },

    unfollow(userId: number){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId: number){
        console.warn('Obsolete method. Please use profileApi instead')
        return profileAPI.getProfile(userId);
    }
}
export const profileAPI = {
    getProfile(userId: number){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: number){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string){
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile: any){
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile);
    }
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeWithCaptcha {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeWithCaptcha
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
export const securytiAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}



