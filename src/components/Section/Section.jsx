import PropTypes from 'prop-types';
import { SectionWrapper, Container, SectionTitle } from './Section.styled.js';

export const Section = ({ title, children  }) => {
   return (
      <SectionWrapper>
         <Container>
            {title && (<SectionTitle>{title}</SectionTitle>)}
            {children}
         </Container>
      </SectionWrapper>
   )
}

Section.propTypes = {
   title: PropTypes.string,
}