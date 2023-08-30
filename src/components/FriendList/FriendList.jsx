import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Friends } from './FriendList.styled.jsx';

export const FriendList = ({ friends }) => {
   return (
      <Friends>
         {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem
               key={id}
               avatar={avatar}
               name={name}
               isOnline={isOnline}
            />
         ))}
      </Friends>
   )
}

FriendList.propTypes = {
   friends: PropTypes.arrayOf(
      PropTypes.exact({
         avatar: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         isOnline: PropTypes.bool.isRequired,
         id: PropTypes.number.isRequired
      }),
   ),
}