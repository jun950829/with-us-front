'use client';
import styled from 'styled-components';

export default function Center({ children }: { children: React.ReactNode }) {
  return <CenterLayer>{children}</CenterLayer>;
}

const CenterLayer = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
