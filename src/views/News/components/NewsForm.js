import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNews } from '../../../actions/news';

const NewsForm = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      名稱：
      <input value={name} onChange={(e) => setName(e.target.value)} />
      敘述：
      <input value={desc} onChange={(e) => setDesc(e.target.value)} />
      <button
        onClick={() => {
          dispatch(
            addNews({
              id: Math.random(),
              name,
              desc,
            })
          );
        }}
      >
        新增最新消息
      </button>
    </div>
  );
};

export default NewsForm;
