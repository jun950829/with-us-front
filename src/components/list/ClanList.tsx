import Images from '@/src/utls/images';
import { Flex } from '@atom/Flex';
import Link from 'next/link';
import styled from 'styled-components';
import ListTitle from '@atom/ListTitle';

export default function ClanList() {
  return (
    <Flex.Section direction="column">
      <ListTitle title="LOST ARK" />
      <ListWrap>
        {new Array(8).fill(8).map((__, index) => (
          <ListItem key={index}>
            <CustomLink
              href={`/find/clan/${index}`}
              aria-label={`클랜 찾기 제목 : Fundamental of javascript로 이동`}
            >
              <Thumbnail>
                <Images src="/test.svg" alt="test 이미지" />
              </Thumbnail>
              <ItemTitle>Fundamental of javascript</ItemTitle>
              <ItemDesc>설명입니다.</ItemDesc>
              <ItemBottom>
                <ItemUserImage></ItemUserImage>
                <UsernameWrap>
                  <Username>DASTeen</Username>
                  <DateWrap>
                    <Date>23-11-3</Date>
                    <People>인원 0/3</People>
                  </DateWrap>
                </UsernameWrap>
              </ItemBottom>
            </CustomLink>
          </ListItem>
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

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 425px;
  padding: 20px;
  border-radius: 12px;

  ${({ theme }) => theme.boxShadow.shadow20}
`;

const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  overflow: hidden;
  border-radius: 12px;
`;

const ItemTitle = styled.h4`
  margin: 8px 0;
  ${({ theme }) => theme.textSize.S18W700};
`;

const ItemDesc = styled.div`
  display: -webkit-box;
  overflow: hidden;
  color: ${({ theme }) => theme.gray.gray60};
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow-wrap: break-word;

  ${({ theme }) => theme.textSize.S14W400};
`;

const ItemBottom = styled.div`
  display: flex;
  margin-top: auto;
`;

const ItemUserImage = styled.div`
  min-width: 44px;
  max-width: 44px;
  min-height: 44px;
  max-height: 44px;
  overflow: hidden;
  border: 1px solid red;
  border-radius: 50%;
`;

const Username = styled.div`
  ${({ theme }) => theme.textSize.S16W700};
`;

const UsernameWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: 8px;
`;

const DateWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Date = styled.div`
  color: ${({ theme }) => theme.gray.gray60};
`;

const People = styled.div`
  color: ${({ theme }) => theme.gray.gray60};
`;

const CustomLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
