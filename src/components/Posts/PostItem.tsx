import React, { FunctionComponent } from 'react';
import { PostStyles } from './Post.styles';

export interface Category {
  id: string;
  name: string;
}

interface Author {
  name: string;
  avatar: string;
}

export interface Post {
  id: string;
  title?: string;
  publishDate?: string;
  author?: Author;
  summary?: string;
  categories?: Category[];
}

const PostItem: FunctionComponent<Post> = ({
  title,
  author,
  summary,
  publishDate,
}) => {
  return (
    <PostStyles.Container>
      {title && <PostStyles.Title>{title}</PostStyles.Title>}
      {summary && <PostStyles.Summary>{summary}</PostStyles.Summary>}
      {author && (
        <PostStyles.AuthorContainer>
          {author.avatar && (
            <PostStyles.AuthorImageContainer>
              <PostStyles.AuthorImage src={author.avatar} />
            </PostStyles.AuthorImageContainer>
          )}
          {author.name && (
            <PostStyles.AuthorName>{author.name}</PostStyles.AuthorName>
          )}
        </PostStyles.AuthorContainer>
      )}
      {publishDate && (
        <PostStyles.PublishedDateContainer>
          <PostStyles.PublishedDateLabel>
            Published Date:
          </PostStyles.PublishedDateLabel>
          <PostStyles.PublishedDate>{publishDate}</PostStyles.PublishedDate>
        </PostStyles.PublishedDateContainer>
      )}
    </PostStyles.Container>
  );
};

export default PostItem;
