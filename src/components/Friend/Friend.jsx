import css from './Friend.module.css';
import PropTypes from 'prop-types';

export const Friend = ({ id, avatar, name, isOnline }) => {
   let isonline = css.offline;
   if (isOnline === true) {isonline = css.online;}
   return (
      <li key={id} className={css.item} >
         <span className={`${css.status} ${isonline}`}></span>
         <img className={css.avatar} src={avatar} alt={name} width="48" />
         <p className={css.name}>{name}</p>
      </li>
   )
}

Friend.propTypes = {
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired,
   id: PropTypes.number
}