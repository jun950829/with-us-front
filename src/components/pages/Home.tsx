'use client';
import { styled } from 'styled-components';

export default function HomePage() {
  return <Main>TEST</Main>;
}

const Main = styled.div`
  ${({ theme }) => theme.textSize.S64W700};
  ${({ theme }) => theme.gray.default};
`;
