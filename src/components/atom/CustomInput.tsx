import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Styled } from 'styled-components/dist/constructors/constructWithOptions';

export default function CustomInput({
  type,
  name,
  placeholder,
  register,
  errors
}: {
  type: string;
  name: string;
  placeholder: string;
  register: any;
  errors?: any;
}) {
  return <input type={type} name={name} placeholder={placeholder} {...register} />;
}
