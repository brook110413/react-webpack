import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsList from './components/NewsList';
import NewsReader from './components/NewsReader';
import NewsForm from './components/NewsForm';

const News = () => {
  return (
    <Switch>
      <Route
        exact
        path="/news"
        component={() => (
          <>
            <h1>這裡是最新消息</h1>
            <NewsList />
            <NewsForm />
          </>
        )}
      />
      <Route path="/news/newsReader/:id" component={NewsReader} />
    </Switch>
  );
};

export default News;
