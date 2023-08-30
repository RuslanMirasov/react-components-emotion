import styled from '@emotion/styled';

export const User = styled.div`
  display: block;
  position: relative;
  width: 100%;
  max-width: 280px;
  background: #fff;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0px 2px 5px rgba(58, 79, 105, 0.5);
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 32px;
  gap: 10px;
  color: #122236;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.1;
`;

export const Avatar = styled.img`
  display: block;
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 112px;
  overflow: hidden;
  border: 4px solid #e7ecf2;
  background: #f1f4f7;
  margin-bottom: 10px;
`;

export const Name = styled.p`
   display: block;
   width: 100%;
   text-align: center;
   font-size: 22px;
   color: #122236;
   margin-bottom: 5px;
`;

export const Tag = styled.p`
   display: block;
   width: 100%;
   text-align: center;
   font-size: 14px;
   color: #2e3f53;
   opacity: 0.6;
`;

export const Location = styled.p`
   display: block;
   width: 100%;
   text-align: center;
   font-size: 14px;
   color: #2e3f53;
   opacity: 0.6;
`;

export const Stats = styled.ul`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   background: #f3f6f9;
   border-top: 1px solid #e5eaf1;
   li {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      width: 33.333333%;
      height: 80px;
      gap: 8px;
      border-right: 1px solid #e5eaf1;
      &:last-child {
         border-right: none;
      }
      span {
         display: block;
         width: 100%;
         text-align: center;
         color: #2e3f53;
         line-height: 1;
      }
   }
`;

export const Label = styled.span`
   font-size: 12px;
   font-weight: 700;
   opacity: 0.4;
`;

export const Quantity = styled.span`
   font-size: 16px;
   font-weight: 700;
`;