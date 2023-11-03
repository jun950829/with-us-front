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
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 10px;

  ${({ theme }) => theme.boxShadow.shadow20};
`;

const Logo = styled.div`
  position: relative;
`;

const MainMenus = styled.ul`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;

  li {
    position: relative;
    cursor: pointer;
    ${({ theme }) => theme.textSize.S18W500};

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -10px;
      width: 100%;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
      border-bottom: solid 2px ${({ theme }) => theme.palette.blue80};
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

const SubMenus = styled.ul`
  display: flex;
  position: absolute;
  z-index: 10;
  bottom: -20px;
  left: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 20px;
  transform: translateX(-50%);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: ${({ theme }) => theme.palette.blue60};
  gap: 60px;

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
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.blue60};
  color: ${({ theme }) => theme.gray.gray100};
  text-align: center;
  ${({ theme }) => theme.textSize.S16W700};
`;
