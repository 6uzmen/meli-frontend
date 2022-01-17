import styled from 'styled-components';
import { Card } from '../../components';

export const ItemDetailsContainer = styled(Card)`
  padding: 32px;
`;

export const ItemDetailsMainInformation = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 32px;
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
  padding: 32px;
`;

export const ItemDetailsDescriptionTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 32px;
`;

export const ItemDetailsDescriptionParagraph = styled.p`
  font-size: 16px;
  max-width: 400px;
`;
