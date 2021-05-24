import React, { FunctionComponent } from 'react';
import { POSTS_PER_PAGE } from '../Home/Home';
import Loading from '../Loading/Loading';
import PostItem, { Post } from '../Posts/PostItem';
import { ListingStyles } from './Listing.styles';

interface ListingProps {
  isLoading: boolean;
  data?: Post[];
  pageSize: number | null;
  setPageSize: any;
}

const Listing: FunctionComponent<ListingProps> = ({
  isLoading,
  data,
  pageSize,
  setPageSize,
}) => {
  const handleClick = () => {
    if (pageSize) {
      setPageSize(pageSize + POSTS_PER_PAGE);
    }
  };

  return (
    <>
      <ListingStyles.ListContainer>
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
      </ListingStyles.ListContainer>
      <ListingStyles.ButtonContainer>
        <ListingStyles.Button onClick={() => handleClick()}>
          <ListingStyles.ButtonText>Load More</ListingStyles.ButtonText>
        </ListingStyles.Button>
      </ListingStyles.ButtonContainer>
    </>
  );
};

export default Listing;
