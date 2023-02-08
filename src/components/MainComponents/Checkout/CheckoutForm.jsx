import React from 'react';
import styled from 'styled-components';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const StyledFormik = styled(Formik)`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: start;
`;

const StyledForm = styled(Form)`
  width: 95%;
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  justify-items: center;
  align-items: start;

  @media(max-width: ${({theme}) => theme.mobile}){
    grid-template-columns: 1fr;
  }
`;

const StyledInputField = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  gap: 5px;
  grid-auto-rows: min-content;
  justify-items: center;
  align-items: start;
  padding: 10px;
`;

const StyledLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  padding: 5px;
  color: ${({theme})=> theme.secondary};
  justify-self: start;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 10px 15px;
  font-size: 0.9rem;
  border-radius: 8px;
  border: ${(props) => props.errors?"1px solid #ff0000":"none"};
  background-color: ${({theme}) => theme.inputColor};
  color: ${({theme,...props})=> props.errors? "#ff0000" : theme.secondary};

  &:focus{
    outline: none;
  }
`;

const StyledBtn = styled.button`
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 20px;
  justify-self: center;
  grid-column: 1/3;

  @media(max-width: ${({theme})=>theme.mobile}){
    grid-column: auto;
  }
`;


const StyledMsgError = styled(ErrorMessage)`
color: #ff0000;
font-size: 0.8rem;
padding: 5px;
text-align: center;
justify-self: center;
font-weight: 500;
min-height: 20px;
`;



export const CheckoutForm = () => {

  const phoneRegex = /\d{10}/;

  const validationSchema = Yup.object({
    fullname : Yup.string().trim().required("El nombre es requerido"),/*.max(15,"No se admiten nombres de mas de 15 caracteres")*/
    cellphone: Yup.string().trim().required("El teléfono/celular es requerido").matches(phoneRegex, "Numero inválido"),
    location: Yup.string().trim().required("La localidad es requerida").max(255, "Máximo de 255 caracteres"),
    address: Yup.string().trim().required("La dirección es requerida").max(255, "Máximo de 255 caracteres"),
  })

  return (
    <>
      <StyledFormik
        initialValues={{fullname:"",cellphone:"",location:"",address:""}}
        validationSchema = {validationSchema}
        onSubmit= {(values, { resetForm }) => {
          console.log("Form Data", values);
          alert("¡Muchas gracias por tu compra! Tu pedido será despachado a la brevedad")
          resetForm();
        }}
      >
        <StyledForm>
          <StyledInputField>
            <StyledLabel htmlFor="fullname">Nombre</StyledLabel>
            <StyledField name="fullname" type="text" />
            <StyledMsgError component="small" name="fullname" />
          </StyledInputField>
          <StyledInputField>
            <StyledLabel htmlFor="cellphone">Teléfono/Celular</StyledLabel>
            <StyledField name="cellphone" type="tel" />
            <StyledMsgError component="small" name="cellphone" />
          </StyledInputField>
          <StyledInputField>
            <StyledLabel htmlFor="location">Localidad</StyledLabel>
            <StyledField name="location" type="text" />
            <StyledMsgError component="small" name="location" />
          </StyledInputField>
          <StyledInputField>
            <StyledLabel htmlFor="address">Dirección</StyledLabel>
            <StyledField name="address" type="text" />
            <StyledMsgError component="small" name="address" />
          </StyledInputField>
          <StyledBtn className='btn-style1' type="submit">Confirmar</StyledBtn>
        </StyledForm>
      </StyledFormik>
    </>
  )
}

