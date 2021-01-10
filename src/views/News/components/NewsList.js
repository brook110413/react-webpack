import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNews } from '../../../actions/news';

const NewsList = () => {
  const news = useSelector((state) => state.news.news);
  const dispatch = useDispatch();

  return (
    <ul>
      {news.map((n) => (
        <li key={n.id}>
          <Link to={`/news/newsReader/${n.id}`}>{n.name}</Link>
          <button
            onClick={() => {
              dispatch(deleteNews(n.id));
            }}
          >
            刪除
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
