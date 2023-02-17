import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
export default function SignIn() {
  const { t } = useTranslation();
  return (
    <>
      <Flex>{t("Sign In")}</Flex>
    </>
  );
}
const Flex = styled.div`
  display: flex;
`;
