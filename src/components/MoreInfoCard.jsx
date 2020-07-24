import React, { useContext } from 'react';
import CountUp from 'react-countup';
import { ThemeContext } from '../App';

import { Card, Top, Bottom } from '../styles/Card';
import { Text, MutedText } from '../styles/Text';
import { format } from '../utils/format';

export default function MoreInfoCard({ type, amount }) {
  const darkTheme = useContext(ThemeContext);

  return (
    <Card theme={darkTheme ? 'dark' : 'light'}>
      <Top>
        <MutedText size='1.2rem ' weight='bold'>
          {type}
        </MutedText>
      </Top>
      <Bottom>
        <Text size='2rem' weight='bold'>
          <CountUp
            start={0}
            end={amount}
            duration={0.5}
            formattingFn={(value) => value.toLocaleString()}
          />
        </Text>
      </Bottom>
    </Card>
  );
}
