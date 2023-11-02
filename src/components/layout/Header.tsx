'use client';
import Image from 'next/image';
import styled from 'styled-components';

const DummyMainMenus = [
  {
    name: 'LOST ARK'
  },
  {
    name: 'League Of Legends'
  },
  {
    name: 'NOTICE'
  }
];

const DummySubMenus = [
  {
    name: '파티찾기'
  },
  {
    name: '게시판'
  },
  {
    name: '기타'
  }
];

export default function Header() {
  return (
    <HeaderLayer>
      <HeaderWrap>
        <Logo>
          <Image src={'/logo_icon.png'} alt="logo" width={50} height={50} />
        </Logo>

        <MainMenus>
          {DummyMainMenus.map((menus, idx) => {
            return <li key={idx}>{menus.name}</li>;
          })}
        </MainMenus>
        <SubMenus>
          {DummySubMenus.map((menus, idx) => {
            return <li key={idx}>{menus.name}</li>;
          })}
        </SubMenus>

        <InfoArea>
          <LoginBtn>로그인하기</LoginBtn>
        </InfoArea>
      </HeaderWrap>
    </HeaderLayer>
  );
}

const HeaderLayer = styled.div`
  position: relative;
  height: 80px;
  background-color: transparent;
`;

const HeaderWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0px 10px;
  ${({ theme }) => theme.boxShadow.shadow20};
`;

const Logo = styled.div`
  position: relative;
`;

const MainMenus = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;

  li {
    position: relative;

    ${({ theme }) => theme.textSize.S18W500};
    cursor: pointer;

    &:after {
      position: absolute;
      bottom: -10px;
      display: block;
      content: '';
      width: 100%;
      border-bottom: solid 2px ${({ theme }) => theme.palette.blue80};
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    &:hover:after {
      transform: scaleX(1);
    }
  }
`;

const SubMenus = styled.ul`
  position: absolute;
  width: 50%;
  height: 20px;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 60px;

  z-index: 10;
  background-color: ${({ theme }) => theme.palette.blue60};
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;

  li {
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.gray.gray100};
    }
  }
`;

const InfoArea = styled.div``;

const LoginBtn = styled.button`
  width: 100px;
  height: 50px;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.blue60};
  color: ${({ theme }) => theme.gray.gray100};
  ${({ theme }) => theme.textSize.S16W700};
  border-radius: 10px;
`;
