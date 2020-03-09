import React from 'react';
import { MdErrorOutline } from 'react-icons/md';
import { Container } from './styles';

const ErrorMessage = ({ message }) => (
  <Container>
    <MdErrorOutline size={80} />
    <p>Error</p>
    <span>{message}</span>
  </Container>
)

export default ErrorMessage;
