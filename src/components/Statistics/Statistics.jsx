import {Statistic, StatisticTitle, StatisticList, StatisticListItem, Label, Percentage} from './Statistics.styled.jsx';
import { getRandomHexColor } from 'utils/random-color';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
   return (
      <Statistic>
         {title && (<StatisticTitle>{title}</StatisticTitle>)}
         <StatisticList>
            {stats.map(({ id, label, percentage }) => (
               <StatisticListItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
                  <Label>{label}</Label>
                  <Percentage>{percentage}%</Percentage>
               </StatisticListItem>
            ))}
         </StatisticList>
      </Statistic>
   )
}

Statistics.propTypes = {
   title: PropTypes.string,
   stats: PropTypes.arrayOf(
      PropTypes.exact({
         id: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
         percentage: PropTypes.number.isRequired,
      }),
   ),
}