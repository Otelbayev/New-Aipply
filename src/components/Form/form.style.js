import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  .form {
    box-shadow: 0px 3.6px 33.34px 0px #0000001a;
    backdrop-filter: blur(10px);
    background: #ffffff33;
    border: 1px solid #f3f8ff33;
    padding: 30px;
    border-radius: 10px;
    &__title {
      font-weight: 700;
      font-size: 20px;
      padding-bottom: 10px;
    }
    &__desc {
      font-size: 15px;
      font-weight: 500;
    }
    &__button {
      background: linear-gradient(271.16deg, #02a5e0 19.32%, #0000b0 100%);
      padding: 15px;
      text-align: center;
      border: none;
      border-radius: 4px;
      width: 100%;
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 576px) {
    .form {
      &__title {
        font-size: 16px;
      }
      &__desc {
        font-size: 12px;
      }
      &__button {
        font-size: 12px;
      }
    }
  }
`;
