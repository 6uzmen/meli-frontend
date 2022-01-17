import styled from 'styled-components';
import { Card } from '../..';

export const ItemDetailsContainer = styled(Card)`
  padding: 32px;
`;

export const ItemDetailsImageWrapper = styled.div``;

export const ItemDetailsImage = styled.img`
  width: 100%;
  max-height: 680px;
  max-width: 680px;
  object-fit: contain;
  object-position: center;
`;

export const ItemDetailsMainInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  @media (max-width: 1000px) {
    padding: 32px 0;
  }
`;

export const ItemDetailsName = styled.h2`
  font-size: 24px;
  margin-bottom: 32px;
`;

export const ItemDetailsPrice = styled.h2`
  font-size: 46px;
  margin-bottom: 32px;
`;

export const ItemDetailsDescriptionContainer = styled.div`
  padding: 32px 0;
`;

export const ItemDetailsDescriptionTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 32px;
`;

export const ItemDetailsDescriptionParagraph = styled.p`
  font-size: 16px;
  max-width: 680px;
  overflow-wrap: break-all;
  overflow: hidden;
`;
