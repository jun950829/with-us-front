import { Flex } from '@atom/Flex';
import styled from 'styled-components';
import ListTitle from '@atom/ListTitle';
import ClanCard from '@components/card/ClanCard';

const dummy = [
  {
    name: 'Fundamental of javascript',
    desc: '설명입니다',
    createdAt: '23-11-3',
    total: 3,
    recruiting: true,
    recruitMember: 2,
    master: 1,
    writer: 1,
    id: 1,
    image: ''
  }
];

export default function ClanList() {
  return (
    <Flex.Section direction="column">
      <ListTitle title="LOST ARK" />
      <ListWrap>
        {dummy.map((data, index) => (
          <ClanCard key={index} item={data} />
        ))}
      </ListWrap>
    </Flex.Section>
  );
}

const ListWrap = styled.ul`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 4fr));
  width: 100%;
`;
