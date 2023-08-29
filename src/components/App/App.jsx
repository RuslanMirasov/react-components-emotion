import css from './App.module.css';
import FriendsList from 'json/friends.json';
import { Section } from 'components/Section/Section';
import { Friends } from 'components/Friends/Friends';


export const App = () => {
  return (
    <main className={css.main}>
      <h1 hidden>React homework 1</h1>
      <Section title='Social media profile'/>
      <Section title='Statistics Section' />
      <Section title='Friends list' content={<Friends friends={ FriendsList } />} />
      <Section title='Transaction history' />
    </main>
  );
};
