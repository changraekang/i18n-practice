import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
export default function Schedule() {
  const { t } = useTranslation();
  return (
    <>
      <Flex>{t("Schedule an Appointment")}</Flex>
    </>
  );
}
const Flex = styled.div`
  display: flex;
`;
