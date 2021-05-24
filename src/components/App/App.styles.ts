import styled from 'styled-components';
import brand from '../../helpers/brand';
import { Device, until } from '../../helpers/media';

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

const ListContainer = styled.div`
  position: relative;
  min-height: 600px;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense;
  grid-gap: 32px;

  @media ${until(Device.Desktop)} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }

  @media ${until(Device.Tablet)} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 12px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  position: relative;
  padding: 10px 20px;
  background-color: ${brand.gunMetal};
  color: ${brand.white};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    &:before {
      width: 100%;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    background-color: ${brand.mossGreen};
    width: 0;
    transition: width 0.5s ease;
  }
`;

const ButtonText = styled.div`
  position: relative;
  z-index: 4;
`;

export const AppStyles = {
  Wrapper,
  Container,
  ListContainer,
  TitleContainer,
  Title,
  Subtitle,
  ButtonContainer,
  Button,
  ButtonText,
};
