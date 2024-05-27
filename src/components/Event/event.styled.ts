import styled from "styled-components";

const Styled = {
  EventWrapper: styled.div`
    border: 1px solid black;
    border-radius: 10px;
    color: black;
    padding: 12px;
    margin-bottom: 20px;
    .flex-item {
      display: flex;
      justify-content: space-between;
    }
    .name-icon {
      display: flex;
      justify-items: center;
      margin-top: 10px;
    }
    .icon {
      margin-right: 5px;
    }
    .button {
      height: 45px;
    }
  `,
};
export default Styled;
