import css from './Friends.module.css';
import PropTypes from 'prop-types';
import { Friend } from 'components/Friend/Friend';

export const Friends = ({ friends }) => {
   return (
      <ul className={css.friends}>
         {friends.map(({ id, avatar, name, isOnline }) => (
            <Friend
               key={id}
               avatar={avatar}
               name={name}
               isOnline={isOnline}
            />
         ))}
      </ul>
   )
}

Friends.propTypes = {
   friends: PropTypes.arrayOf(
      PropTypes.exact({
         avatar: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         isOnline: PropTypes.bool.isRequired,
         id: PropTypes.number.isRequired
      }),
   ),
}