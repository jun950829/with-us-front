'use client';
import styled from 'styled-components';
import Image from 'next/image';

export default function ClanLayer(prop: { clanData: any }) {
  //클랜 데이터 매핑

  return (
    <ClanLayerWrap>
      <ClanTopLayer>
        <ClanInfoLayer>
          <Left>
            <h1>CLAN NAME</h1>
            <p>clan description</p>
          </Left>
          <Right>
            <ShareBtn>
              <Image src={'/icons/icon_share.svg'} alt="setting" width={24} height={24} />
              <p>공유하기</p>
            </ShareBtn>
            <PostBtn>
              <Image src={'/icons/icon_edit.svg'} alt="setting" width={24} height={24} />
            </PostBtn>
          </Right>
        </ClanInfoLayer>
        <ClanSubMenus>
          <SubMenusList>
            <li>
              <Image src={'/icons/icon_folder.svg'} alt="setting" width={20} height={20} />
              게시판
            </li>
            <li>
              <Image src={'/icons/icon_users.svg'} alt="setting" width={20} height={20} />
              맴버들
            </li>
            <li>
              <Image src={'/icons/icon_check.svg'} alt="setting" width={20} height={20} />
              숙제표
            </li>
          </SubMenusList>
        </ClanSubMenus>
      </ClanTopLayer>
    </ClanLayerWrap>
  );
}

const ClanLayerWrap = styled.section`
  width: 100%;
  margin: 20px auto;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

const ClanTopLayer = styled.div`
  width: 100%;
  /* height: 500px; */
`;

const ClanInfoLayer = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.gray.default};
`;

const ClanSubMenus = styled.div`
  width: 100%;
  padding: 24px;
`;

const Left = styled.div`
  width: 50%;

  h1 {
    color: #333;

    /* Heading/XS/Bold */
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 160% */
  }

  p {
    color: var(--noble-black-300, #9b9c9e);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.15px;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 16px;
`;

const SubMenusList = styled.ul`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 24px;

  li {
    position: relative;
    height: 32px;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: var(--noble-black-300, #9b9c9e);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.15px;

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -24px;
      width: 100%;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
      border-bottom: solid 2px ${({ theme }) => theme.palette.blue80};
    }

    &:hover {
      color: ${({ theme }) => theme.gray.default};
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

const ShareBtn = styled.button`
  width: 200px;
  height: 40px;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    color: var(--noble-black-400, #686b6e);
    /* Body/M/SemiBold */
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.15px;
  }
`;

const PostBtn = styled.button`
  padding: 9px;
  border-radius: 10px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.gray.default};
  color: ${({ theme }) => theme.gray.gray100};
`;
