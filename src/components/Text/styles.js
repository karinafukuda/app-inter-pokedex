/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components';

export const Title = styled.p`
  ${({ as }) => css`
    // eslint-disable-next-line operator-linebreak
    ${as === 'h1' &&
    css`
      font-size: 42px;
      color: black;
    `}
  `}
`;
