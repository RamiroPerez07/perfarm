import React from 'react';
import styled from 'styled-components';

const StyledFormField = styled.div`
  display: grid;
  gap: 5px;
  grid-auto-flow: row;
  width: 90%;
  max-width: 700px;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  padding: 5px;
  color: ${({theme})=> theme.secondary};
`;

const StyledInput = styled.input`
  width: 95%;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 8px;
  border: ${(props) => props.errors?"1px solid #ff0000":"none"};
  background-color: ${({theme}) => theme.inputColor};
  color: ${({theme,...props})=> props.errors? "#ff0000" : theme.secondary};

  &:focus{
    outline: none;
  }
`;

const StyledTextArea = styled.textarea`
  resize: none;
  width: 95%;
  min-height: 250px;
  padding: 10px 15px;
  font-size: 1.1rem;
  border-radius: 8px;
  border: ${(props) => props.errors?"1px solid #ff0000":"none"};
  background-color: ${({theme})=> theme.inputColor};
  color: ${({theme,...props})=> props.errors? "#ff0000" : theme.secondary};

  &:focus{
    outline: none;
  }
`;

const StyledMsgError = styled.small`
  color: #ff0000;
  font-size: 0.8rem;
  padding: 5px;
  text-align: center;
  justify-self: center;
  font-weight: 500;
  min-height: 20px;
`;

export const ContactInput = (props) => {
  return (
    <>
      <StyledFormField>
        <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
        {props.textarea?<StyledTextArea name={props.id} id={props.id} placeholder={props.placeholder} {...props} />:<StyledInput type={props.type} name={props.id} id={props.id} placeholder={props.placeholder} {...props} />}
        {props.errors && <StyledMsgError>{props.errors}</StyledMsgError>}
      </StyledFormField>
    </>
  )
}

