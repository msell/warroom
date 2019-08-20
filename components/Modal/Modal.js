import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Dialog = ({ children, onClose, ...props }) => {
  React.useEffect(() => {
    // I tried to select the body to prevent scrolling and that worked for desktop
    // but there is something strange on mobile devices and we need to use a div like
    // the page-wrapper instead of body for the scroll lock to work
    document.querySelector("#page-wrapper").style.overflowY = "hidden";
    return () => {
      document.querySelector("#page-wrapper").style.overflowY = "scroll";
    };
  }, []);

  const CloseButton = styled.div`
    align-self: flex-end;
    :hover {
      cursor: pointer;
    }
  `;
  const StyledDialog = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    position: absolute;
    border: solid 3px black;
    border-radius: 20px;
    text-align: center;
    top: 20%;
    z-index: 10000;
    background-color: #fff;
    width: ${({ width }) => (width ? width : "300px")};
  `;

  return (
    <Overlay onClick={onClose}>
      <StyledDialog width={props.width} onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </StyledDialog>
    </Overlay>
  );
};

export const Modal = ({ open, children, ...rest }) =>
  open
    ? ReactDOM.createPortal(
        <Dialog {...rest}>{children}</Dialog>,
        document.body
      )
    : null;
