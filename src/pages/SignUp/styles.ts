import styled from "styled-components";

export const FormContainerSignIn = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin-top: 4.5rem;

  h1 {
    color: ${({ theme }) => theme.LIGHT_100};
    font-size: 2rem;
    line-height: 140%;
    font-weight: 500;

    font-family: "Poppins", sans-serif;

    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  a {
    width: fit-content;

    font-family: "Poppins", sans-serif;

    color: ${({ theme }) => theme.LIGHT_100};
    font-size: 0.875rem;
    line-height: 2.4;
    font-weight: 500;
    text-decoration: none;

    margin: 0 auto;
  }

  @media (min-width: 768px) {
    max-width: 29.75rem;
    padding: 4rem;
    background: ${({ theme }) => theme.DARK_700};
    border-radius: 16px;
    margin-top: 0;
  }
`;

export const InputFormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: ${({ theme }) => theme.LIGHT_400};
    font-size: 1rem;
    font-weight: 400;
    line-height: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;

  padding: 0 0.875rem;

  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.DARK_900};

  color: ${({ theme }) => theme.LIGHT_100};
  font-size: 1rem;
  font-weight: 400;
  line-height: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.LIGHT_500};
  }
`;

export const FormButton = styled.button`
  width: 100%;
  height: 3rem;

  font-family: "Poppins", sans-serif;

  background: ${({ theme }) => theme.TOMATO_200};
  border: 0;
  border-radius: 5px;

  color: ${({ theme }) => theme.LIGHT_100};

  transition: all 100ms ease-in-out;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.TOMATO_100};
    cursor: pointer;
  }
`;
