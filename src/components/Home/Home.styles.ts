import styled from 'styled-components';
import brand from '../../helpers/brand';

const Wrapper = styled.section`
  padding: 30px 0;
  background-color: ${brand.mintCream};
`;

const Container = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  max-width: 768px;
  padding: 0 30px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

export const HomeStyles = {
  Wrapper,
  Container,
  TitleContainer,
  Title,
  Subtitle,
};
