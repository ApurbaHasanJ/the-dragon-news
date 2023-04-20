import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h3 className="fw-bold mb-4">All Category</h3>
      <div >
        <h3 style={{backgroundColor: '#e8e6e6'}}
        className="fw-bold py-2 px-4 text-center rounded mb-4">National News</h3>
        {categories.map((category) => (
          <p key={category.id} >
            <Link to={`/category/${category.id}`} className="text-secondary fw-semibold ps-5 fs-6 text-decoration-none"><h5 className="ps-5">{category.name}</h5></Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
