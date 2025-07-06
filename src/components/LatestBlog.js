import React from 'react';
import { Link } from 'react-router-dom';

const LatestBlog = ({ imageUrl, title, id, category }) => {
  return (
    <Link to={`/blog/${id}`} className="latest-blog-card">
      <div className="latest-blog-inner">
        <img src={imageUrl} alt={title} className="latest-blog-img" />
        <div className="latest-blog-info">
          <p className="latest-blog-title">{title}</p>
          <span className="latest-blog-category">{category}</span>
        </div>
      </div>
    </Link>
  );
};

export default LatestBlog;
