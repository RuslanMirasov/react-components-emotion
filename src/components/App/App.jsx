import css from './App.module.css';
import FriendsList from 'json/friends.json';
import UserInfo from 'json/user.json';
import { Section } from 'components/Section/Section';
import { User } from 'components/User/User';
import { Friends } from 'components/Friends/Friends';


export const App = () => {
  return (
    <main className={css.main}>
      <h1 hidden>React homework 1</h1>
      <Section title='Social media profile' content={<User user={ UserInfo } />}/>
      <Section title='Statistics Section' />
      <Section title='Friends list' content={<Friends friends={ FriendsList } />} />
      <Section title='Transaction history' />
    </main>
  );
};
