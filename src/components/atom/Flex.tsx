import styled, { css } from 'styled-components';
interface StyleProps {
  direction?: 'column' | 'row';
  justifyContents?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center';
  margin?: string;
  padding?: string;
}

const DefaultValue = css<StyleProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  justify-content: ${({ justifyContents }) => justifyContents || 'flex-start'};
  width: 100%;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

const Main = styled.main<StyleProps>`
  ${DefaultValue};
`;

const Section = styled.section<StyleProps>`
  ${DefaultValue};
`;

const Div = styled.div<StyleProps>`
  ${DefaultValue};
`;

const Article = styled.article<StyleProps>`
  ${DefaultValue};
`;

const Nav = styled.nav<StyleProps>`
  ${DefaultValue};
`;

const Aside = styled.aside<StyleProps>`
  ${DefaultValue};
`;

export const Flex = {
  Main,
  Section,
  Div,
  Article,
  Nav,
  Aside
};
