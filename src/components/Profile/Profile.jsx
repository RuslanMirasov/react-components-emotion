import { User, Description, Avatar, Name, Tag, Location, Stats, Label, Quantity} from './Profile.styled.jsx';
import PropTypes from 'prop-types';

export const Profile = ({username, tag, location, avatar, stats}) => {
   return (
      <User>
         <Description>
            <Avatar src={avatar} alt={username} />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
         </Description>
         <Stats>
            <li>
               <Label>Followers</Label>
               <Quantity>{stats.followers}</Quantity>
            </li>
            <li>
               <Label>Views</Label>
               <Quantity>{stats.views}</Quantity>
            </li>
            <li>
               <Label>Likes</Label>
               <Quantity>{stats.likes}</Quantity>
            </li>
         </Stats>
      </User>
   )
}

Profile.propTypes = {
   username: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
   avatar: PropTypes.string.isRequired,
   stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
   }),
}
