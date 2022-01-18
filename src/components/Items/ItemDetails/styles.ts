import styled from 'styled-components';
import { Card } from '../..';

export const ItemDetailsContainer = styled(Card)`
  padding: 32px;
`;

export const ItemDetailsImageWrapper = styled.div``;

export const ItemDetailsImage = styled.img`
  max-width: 680px;
  max-height: 680px;
  width: 100%;
  object-fit: contain;
  object-position: center;
`;

export const ItemDetailsMainInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 32px;
  @media (max-width: 768px) {
    padding: 32px 0;
  }
`;

export const ItemDetailsName = styled.h2`
  font-size: 24px;
  margin-bottom: 32px;
`;

export const ItemDetailsExtraInformation = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  color: #999;
`;

export const ItemDetailsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
`;

export const ItemDetailsPrice = styled.h2`
  font-size: 46px;
`;

export const ItemDetailsPriceDecimals = styled.span`
  font-size: 24px;
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
  color: #999;
`;
