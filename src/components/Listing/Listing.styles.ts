import styled from 'styled-components';
import brand from '../../helpers/brand';
import { Device, until } from '../../helpers/media';

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
  border-radius: 5px;
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
    border-radius: 5px;
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

export const ListingStyles = {
  ListContainer,
  ButtonContainer,
  Button,
  ButtonText,
};
