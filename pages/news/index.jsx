import React from 'react';
import axios from 'axios';

import NewsList from '../../components/News/NewsList/NewsList';

export default function NewsPage({ news = [] }) {
  return <NewsList news={news} />;
}

export const getServerSideProps = async (context) => {
  const { req } = context;
  const { data } = await axios.get(`http://${req.headers.host}/api/news`);

  return {
    props: { news: data },
  };
};