import styled from '@emotion/styled';

export const Friend = styled.li`
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   align-items: center;
   border-radius: 14px;
   padding: 10px 20px;
   width: 100%;
   box-shadow: 0px 2px 5px rgba(58, 79, 105, 0.5);
   background: #fff;
`;

export const Status = styled.span`
   background: ${props => {
      switch (props.isonline) {
         case true: return '#56ab58';
         case false: return '#fd5256';
         default: return '#ccc';
      }
   }};
   width: 20px;
   height: 20px;
   border-radius: 20px;
   margin-right: 20px;
   &.online {
      background: #56ab58;
   }
   &.offline {
      background: #fd5256;
   }
`;

export const Avatar = styled.img`
   display: block;
   width: 68px;
   height: 68px;
   border-radius: 8px;
   overflow: hidden;
   object-fit: cover;
   background: #d2e7ff;
   box-shadow: inset 2px 2px 2px rgba(58, 79, 105, 0.3);
   padding: 10px;
   margin-right: 20px;
`;

export const Name = styled.p`
   display: inline-block;
   color: #3c4f65;
   font-size: 22px;
   font-weight: 700;
   line-height: 1.2;
`;