import { createServer } from 'miragejs';
// import { Post } from '../Post/Post';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', (schema, request) => {
      const items = data;

      return items.posts.slice(0, request.queryParams.pageSize);
    });
  },
});
