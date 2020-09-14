import React, { useContext, Fragment } from 'react';
import CountUp from 'react-countup';
import { ThemeContext } from '../../App';

import { Card, Title} from '../../styles/Card';
import { Text, MutedText } from '../../styles/Text';
import { CircleSpinner } from '../../styles/Loaders';

export default function OverviewCard({ amount, type, today, color }) {
  const darkTheme = useContext(ThemeContext);

  return (
    <Card h='200px' theme={darkTheme ? 'dark' : 'light'}>
      <Fragment>
        <Title>
          <MutedText color={color} size='2rem'>
            {type}
          </MutedText>
        </Title>
        {!amount ? (
          <CircleSpinner />
        ) : (
          <>
            <Text size='3rem' weight='bold' color={color}>
              <CountUp
                start={0}
                end={amount}
                duration={0.5}
                formattingFn={(value) => value.toLocaleString()}
              />
            </Text>
            <Text size='1rem' weight='bold' color={color}>
              <span style={{ marginRight: '5px' }}>&#9650; </span>
              <CountUp
                start={0}
                end={today}
                duration={0.5}
                formattingFn={(value) => value.toLocaleString()}
              />
              <span style={{ marginLeft: '5px' }}>Today</span>
            </Text>
          </>
        )}
      </Fragment>
    </Card>
  );
}
