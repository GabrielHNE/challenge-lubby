import { api } from './axios.config';
import {User} from '../../types';


export async function getUserByName(username: string):Promise<User | null>{
    try{
        const res = await api.get(`/users/${username}`);

        if(res.status !== 200){
            return null;
        }

        const {
            login,
            name,
            email,
            location,
            company,
            bio,
            avatar_url,
            followers_url,
            following_url,
            organizations_url,
            starred_url,
            public_repos,
            public_gists,
            followers,
            following
        } = res.data;

        return {
            login,
            name,
            email,
            location,
            company,
            bio,
            avatar_url,
            followers_url,
            following_url,
            organizations_url,
            starred_url,
            public_repos,
            public_gists,
            followers,
            following
        };
    }catch(e){
        throw new Error(e);
    }
}