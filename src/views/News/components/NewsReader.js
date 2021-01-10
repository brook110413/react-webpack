import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NewsReader = () => {
  const { id: targetNewsId } = useParams();
  const news = useSelector((state) => state.news.news);

  const targetNews = news.find((n) => String(n.id) === String(targetNewsId));

  return (
    <div>
      <h1>正在閱讀的消息</h1>

      <p>{targetNews.desc}</p>
    </div>
  );
};

export default NewsReader;
