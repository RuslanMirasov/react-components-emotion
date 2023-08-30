import styled from '@emotion/styled';

export const History = styled.table`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 724px;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(58, 79, 105, 0.5);
  thead {
    width: 100%;
    background: #00bcd5;
    color: #fff;
  }
  tbody {
    width: 100%;
    background: #fff;
    color: #7c8388;
  }
  tr {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  tr th,
  tr td {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 33.333333%;
    padding: 10px;
  }
  tr th {
    height: 50px;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    &:last-child {
      border-right: none;
    }
  }
  tr td {
    height: 42px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    &:last-child {
      border-right: none;
    }
  }
  tbody tr:nth-of-type(2n) {
    background: #ecf1f4;
  }
`;
