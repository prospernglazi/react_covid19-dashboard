import React, { useContext } from 'react';
import CountUp from 'react-countup';
import { ThemeContext } from '../../App';

import { Card, Title } from '../../styles/Card';
import { Text, MutedText } from '../../styles/Text';

export default function MoreInfoCard({ type, amount }) {
  const darkTheme = useContext(ThemeContext);

  return (
    <Card h='120px' theme={darkTheme ? 'dark' : 'light'}>
      <Title>
        <MutedText size='1.2rem ' weight='bold'>
          {type}
        </MutedText>
      </Title>
      <Text size='2rem' weight='bold'>
        <CountUp
          start={0}
          end={amount}
          duration={0.5}
          formattingFn={(value) => value.toLocaleString()}
        />
      </Text>
    </Card>
  );
}
