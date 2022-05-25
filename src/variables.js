const apiUrl = process.env.REACT_APP_API_URL;
const bidHistory = [
  {
    id: 1,
    productName: 'Cricket Ball',
    price: 12,
    date: '12-02-02',
    quantity: 1,
    storeName: 'Aarong',
    image:
      'https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464'
  },
  {
    id: 2,
    productName: 'Base Ball',
    price: 52,
    date: '12-02-08',
    quantity: 1,
    storeName: 'Aarong',
    image:
      'https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464'
  },
  {
    id: 3,
    productName: 'Hand',
    price: 92,
    date: '12-02-07',
    quantity: 1,
    storeName: 'Aarong',
    image:
      'https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464'
  },
  {
    id: 4,
    productName: 'Bulb',
    price: 122,
    date: '12-02-22',
    quantity: 1,
    storeName: 'Aarong',
    image:
      'https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464'
  }
];

module.exports = {
  apiUrl,
  bidHistory
};
