import React, { FunctionComponent } from 'react';
import { POSTS_PER_PAGE } from '../Home/Home';
import Loading from '../Loading/Loading';
import PostItem, { Post } from '../Posts/PostItem';
import { ListingStyles } from './Listing.styles';

interface ListingProps {
  isLoading: boolean;
  data?: Post[];
  allResultsCount?: number;
  pageSize: number | null | undefined;
  setPageSize: any;
}

const Listing: FunctionComponent<ListingProps> = ({
  isLoading,
  data,
  allResultsCount,
  pageSize,
  setPageSize,
}) => {
  const handleClick = () => {
    if (pageSize) {
      setPageSize(pageSize + POSTS_PER_PAGE);
    }
  };

  if (!pageSize) {
    return null;
  }

  return (
    <>
      <ListingStyles.ListContainer>
        {isLoading ? (
          <Loading />
        ) : (
          data &&
          data
            .slice(0, pageSize)
            .map((post) => (
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

      {/* Only display the load more button if there are more posts to load */}
      {allResultsCount !== undefined &&
        pageSize !== null &&
        allResultsCount > pageSize && (
          <ListingStyles.ButtonContainer>
            <ListingStyles.Button onClick={() => handleClick()}>
              <ListingStyles.ButtonText>Load More</ListingStyles.ButtonText>
            </ListingStyles.Button>
          </ListingStyles.ButtonContainer>
        )}
    </>
  );
};

export default Listing;
