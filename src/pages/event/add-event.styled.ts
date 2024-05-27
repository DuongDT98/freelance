import styled from "styled-components";

const Styled = {
  AddEventWrapper: styled.div`
    .input {
      width: 100%;
      border: 1px solid black;
      box-shadow: inset;
      border-bottom: unset;
    }
    .event-category {
      margin-bottom: 20px;
      margin-top: 20px;
      font-weight: 500;
    }
    .category-item {
      border: 1px solid black;
      border-radius: 10px;
      cursor: pointer;
    }
    .time {
      margin-bottom: 10px;
      font-weight: 500;
    }
    .choose-file {
      height: 300px;
      border: 1px solid black;
      display: flex;
      justify-items: center;
      align-items: center;
    }
    .map {
      text-align: center;
    }
  `,
};
export default Styled;
