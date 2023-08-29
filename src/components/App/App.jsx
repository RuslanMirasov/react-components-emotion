import css from './App.module.css';
import friends from 'json/friends.json';
import user from 'json/user.json';
import { Section } from 'components/Section/Section';
import { Profile } from 'components/Profile/Profile';
import { FriendList } from 'components/FriendList/FriendList';


export const App = () => {
  return (
    <main className={css.main}>
      <h1 hidden>React homework 1</h1>
      <Section title='Social media profile' content={
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      } />
      <Section title='Statistics Section' />
      <Section title='Friends list' content={ <FriendList friends={ friends } />} />
      <Section title='Transaction history' />
    </main>
  );
};
