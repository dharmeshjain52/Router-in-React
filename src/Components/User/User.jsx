import React from "react";
import { useParams } from "react-router-dom";
export default function User(){
    const {userid}=useParams()
    return(
        <div className="bg-gray-500 w-1/3 rounded flex justify-center py-16">
            User:{userid}
        </div>
    );
}