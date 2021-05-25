import { createServer } from 'miragejs';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', (schema, request) => {
      const items = data;

      console.log(request.queryParams.category);

      if (request.queryParams.category !== undefined) {
        let filteredItems = [];

        // get items by category name
        items.posts.filter((post) =>
          post.categories
            .filter(
              (category) => category.name === request.queryParams.category
            )
            .map(() => {
              filteredItems.push(post);
            })
        );

        filteredItems = filteredItems.filter(
          (item, index) =>
            index === filteredItems.findIndex((post) => post.id === item.id)
        );

        return filteredItems;
      }

      return items.posts;
    });
  },
});
