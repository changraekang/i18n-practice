import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
export default function Partner() {
  const { t } = useTranslation();
  return (
    <>
      <Flex>{t("Our Partners")}</Flex>
    </>
  );
}
const Flex = styled.div`
  display: flex;
`;
