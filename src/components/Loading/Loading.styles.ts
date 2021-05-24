import styled from 'styled-components';
import brand from '../../helpers/brand';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DotsContainer = styled.div`
  width: 85px;
  display: flex;
  justify-content: space-between;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${brand.gunMetal};
  animation: DotAnimation 3s ease-in-out infinite;

  &:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  &:nth-of-type(3) {
    animation-delay: 1s;
  }

  @keyframes DotAnimation {
    0% {
      transform: translateY(0px);
    }

    25% {
      transform: translateY(20px);
    }

    75% {
      transform: translateY(-20px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

export const LoadingStyles = {
  Container,
  DotsContainer,
  Dot,
};
