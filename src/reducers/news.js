const initState = {
  news: [
    {
      id: 1,
      name: '第一筆最新消息',
      desc: '這裡是第一筆喔!',
    },
    {
      id: 2,
      name: '第二筆最新消息',
      desc: '這裡是第二筆喔!',
    },
    {
      id: 3,
      name: '第三筆最新消息',
      desc: '這裡是第三筆喔!',
    },
  ],
};

const news = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_NEWS':
      return {
        ...state,
        news: [...state.news, action.payload.news],
      };
    case 'DELETE_NEWS':
      return {
        ...state,
        news: state.news.filter((n) => n.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default news;
