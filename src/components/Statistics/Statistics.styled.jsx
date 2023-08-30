import styled from '@emotion/styled';

export const Statistic = styled.section`
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   align-items: flex-start;
   width: 100%;
   max-width: 344px;
   margin: 0 auto;
`;

export const StatisticTitle = styled.h2`
   display: block;
   width: 100%;
   background: #fff;
   padding: 36px 20px;
   color: #505962;
   text-align: center;
   font-weight: 700;
   font-size: 22px;
   line-height: 1.2;
   text-transform: uppercase;
`;

export const StatisticList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   align-items: flex-start;
   width: 100%;
`;

export const StatisticListItem = styled.li`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   align-content: center;
   gap: 8px;
   width: 25%;
   height: 75px;
   span {
      display: block;
      width: 100%;
      text-align: center;
      color: #fff;
      line-height: 1.2;
   }
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-weight: 700;
  font-size: 16px;
`;