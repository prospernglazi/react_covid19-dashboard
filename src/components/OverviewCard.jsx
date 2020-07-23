import React, { useContext, Fragment } from 'react';
import CountUp from 'react-countup';
import { ThemeContext } from '../App';

import { Card, Top, Middle, Bottom } from '../styles/Card';
import { Text, MutedText, IndicatorText } from '../styles/Text';
import { CircleSpinner } from '../styles/Loaders'

export default function OverviewCard({ amount, type }) {
  const darkTheme = useContext(ThemeContext);

  return (
    <Card type='overview' weight='light' theme={darkTheme ? 'dark' : 'light'}>
      {!amount ? (
        <CircleSpinner />
      ) : (
        <Fragment>
          <Top>
            <MutedText size='2rem'>{type}</MutedText>
          </Top>
          <Middle>
            <Text size='3.5rem' weight='bold'>
              <CountUp
                start={0}
                end={amount}
                duration={0.5}
                formattingFn={(value) => value.toLocaleString()}
              />
            </Text>
          </Middle>
          <Bottom>
            <IndicatorText
              size='.5rem'
              diff={null > 0 ? 'increase' : 'decrease'}
              weight='bold'>
              <span style={{ marginRight: '5px' }}>
                {null > 0 ? <span>&#9650;</span> : <span>&#x25BC;</span>}
              </span>
              {'differenceAmount'} Today
            </IndicatorText>
          </Bottom>
        </Fragment>
      )}
    </Card>
  );
}
