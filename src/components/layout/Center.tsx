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
  display: flex;
  justify-content: center;
  width: 100%;
  padding-left: 83px;

  @media ${({ theme }) => theme.media.mobile} {
    padding-left: 0;
  }
`;

const CenterLayer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 16px;
`;
