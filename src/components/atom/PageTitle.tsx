import styled from 'styled-components';

interface Props {
  title: string;
  margin?: string;
}

export default function PageTitle({ title, margin = '24px auto' }: Props) {
  return <Title $margin={margin}>{title}</Title>;
}

const Title = styled.h2<{ $margin: string }>`
  margin: ${({ $margin }) => $margin};
`;
