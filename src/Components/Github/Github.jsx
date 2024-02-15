import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data=useLoaderData();
    return(
        <div className="flex flex-col justify-center items-center gap-4">
            Github Followers:{data.followers}
            <img src={data.avatar_url} alt="photo" className="w-40 h-40"/>
        </div>
    );
}
export const githubInfoLoader=async ()=>{
    const result= await fetch('https://api.github.com/users/dharmeshjain52')
    return result.json()
}