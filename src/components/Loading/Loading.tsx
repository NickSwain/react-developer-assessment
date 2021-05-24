import React, { FunctionComponent } from 'react';
import { LoadingStyles } from './Loading.styles';

const Loading: FunctionComponent = () => {
  return (
    <LoadingStyles.Container>
      <LoadingStyles.DotsContainer>
        <LoadingStyles.Dot />
        <LoadingStyles.Dot />
        <LoadingStyles.Dot />
      </LoadingStyles.DotsContainer>
    </LoadingStyles.Container>
  );
};

export default Loading;
