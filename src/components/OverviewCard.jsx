import React, { useContext, Fragment } from 'react';
import CountUp from 'react-countup';
import { ThemeContext } from '../App';

import { Card, Top, Middle, Bottom } from '../styles/Card';
import { Text, MutedText } from '../styles/Text';
import { CircleSpinner } from '../styles/Loaders';

export default function OverviewCard({ amount, type, today }) {
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
            <Text size='1rem' weight='bold' color='#03a9f4'>
              <span style={{ marginRight: '5px' }}>&#9650; </span>
              <CountUp
                start={0}
                end={today}
                duration={0.5}
                formattingFn={(value) => value.toLocaleString()}
              />
            </Text>
          </Bottom>
        </Fragment>
      )}
    </Card>
  );
}
