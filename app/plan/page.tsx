import Plan from './plan';

export default async function Page() {
  const res = await fetch(
    'https://rimac-front-end-challenge.netlify.app/api/plans.json'
  );
  const plans: any = await res.json();
  return <Plan plans={plans.list} />;
}
