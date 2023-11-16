import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 69.125rem;
  height: calc(100vh - 11.875rem);
  margin: 5.625rem auto 6.25rem;

  padding: 0 2.875rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    max-width: 17.375rem;
  }

  @media (min-width: 768px) {
    padding: 0 2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
