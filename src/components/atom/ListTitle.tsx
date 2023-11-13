import styled from 'styled-components';

interface Props {
  title: string;
}

export default function ListTitle({ title }: Props) {
  return (
    <Title>
      {title}
      <TitleBorder />
    </Title>
  );
}

const Title = styled.h3`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.palette.blue50};

  ${({ theme }) => theme.textSize.S24W700};
`;

const TitleBorder = styled.hr`
  width: 35px;
  height: 2px;
  border: 1px solid ${({ theme }) => theme.palette.blue50};
`;
