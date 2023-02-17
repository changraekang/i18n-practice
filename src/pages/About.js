import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <Flex>{t("About LuluBeauty")}</Flex>
    </>
  );
}
const Flex = styled.div`
  display: flex;
`;
