import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className="space-y-4">
            <h2 className="text-2xl">All Caegories</h2>
            {
                categories.map(category => <Link
                    to={`/category/${category.id}`}
                    className="block px-7 py-1 font-semibold text-xl hover:bg-slate-200 hover:text-black hover:px-4 hover:py-1" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;