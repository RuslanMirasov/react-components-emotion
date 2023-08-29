import css from './Section.module.css'

export const Section = ({ title }) => {
   return <section className={css.section}>
      <div className={css.container}>
         <h2 className={css.sectionTitle}>{title}</h2>
      </div>
   </section>
}