'use client';
import styled from 'styled-components';

export default function ClanInfo() {
  return (
    <ClanInfoLayer>
      <Top></Top>
    </ClanInfoLayer>
  );
}

const ClanInfoLayer = styled.section`
  width: 100%;
  padding: 30px;
`;

const Top = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #333333;
`;
