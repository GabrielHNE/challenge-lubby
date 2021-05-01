import { api } from './axios.config';
import {User, Repo} from '../../types';


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

export async function getRepos(username: string):Promise<Array<Repo> | null>{
    try{
        //use fetch, the url already come with full path
        const res = await api.get(`/users/${username}/repos`,{
            method: 'GET'
        });

        
        if(res.status !== 200){
            return null;
        }
        
        let newArr = res.data.map((repo: any) => {
            return {
                name: repo.name,
                description: repo.description,
                stargazers_count: repo.stargazers_count,
                _private:  repo.private
            }
        })

        return newArr; //array
    }catch(e){
        throw new Error(e);
    }
}

export async function getFollowersAsUsers(username: string):Promise<Array<User> | null>{
    // https://api.github.com/users/gabrielhne/followers

    try{
        //use fetch, the url already come with full path
        const res = await api.get(`/users/${username}/followers`,{
            method: 'GET'
        });

        
        if(res.status !== 200){
            return null;
        }

        // console.log('inside api', res.data);
        
        //not all info come with this url, need to nest other call inside
        let newArr = [];
        for(let i = 0; i < res.data.length; i++){
            const fol = res.data[i];
            const user = await getUserByName(fol.login);

            if(user != null) newArr.push(user);
        }
       

        return newArr; //array
    }catch(e){
        throw new Error(e);
    }
}

export async function getFollowingAsUsers(username: string):Promise<Array<User> | null>{
    // https://api.github.com/users/gabrielhne/followers

    try{
        //use fetch, the url already come with full path
        const res = await api.get(`/users/${username}/following`,{
            method: 'GET'
        });

        
        if(res.status !== 200){
            return null;
        }

        // console.log('inside api', res.data);
        
        //not all info come with this url, need to nest other call inside
        let newArr = [];
        for(let i = 0; i < res.data.length; i++){
            const fol = res.data[i];
            const user = await getUserByName(fol.login);

            if(user != null) newArr.push(user);
        }
       

        return newArr; //array
    }catch(e){
        throw new Error(e);
    }
}