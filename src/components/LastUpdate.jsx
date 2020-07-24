import React from 'react';
import logo from '../assets/images/logo.svg';

import { LastUpdateContainer, FlexContainer } from '../styles/Container';
import { Text, MutedText } from '../styles/Text';
import { Image } from '../styles/Image';

export default function LastUpdate({ updated }) {
  console.log(updated)
  return (
    <LastUpdateContainer>
      <Image src={logo}></Image>
      <FlexContainer d="column">
        <Text size='2.5rem' weight='bold'>
          Covid-19 Dashboard
        </Text>
        <MutedText weight='bold'>
          Last Updated: {new Date(updated).toDateString()}
        </MutedText>
      </FlexContainer>
    </LastUpdateContainer>
  );
}
