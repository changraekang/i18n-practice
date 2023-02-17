import React, { useState } from "react";
import styled from "styled-components";
// 로고
import logo from "../assets/images/logo.svg";
import faBar from "../assets/images/faBar.png";
import english from "../assets/images/america.png";
import vietnam from "../assets/images/vietnam.png";
import thailand from "../assets/images/thailand.png";
// 반응형
import { useMediaQuery } from "react-responsive";

// 번역팩
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ minWidth: 1120 });
  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }
  const [isOpenMyRightMenu, setIsOpenMyRightMenu] = useState(false);
  const [isOpenMyLeftMenu, setIsOpenMyLeftMenu] = useState(false);

  const handleOpenMyRightMenu = () => {
    !isOpenMyRightMenu
      ? setIsOpenMyRightMenu(true)
      : setIsOpenMyRightMenu(false);
  };
  const handleSignIn = () => {
    navigate("/signin");
    setIsOpenMyLeftMenu(false);
  };
  const handleSignUp = () => {
    navigate("/signup");
    setIsOpenMyLeftMenu(false);
  };
  function handleMenuClick(menu) {
    navigate(`/${menu}`);
    setIsOpenMyLeftMenu(false);
  }

  const handleOpenMyLeftMenu = () => {
    !isOpenMyLeftMenu ? setIsOpenMyLeftMenu(true) : setIsOpenMyLeftMenu(false);
  };
  return (
    <NavContainer>
      <MyFaBarsIcon src={faBar} onClick={handleOpenMyLeftMenu} />
      {isOpenMyLeftMenu && (
        <MyLeftMenu>
          <MyMenuAuthLi onClick={handleSignIn}>{t("Sign In")}</MyMenuAuthLi>
          <MyMenuAuthLi onClick={handleSignUp}>{t("Sign Up")}</MyMenuAuthLi>
          <MyLeftMenuLi onClick={() => handleMenuClick("about")}>
            {t("About LuluBeauty")}
          </MyLeftMenuLi>
          <MyLeftMenuLi onClick={() => handleMenuClick("partner")}>
            {t("Our Partners")}
          </MyLeftMenuLi>
          <MyLeftMenuLi onClick={() => handleMenuClick("schedule")}>
            {t("Schedule an Appointment")}
          </MyLeftMenuLi>
          <MyLeftMenuLi onClick={() => handleMenuClick("faq")}>
            {t("FAQ")}
          </MyLeftMenuLi>
        </MyLeftMenu>
      )}
      <LogoSymbol src={logo} onClick={() => navigate("/")} />
      <NavContents>
        <MyButton onClick={handleOpenMyRightMenu}>
          Language
          {isOpenMyRightMenu && (
            <MyRightMenu>
              <MyMenuLi onClick={() => handleClick("en")}>
                <MyMenuIcon profileIcon={true} src={english} alt="english" />
                English
              </MyMenuLi>
              <MyMenuLi onClick={() => handleClick("vit")}>
                <MyMenuIcon src={vietnam} alt="vietnam" />
                Vietnamese
              </MyMenuLi>
              <MyMenuLi onClick={() => handleClick("thai")}>
                <MyMenuIcon src={thailand} alt="thailand" />
                Thai
              </MyMenuLi>
            </MyRightMenu>
          )}
        </MyButton>
      </NavContents>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.0625rem;
  box-sizing: border-box;
`;
//border-bottom: 1px solid #d3d3d3; 네브바 하단줄

const NavContents = styled.div`
  display: flex;
  align-items: center;
`;

const LeftSideLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 0.9375rem;
  cursor: pointer;
  color: white;
  height: 6.0625rem;
`;
/* 호버시 색반전
 */
const NavContentsHover = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 0.9375rem;
  cursor: pointer;
  color: black;
  height: 6.0625rem;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-thickness: 3px;
  }
`;
const Line = styled.div`
  list-style: none;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 0.9rem;
`;

const Lineli = styled.ul`
  position: relative;
  display: inline-block;
  margin: 0 20px;
  height: 40px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
`;

const LineInside = styled.li`
  position: absolute;
  content: "";
  display: block;
  border-bottom: 3px solid #000;
  transition: all 250ms ease-out;
  left: 50%;
  width: 0;
  &:hover {
    background-color: white;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

const RightSideLink = styled.div`
  margin-left: 20px;
  font-size: 0.9375rem;
  color: white;
  cursor: pointer;
`;

const Select = styled.select`
  margin-left: 30px;
  font-size: 0.9375rem;
  background-color: #d3d3d3;
  background-color: #02215e;
  color: white;
  border: 0;
`;

const DropdownContainer = styled.div`
  position: absolute;
  left: 0;
  top: "6.0625rem";
`;

const DropdownAnchor = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

const DropdownMenu = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 45px;
  width: 140px;
  background-color: rgb(40, 40, 40);
  &:hover {
    background-color: rgb(55, 55, 55);
    font-weight: bold;
  }
`;

const ImageContainer = styled.div`
  margin-left: 3px;
`;

const Image = styled.img``;

const Linker = styled.a`
  &:hover {
    text-decoration: none;
  }
`;
const LogoSymbol = styled.img`
  width: 140px;
  height: 120px;
  cursor: pointer;
`;
const MyButton = styled.button`
  position: relative;
  display: block;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  float: right;
  padding: 6px 8px;
  cursor: pointer;
  font-weight: 900;
  color: black;
  margin-right: 5px;
  &:hover {
    border-radius: 8px;
  }
`;

const MyRightMenu = styled.ul`
  width: 150px;
  position: absolute;
  right: 5px;
  top: 58px;
  border-radius: 8px;
  box-shadow: 3px -3px 50px rgba(0, 0, 0, 0.13);
  background-color: white;
  text-align: center;
  padding: 16px;
  &::after {
    display: block;
    content: "";
    position: absolute;
    width: 80%;
    height: 1px;
    background-color: white;
    left: 15px;
    top: 55px;
  }
  &::before {
    display: block;
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    border-bottom: 28px solid white;
    border-left: 0px solid transparent;
    border-right: 28px solid transparent;
    right: 0;
    top: -14px;
    transform: rotate(270deg);
  }
`;
const MyLeftMenu = styled.ul`
  width: 150px;
  position: absolute;
  left: 5px;
  top: 58px;
  border-radius: 8px;
  box-shadow: 3px -3px 50px rgba(0, 0, 0, 0.13);
  background-color: white;
  text-align: center;
  padding: 16px;
  font-weight: 400;
  font-style: 100px;
`;

const MyMenuLi = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  cursor: pointer;
  justify-content: ${(props) => (props.first ? "center" : "")};
`;
const MyLeftMenuLi = styled.li`
  display: flex;
  height: 44px;
  align-items: center;
  border-bottom: 3px solid black;
  gap: 12px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  justify-content: ${(props) => (props.first ? "center" : "")};
`;
const MyMenuAuthLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #12bd7e;
  border-radius: 14px;
  margin-bottom: 5px;
  font-weight: 300;
  color: white;
  cursor: pointer;
`;

const MyMenuIcon = styled.img`
  width: 30px;
  padding: 5px;
`;

const MyFaBarsIcon = styled.img`
  width: 30px;
  margin-left: 15px;
`;
