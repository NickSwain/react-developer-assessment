import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import PostItem, { Post } from '../Post/Post';
import { AppStyles } from './App.styles';

const API_URL = '/api/posts';

const POSTS_PER_PAGE = 8;

function App() {
  const [data, setData] = useState<Post[]>();
  const [pageSize, setPageSize] = useState<number>(POSTS_PER_PAGE);
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

  const handleClick = () => {
    setPageSize(pageSize + POSTS_PER_PAGE);
  };

  return (
    <AppStyles.Wrapper>
      <AppStyles.Container>
        <AppStyles.TitleContainer>
          <AppStyles.Title>React Developer Test</AppStyles.Title>
          <AppStyles.Subtitle>See the posts below</AppStyles.Subtitle>
        </AppStyles.TitleContainer>
        <AppStyles.ListContainer>
          {isLoading ? (
            <Loading />
          ) : (
            data &&
            data.map((post) => (
              <PostItem
                key={post.id}
                id={post.id}
                title={post.title}
                author={post.author}
                summary={post.summary}
                publishDate={post.publishDate}
              />
            ))
          )}
        </AppStyles.ListContainer>
        <AppStyles.ButtonContainer>
          <AppStyles.Button onClick={() => handleClick()}>
            <AppStyles.ButtonText>Load More</AppStyles.ButtonText>
          </AppStyles.Button>
        </AppStyles.ButtonContainer>
      </AppStyles.Container>
    </AppStyles.Wrapper>
  );
}

export default App;
