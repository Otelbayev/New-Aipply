import styled from "styled-components";

export const Container = styled.div`
  height: calc(100dvh - 67px);
  display: flex;
  align-items: center;
  justify-content: center;
  .course-showcase {
    padding: 50px 0;
    display: flex;
    align-items: center;
    gap: 50px;
    &__left {
      width: 50%;
      &--title {
        font-size: 60px;
      }
      &--desc {
        color: #8ca2c0;
        font-size: 20px;
        margin: 20px 0;
      }
    }
    &__right {
      width: 50%;
      object-fit: cover;
      img {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 992px) {
    .course-showcase {
      &__left {
        width: 60%;
        &--title {
          font-size: 45px;
        }
        &--desc {
          margin: 10px 0;
          font-size: 16px;
        }
      }
      &__right {
        width: 40%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: calc(100dvh - 56px);
    .course-showcase {
      flex-direction: column-reverse;
      gap: 10px;
      &__left {
        width: 100%;
      }
      &__right {
        width: 50%;
      }
    }
  }
`;
