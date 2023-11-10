'use client';
import styled from 'styled-components';

export default function Center({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <CenterLayer>{children}</CenterLayer>
    </Container>
  );
}

const Container = styled.div`
  padding-left: 83px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.media.mobile} {
    padding-left: 0px;
  }
`;

const CenterLayer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 16px;
`;
