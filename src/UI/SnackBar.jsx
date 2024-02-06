import { styled } from "styled-components";
import CallIcon from "@mui/icons-material/Call";
const SnackBar = ({ scrollByRoute, setIsShow }) => {
const clickHandler = (route) => {
    scrollByRoute(route);
    setIsShow(prev => !prev);
}
  return (
    <GlobalDiv>
      <MainDivHeader>
        <p onClick={() => clickHandler("main")}>Главная</p>
        <p onClick={() => clickHandler("about-us")}>О компании </p>
        <p onClick={() => clickHandler("services")}>Услуги</p>
        <p onClick={() => clickHandler("faq")}>FAQ</p>
        <p onClick={() => clickHandler("contacts")}>Контакты</p>
        <NumberDiv>
          <div className="quarter">
            <CallIcon />
            <WrapperNumber>
              <span>+996 708 11-26-10</span>
              <span>+996 708 11-26-10</span>
            </WrapperNumber>
          </div>
        </NumberDiv>
      </MainDivHeader>
    </GlobalDiv>
  );
};
export default SnackBar;
const GlobalDiv = styled.div`
  border-radius: 10px;
  z-index: 6;
  position: fixed;
  left: 99%;
  transform: translate(-100%);
  background-color: white;
  color: #000000;
  width: 308px;
  top: 12.4vh;
  box-shadow: 0 0 8px 0.01px #b1b1b1;
  padding-bottom: 1em;
  display: none;
  @media (max-width: 950px) {
    display: block;
  }
`;

const MainDivHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  & > p {
    margin: 0.6em;
    cursor: pointer;
    transition: 200ms ease;
    &:hover {
      color: #bcbcbc;
    }
  }
`;
const NumberDiv = styled.div`
  display: none;
  & .quarter {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 6px;
    margin-top: 1em;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;
const WrapperNumber = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
`;
