import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const AdminSidebarContainer = styled.aside`
  position: absolute;
  top: 0;
  left: ${(props) => (props.showSidebar ? "0px" : "-200px")};
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 100vh;
  background-color: #135200;
  color: #fff;
  transition: all 0.3s;
  overflow: hidden;

  .admin_header-logout-btn {
    margin-top: auto;
    width: 100%;
    padding: 8px;
    background-color: transparent;
    border: none;
    transition: all 0.2s ease;
    border-radius: 2px;
    cursor: pointer;

    span {
      color: #fff;
      font-size: 16px;
    }

    i {
      font-size: 18px;
      margin-right: 4px;
    }

    :hover {
      background-color: #ff4d4f;
      color: #fff;
    }
  }
`;

export const SidebarLink = styled(Link)`
  color: #fff;

  font-size: 16px;
  padding: 12px 16px;

  :hover {
    background-color: #092b00;
  }

  i {
    min-width: 30px;
    font-size: 18px;
  }

  ${(props) =>
    props.active &&
    css`
      border-right: 2px solid #531dab;
      background-color: #092b00;
    `}
`;
