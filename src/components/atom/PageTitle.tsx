import { PageTitle } from '@/src/types';
import styled from 'styled-components';

export default function PageTitle({ title, margin = '24px auto' }: PageTitle) {
  return <Title $margin={margin}>{title}</Title>;
}

const Title = styled.h2<{ $margin: string }>`
  margin: ${({ $margin }) => $margin};
`;
