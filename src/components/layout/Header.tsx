'use client';
import Image from 'next/image';
import styled from 'styled-components';

const DummyMainMenus = [
  {
    name: 'LOST ARK',
    submenus: [
      {
        name: '파티찾기'
      },
      {
        name: '게시판'
      },
      {
        name: '기타'
      }
    ]
  },
  {
    name: 'League Of Legends',
    submenus: [
      {
        name: '파티찾기'
      },
      {
        name: '게시판'
      },
      {
        name: '기타'
      }
    ]
  },
  {
    name: 'NOTICE',
    submenus: [
      {
        name: '게시판'
      },
      {
        name: '기타'
      }
    ]
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
            return (
              <MainMenuBtn key={idx}>
                {menus.name}
                <SubMenus>
                  {menus.submenus.map((menus, idx) => {
                    return <SubMenusBtn key={idx}>{menus.name}</SubMenusBtn>;
                  })}
                </SubMenus>
              </MainMenuBtn>
            );
          })}
        </MainMenus>
        <InfoArea>
          <LoginBtn>로그인하기</LoginBtn>
        </InfoArea>
      </HeaderWrap>
    </HeaderLayer>
  );
}

const HeaderLayer = styled.header`
  position: sticky;
  width: 100%;
  top: 0px;
  z-index: 10;
  height: 60px;
  background-color: white;
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
  height: 60px;
  gap: 50px;
`;

const MainMenuBtn = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  line-height: 60px;
  ${({ theme }) => theme.textSize.S18W500};
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 10px;
    width: 100%;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    border-bottom: solid 2px ${({ theme }) => theme.palette.blue80};
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:hover {
    > div {
      display: flex;
    }
  }
`;

const SubMenus = styled.div`
  display: none;
  position: absolute;
  bottom: -20px;
  left: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 20px;
  transform: translateX(-50%);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: ${({ theme }) => theme.palette.blue60};
  gap: 50px;
`;

const SubMenusBtn = styled.div`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.gray.gray100};
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
