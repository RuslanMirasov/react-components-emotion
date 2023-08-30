import styled from '@emotion/styled';

export const SectionWrapper = styled.section`
  display: block;
  width: 100%;
  padding: 80px 20px;
  &:nth-of-type(2n) {
    background: #f1f4f7;
  }
  @media screen and (max-width: 767px) {
    padding: 40px 20px;
  }
`;

export const SectionTitle = styled.h2`
  display: block;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 50px;
  color: #556b85;
`;

export const Container = styled.div`
  display: block;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;
