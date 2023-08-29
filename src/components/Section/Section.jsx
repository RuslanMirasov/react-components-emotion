import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, content }) => {
   return <section className={css.section}>
      <div className={css.container}>
         <h2 className={css.sectionTitle}>{title}</h2>
         {content}
      </div>
   </section>
}

Section.propTypes = {
   title: PropTypes.string.isRequired,
   content: PropTypes.node,
}