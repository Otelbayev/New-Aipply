import styled from "styled-components";

export const Container = styled.div`
  height: 67px;
  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__menu {
      display: none;
      border: none;
      background: transparent;
    }
    &__logo {
      width: 130px;
    }
    &__nav {
      display: flex;
      align-items: center;
      gap: 20px;
      &--item {
        font-weight: 600;
        color: #2b62af;
        font-size: 15px;
        text-decoration: none;
      }
    }
    &__button {
      background: linear-gradient(272.66deg, #02a5e0 19.32%, #0000b0 100%);
      color: white;
      border-radius: 50px;
      padding: 15px 20px;
      border: none;
      font-weight: 400;
      font-size: 16px;
      cursor: pointer;
      transition: 0.3s;
      &:active {
        transform: scale(0.98);
      }
    }
    .black-bg {
      position: absolute;
      top: 67px;
      width: 100%;
      z-index: 5;
      height: calc(100dvh - 67px);
      background: rgba(0, 0, 0, 0.5);
      left: 0;
    }
  }

  @media screen and (max-width: 768px) {
    background: #fff;
    height: 56px;
    .header {
      &__menu {
        display: block;
      }
      &__logo {
        width: 120px;
      }
      &__nav {
        position: absolute;
        transition: height 0.3s;
        /* transform: ${({ open }) =>
          !open ? "translateY(-200%)" : "translateY(0)"}; */
        top: 56px;
        left: 0;
        width: 100%;
        height: ${({ open }) => (open ? "150px" : "0")};
        z-index: ${({ open }) => (open ? "10" : "-1")};
        background: linear-gradient(272.66deg, #02a5e0 19.32%, #0000b0 100%);
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* padding: 20px 0; */
        gap: 5px;
        &--item {
          width: 100%;
          color: #fff;
          padding: 10px 20px;
        }
      }
    }
  }
`;
