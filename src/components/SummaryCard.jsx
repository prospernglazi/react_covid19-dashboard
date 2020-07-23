import React, { useContext } from 'react';
import CountUp from 'react-countup';
import { ThemeContext } from '../App';

import { Card, Top, Bottom } from '../styles/Card';
import { Text, MutedText, IndicatorText } from '../styles/Text';
import { format } from '../utils/format';

export default function SmallCard() {
  const darkTheme = useContext(ThemeContext);

  return (
    <Card theme={darkTheme ? 'dark' : 'light'}>
      <Top>
        <MutedText weight='bold'>Likes</MutedText>
        <span>{'icon'}</span>
      </Top>
      <Bottom>
        <Text size='2rem' weight='bold'>
          <CountUp start={0} end={10} duration={2.5} formattingFn={format} />
        </Text>
        <IndicatorText
          size='.5rem'
          diff={null ? 'increase' : 'decrease'}
          weight='bold'>
          <span style={{ marginRight: '5px' }}>
            {null ? <span>&#9650;</span> : <span>&#x25BC;</span>}
          </span>
          {0}%
        </IndicatorText>
      </Bottom>
    </Card>
  );
}
