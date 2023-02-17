import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
export default function Detail() {
  const { t } = useTranslation();
  return (
    <>
      <Flex>{t("Detail")}</Flex>
    </>
  );
}
const Flex = styled.div`
  display: flex;
`;
