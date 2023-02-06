import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { ContactInput } from './ContactInput';

const StyledSection = styled.section`
  width: 100%;
  max-width: 1920px;
  margin-top: 80px;
  min-height: min(1020px, calc(100vh - 60px));
  display: grid;
  align-content: center;
  justify-content: stretch;
  place-items: center;
  gap: 3em;
`;

const StyledForm = styled.form`
  width: 95%;
  max-width: 900px;
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  align-items: start;
  gap: 10px;
  grid-auto-rows: min-content;
`;

const StyledSubtitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({theme})=> theme.secondary};
  justify-self: center;
  padding: 10px;
  text-align: center;
`;

export const ContactForm = () => {

  /*Defino los valores iniciales*/
  const { values } = useFormik({
    initialValues:{
      firstname:"",
      lastname: "",
      email:"",
      tel: "",
      message: "",
    }
  });

  return (
    <>
      <StyledSection>
        <StyledSubtitle>Contacto</StyledSubtitle>
        <StyledForm action="" noValidate>
          <ContactInput id="contact-firstname" value={values.firstname} type="text" label="Nombre" />
          <ContactInput id="contact-lastname" value={values.lastname} type="text" label="Apellido" />
          <ContactInput id="contact-tel" value={values.tel} type="tel" label="Teléfono/Celular" />
          <ContactInput id="contact-email" value={values.email} type="email" label="Email" />
          <ContactInput id="contact-message" value={values.message} label="Mensaje" textarea />
        </StyledForm>
      </StyledSection>
    </>
  )
}

export default ContactForm