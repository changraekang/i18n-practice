import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
export default function Faq() {
  const { t } = useTranslation();
  return (
    <>
      <Flex>{t("FAQ")}</Flex>
    </>
  );
}
const Flex = styled.div`
  display: flex;
`;
