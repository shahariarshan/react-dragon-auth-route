import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightSideNav = () => {
    const [categories,setCategories] =useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data =>setCategories(data))
    },[])
    return (
        <div className="space-y-10">
           <h2 className="text-3xl">All Categories</h2>
           {
            categories.map (category => 
                
            <Link className="block ml-4 text-lg font-medium"
            to={`/category/${category.id}`}
            key={category.id}>
            {category.name}
            </Link>)
           }
        </div>
    );
};

export default RightSideNav;