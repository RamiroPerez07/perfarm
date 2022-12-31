import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  min-height: 55px;
  width: 95%;
  bottom: -100%;
  background-color: ${({modalError}) => modalError ? 'red': 'green'};
  display: grid;
  padding: 10px;
  place-items: center;
  transition: all 0.2s linear;
  border-radius: 10px;
  transition: bottom 0.3s linear;
  z-index: 2;

  &.showModal{
    bottom: 10px;
    transition: bottom 0.3s linear;
  }
`;

const StyledModalTxt = styled.p`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

export const Modal = () => {

  //llamo al estado del modal
  const modalState = useSelector(state => state.modal);

  return (
    <StyledModal className={modalState.active && 'showModal'} modalError={modalState.error}>
      <StyledModalTxt>{modalState.message}</StyledModalTxt>
    </StyledModal>
  )
}
