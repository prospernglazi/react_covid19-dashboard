import React from 'react';

import MoreInfoCard from './MoreInfoCard';
import OverviewCard from './OverviewCard';
import Chart from './Chart';
import { CardGrid } from '../styles/Container';
import { Text } from '../styles/Text';

export default function OverviewPage({
  country,
  cases,
  recovered,
  deaths,
  todayCases,
  todayRecovered,
  todayDeaths,
  active,
  critical,
  tests,
}) {
  return (
    <>
      <Text size='2rem' weight='bold' color='var(--blue)'>
        {country ? country : 'The World'}
      </Text>
      <CardGrid>
        <OverviewCard type='Cases' amount={cases} today={todayCases} />
        <OverviewCard
          type='Recovered'
          amount={recovered}
          today={todayRecovered}
        />
        <OverviewCard type='Deaths' amount={deaths} today={todayDeaths} />
      </CardGrid>
      <Text size='2rem' weight='bold'>
        Additional Info
      </Text>
      <CardGrid>
        <MoreInfoCard type='Tests' amount={tests} />
        <MoreInfoCard type='Active' amount={active} />
        <MoreInfoCard type='Critical' amount={critical} />
      </CardGrid>
      <Chart
        country={country}
        cases={cases}
        recovered={recovered}
        deaths={deaths}
      />
    </>
  );
}
