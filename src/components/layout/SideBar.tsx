'use client';
import Image from 'next/image';
import styled from 'styled-components';

const Dummy = [
  {
    name: 'CLAN NAME TEST',
    img: ''
  },
  {
    name: 'CLAN NAME TESTTESTTESTTEST',
    img: ''
  },
  {
    name: 'CLAN NAME TEST',
    img: ''
  },
  {
    name: 'CLAN NAME TESTTESTTESTTEST',
    img: ''
  },
  {
    name: 'CLAN NAME TEST TESTTEST',
    img: ''
  }
];

export default function SideBar() {
  return (
    <SideBarWrap>
      <MenuWrap>
        <Menu>
          <MenuName>MENUES</MenuName>
          <MenuItemList>
            {Dummy.map((clan, i) => (
              <ClanInfo key={i}>
                <ClanImage></ClanImage>
                <ClanName>{clan.name}</ClanName>
              </ClanInfo>
            ))}
          </MenuItemList>
        </Menu>
        <Menu>
          <MenuName>CLANS</MenuName>
          <MenuItemList>
            {Dummy.map((clan, i) => (
              <ClanInfo key={i}>
                <ClanImage></ClanImage>
                <ClanName>{clan.name}</ClanName>
              </ClanInfo>
            ))}
          </MenuItemList>
        </Menu>
      </MenuWrap>
      <MyInfo>
        <MyInfoWrap>
          <ClanImage></ClanImage>
          <MyInfoName>KOGONG</MyInfoName>
          <Image
            style={{ marginLeft: 'auto' }}
            src={'/icons/icon_setting.svg'}
            alt="setting"
            width={24}
            height={24}
          />
        </MyInfoWrap>
      </MyInfo>
    </SideBarWrap>
  );
}

const SideBarWrap = styled.nav`
  display: flex;
  position: absolute;
  z-index: 1;
  top: 60px;
  left: 0;
  flex-direction: column;
  width: 100%;
  max-width: 84px;
  height: calc(100% - 60px);
  padding-top: 8px;
  overflow: auto;
  transition: max-width 0.3s;
  border-right: 1px solid ${({ theme }) => theme.gray.gray90};
  background-color: #f9f9f9;

  &:hover {
    max-width: 244px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 0;
  }
`;

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  gap: 8px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: all 0.3s;
  border-bottom: 1px solid ${({ theme }) => theme.gray.gray80};
`;

const MenuItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 24px;
`;

const MenuName = styled.div`
  text-align: center;
`;

const ClanImage = styled.div`
  min-width: 34px;
  min-height: 34px;
  transition: all 0.3s;
  border: 1px solid orange;
  border-radius: 50%;
`;

const ClanInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    ${ClanImage} {
      border-radius: 12px;
    }
  }
`;

const ClanName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ theme }) => theme.textSize.S16W500};
`;

// 내 정보

const MyInfo = styled.div`
  width: 100%;
  margin-top: auto;
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.gray.default};
`;

const MyInfoWrap = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  gap: 16px;
`;

const MyInfoName = styled(ClanName)`
  color: #fff;
  ${({ theme }) => theme.textSize.S16W700};
`;
