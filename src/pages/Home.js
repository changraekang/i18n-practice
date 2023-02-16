import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <div>예시입니다</div>
      <div>{t("language")}</div>
      <div>{t("example")}</div>
      <div>{t("hello")}</div>
    </Container>
  );
}

const Container = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 6.0625rem;
  padding-right: 30px;
  padding-left: 30px;
  box-sizing: border-box;
`;
