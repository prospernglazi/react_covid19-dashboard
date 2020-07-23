import React from 'react';

import SummaryCard from './SummaryCard';
import OverviewCard from './OverviewCard';
import { CardGrid } from '../styles/Container';
import { Text } from '../styles/Text';

export default function OverviewPage({
  country,
  confirmed,
  recovered,
  deaths,
}) {
  return (
    <>
      <div size='2rem'>
        <Text size='2rem' weight='bold' color='var(--blue)'>
          {country ? country : 'The World'}
        </Text>
      </div>
      <CardGrid>
        <OverviewCard type='Confirmed' amount={confirmed} />
        <OverviewCard type='Recovered' amount={recovered} />
        <OverviewCard type='Deaths' amount={deaths} />
      </CardGrid>
      <CardGrid>
        <Text size='2rem' weight='bold' gc='1 / -1'>
          Highest Total Cases
        </Text>
        <SummaryCard />
      </CardGrid>
    </>
  );
}
