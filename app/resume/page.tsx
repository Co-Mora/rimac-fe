import { IUser } from '@rimac/types';
import Resume from './resume';

export default async function Page() {
  const res = await fetch(
    'https://rimac-front-end-challenge.netlify.app/api/user.json'
  );
  const user: IUser = await res.json();
  return <Resume user={user} />;
}
