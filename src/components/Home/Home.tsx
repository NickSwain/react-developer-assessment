import queryString from 'query-string';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { NumberParam, useQueryParam } from 'use-query-params';
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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);

      const query = {
        pageSize: pageSize,
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
  }, [pageSize]);

  const categories: string[] = [];

  data?.map((item) => {
    if (item.categories) {
      item.categories.map((category) => {
        if (categories.indexOf(category.name) === -1) {
          categories.push(category.name);
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
        <Listing
          isLoading={isLoading}
          data={data}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </HomeStyles.Container>
    </HomeStyles.Wrapper>
  );
};

export default Home;
