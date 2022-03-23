import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

function GlobalNavBar() {
  return (
    <S.Container>
      <S.Wrapper>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/ranking">랭킹</Link>
          </li>
        </ul>
      </S.Wrapper>
    </S.Container>
  );
}

export default GlobalNavBar;
