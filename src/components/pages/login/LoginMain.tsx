'use client';
import styled from 'styled-components';
import LoginForm from '@layouts/login/LoginForm';

export default function LoginMain() {
  return (
    <LoginPage>
      <LoginForm />
    </LoginPage>
  );
}

const LoginPage = styled.div`
  padding: 50px;
`;
