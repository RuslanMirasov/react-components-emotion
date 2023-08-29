import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
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
