import styled from "styled-components";

export const AccountFormMainHeading = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const AccountForm = styled.form`
  margin-left: 5rem;
  margin-right: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & input[type="text"],
  input[type="email"],
  input[type="number"],
  input[type="password"] {
    border: none;
    font-size: 1.8rem;
    color: white;
    padding: 2rem;
    outline: none;
    margin-bottom: 2rem;
    background: #292f3f;
    box-shadow: 16px 17px 30px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 2rem;
    /* border-bottom: 1px solid ${({ theme }) => theme.fontColor}; */
    color: ${({ theme }) => theme.fontColor};

    ::selection {
      color: white;
      background: red;
    }

    & ::placeholder {
      color: ${({ theme }) => theme.fontColor};
      font-size: 1.5rem;
    }

    &:focus {
      background-color: ${({ theme }) => theme.ebony};
      color: ${({ theme }) => theme.fontColor};
    }

    &:visited {
      background-color: ${({ theme }) => theme.ebony};
      color: ${({ theme }) => theme.fontColor};
    }

    &:active {
      background-color: ${({ theme }) => theme.ebony};
      color: ${({ theme }) => theme.fontColor};
    }
  }

  .custom-btn {
    background: #292f3f;
    box-shadow: 16px 17px 30px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color: #828282;
    font-size: 1.5rem;
    padding: 1.5rem;
  }

  .form-footer-text {
    color: #828282;
    font-size: 1.3rem;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    & a {
      color: #ff1d6e;
      cursor: pointer;
    }
  }
`;

export const DropMenuStyles = styled.div`
  .dropdown-menu {
    background-color: #292f3f;
  }
  & a {
    /* box-shadow: -15px 15px 15px rgba(55, 62, 78, 0.5); */
    color: #ffdc00;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  /* remove bootstrap default dropdown caret icon  */
  .dropdown-toggle {
    & ::after {
      display: none;
    }
  }
`;
