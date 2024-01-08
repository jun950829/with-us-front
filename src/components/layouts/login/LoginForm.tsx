'use client';
import styled from 'styled-components';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import CustomInput from '../../atom/CustomInput';

type Inputs = {
  id: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('id', 'password'));

  return (
    <Form>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <label>id</label>
          <CustomInput
            type="id"
            name="아이디"
            placeholder="아이디를 입력해주세요."
            register={{ ...register('id') }}
          />
        </Row>
        <Row>
          <label>password</label>
          <CustomInput
            type="password"
            name="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            register={{ ...register('password') }}
          />
        </Row>
        <input type="submit" value="로그인" />
      </form>
    </Form>
  );
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 50%;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 4px;
  padding: 20px;

  h1 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;
