import queryString from 'query-string';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { NumberParam, StringParam, useQueryParam } from 'use-query-params';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import Listing from '../Listing/Listing';
import { Post } from '../Posts/PostItem';
import { HomeStyles } from './Home.styles';

// Exporting so I can use it on the listing page as well
export const POSTS_PER_PAGE = 8;

const API_URL = '/api/posts';

const Home: FunctionComponent = () => {
  const [data, setData] = useState<Post[]>();
  const [pageSize = POSTS_PER_PAGE, setPageSize] = useQueryParam(
    'pageSize',
    NumberParam
  );
  const [category, setCategory] = useQueryParam('category', StringParam);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);

      if (category !== undefined) {
        setPageSize(POSTS_PER_PAGE);
      }

      const query = {
        category: category,
      };

      const res = await fetch(`${API_URL}?${queryString.stringify(query)}`);

      if (!res.ok) {
        return;
      }

      const resData = await res.json();

      setData(resData);

      setIsLoading(false);
    }

    getData();
  }, [category]);

  const allCategories: string[] = [];

  data?.map((item) => {
    if (item.categories) {
      item.categories.map((category) => {
        if (allCategories.indexOf(category.name) === -1) {
          allCategories.push(category.name);
        }
      });
    }
  });

  return (
    <HomeStyles.Wrapper>
      <HomeStyles.Container>
        <HomeStyles.TitleContainer>
          <HomeStyles.Title>React Developer Test</HomeStyles.Title>
          <HomeStyles.Subtitle>See the posts below</HomeStyles.Subtitle>
        </HomeStyles.TitleContainer>
        <CategoryFilter
          categories={allCategories}
          setCategories={setCategory}
          activeCategory={category}
        />
        <Listing
          isLoading={isLoading}
          data={data}
          allResultsCount={data?.length}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </HomeStyles.Container>
    </HomeStyles.Wrapper>
  );
};

export default Home;
