import {Friend, Status, Avatar, Name} from './FriendListItem.styled.jsx';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
   return (
      <Friend key={id} >
         <Status isonline={isOnline}></Status>
         <Avatar src={avatar} alt={name} width="48" />
         <Name>{name}</Name>
      </Friend>
   )
}