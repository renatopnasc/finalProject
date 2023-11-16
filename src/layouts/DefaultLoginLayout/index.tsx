import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import logo from "../../assets/svg/logo.svg";

export function DefaultLoginLayout() {
  return (
    <LayoutContainer>
      <img src={logo} alt="" />
      <Outlet />
    </LayoutContainer>
  );
}
