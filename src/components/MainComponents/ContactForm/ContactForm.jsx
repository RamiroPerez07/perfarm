import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { ContactInput } from './ContactInput';
import * as Yup from 'yup'

const StyledSection = styled.section`
  width: 100%;
  max-width: 1920px;
  margin-top: 80px;
  margin-bottom: 50px;
  min-height: min(1020px, calc(100vh - 60px));
  display: grid;
  justify-items: center;
  align-items: start;
  gap: 10px;
  grid-auto-rows: min-content;
`;

const StyledForm = styled.form`
  width: 95%;
  max-width: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  justify-items: center;
  align-items: start;
  gap: 5px;
  grid-auto-rows: min-content;

  @media(max-width: ${({theme}) => theme.mobile}){
    grid-template-columns: 1fr;
  }
`;

const StyledSubtitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({theme})=> theme.secondary};
  justify-self: center;
  padding: 10px;
  text-align: center;
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

export const ContactForm = () => {

  /*Configuracion de validacion con YUP. Se genera el objeto en el que defino las validaciones para cada value*/
  const phoneRegex = /\d{10}/;
  const validationSchema = Yup.object({
    firstname : Yup.string().trim().required("El nombre es requerido"),/*.max(15,"No se admiten nombres de mas de 15 caracteres")*/
    lastname: Yup.string().trim().required("El apellido es requerido"),/*.max(15,"No se admiten apellidos de mas de 15 caracteres")*/
    email: Yup.string().trim().required("El email es requerido").email("Email inválido"),
    tel: Yup.string().trim().required("El teléfono/celular es requerido").matches(phoneRegex, "Numero inválido"),
    message: Yup.string().trim().required("Escribe un mensaje").min(20, "20 caracteres como mínimo").max(255, "Máximo de 255 caracteres"),
  })

  /*Defino los valores iniciales*/
  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues:{
      firstname:"",
      lastname: "",
      email:"",
      tel: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data", values);
      alert("¡Muchas gracias por comunicarte con Giza! Responderemos tu mensaje a la brevedad")
      resetForm();
    },
    validationSchema,
    /*validate: (values) => {    //JS
      const errors = {};
      //Validaciones al estilo JS Vanilla
      if (!values.firstname){
        errors.firstname = "El nombre es requerido";
      }
      if (!values.lastname){
        errors.lastname = "El apellido es requerido";
      }
      if (!values.email){
        errors.email = "El email es requerido";
      }
      if (!values.tel){
        errors.tel = "El teléfono/celular es requerido";
      }
      if (!values.message){
        errors.message = "El mensaje es requerido";
      }
      return errors;
    }*/
  });



  return (
    <>
      <StyledSection>
        <StyledSubtitle>Contacto</StyledSubtitle>
        <StyledForm onSubmit={(e) => {e.preventDefault();handleSubmit()}} action="" noValidate>
          <ContactInput id="contact-firstname" type="text" label="Nombre" errors={touched.firstname && errors.firstname} {...getFieldProps("firstname")} />
          <ContactInput id="contact-lastname" type="text" label="Apellido" errors={touched.lastname && errors.lastname} {...getFieldProps("lastname")} />
          <ContactInput id="contact-tel" type="tel" label="Teléfono/Celular" errors={touched.tel && errors.tel} {...getFieldProps("tel")} />
          <ContactInput id="contact-email" type="email" label="Email" errors={touched.email && errors.email} {...getFieldProps("email")} />
          <ContactInput id="contact-message" label="Mensaje" textarea errors={touched.message && errors.message} {...getFieldProps("message")} />
          <StyledBtn type="submit" className='btn-style1' onClick={(e)=>{
            e.preventDefault();
            handleSubmit();
          }}>Enviar</StyledBtn>
        </StyledForm>
      </StyledSection>
    </>
  )
}

export default ContactForm