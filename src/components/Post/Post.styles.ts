import styled from 'styled-components';
import brand from '../../helpers/brand';

const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: ${brand.gunMetal};
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-top: 0;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 10px;
  font-weight: 700;
  color: ${brand.white};
  height: 100%;
`;

const Summary = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 10px;
  height: 100%;
  color: ${brand.white};
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-bottom: 10px;
`;

const AuthorImageContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${brand.mossGreen};
  overflow: hidden;
  margin-right: 10px;
`;

const AuthorImage = styled.img``;

const AuthorName = styled.div`
  color: ${brand.white};
`;

const PublishedDateContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const PublishedDateLabel = styled.div`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 10px;
  font-weight: 700;
  color: ${brand.white};
`;

const PublishedDate = styled.div`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 10px;
  color: ${brand.white};
`;

export const PostStyles = {
  Container,
  Title,
  Summary,
  AuthorContainer,
  AuthorName,
  AuthorImageContainer,
  AuthorImage,
  PublishedDateContainer,
  PublishedDateLabel,
  PublishedDate,
};
