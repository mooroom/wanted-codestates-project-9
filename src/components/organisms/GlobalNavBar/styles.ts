import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 60px;
  background: cornflowerblue;
  padding: 0 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100px;
  height: 100%;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    gap: 10px;
    color: white;
  }
`;
