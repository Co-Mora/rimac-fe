import { IPlanData } from '@rimac/types';
import Plan from './plan';

export default async function Page() {
  const res = await fetch(
    'https://rimac-front-end-challenge.netlify.app/api/plans.json'
  );
  const plans: { list: IPlanData[] } = await res.json();
  return <Plan data={plans.list} />;
}
