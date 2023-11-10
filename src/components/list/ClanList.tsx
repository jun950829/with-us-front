import { Flex } from '@atom/Flex';
import styled from 'styled-components';

export default function ClanList() {
  return (
    <Flex.Section flexDirection="column">
      <ListTitle>
        LOST ARK
        <ListTitleBorder />
      </ListTitle>
    </Flex.Section>
  );
}

const ListTitle = styled.h3`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.palette.blue50};
  ${({ theme }) => theme.textSize.S24W700};
`;

const ListTitleBorder = styled.hr`
  width: 35px;
  height: 2px;
  border: 1px solid ${({ theme }) => theme.palette.blue50};
`;
