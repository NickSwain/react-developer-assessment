import { createServer } from 'miragejs';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', (schema, request) => {
      const items = data;

      // check if the category filter is undefined
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

        // Some of the blog posts had the same category twice adding in the below so we only get unique posts back.
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
