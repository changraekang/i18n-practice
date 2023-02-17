import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
export default function SignUp() {
  const { t } = useTranslation();
  return (
    <>
      <Flex>{t("Sign Up")}</Flex>
    </>
  );
}
const Flex = styled.div`
  display: flex;
`;
