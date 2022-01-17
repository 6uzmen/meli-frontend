import styled from 'styled-components';

export const ItemPreviewContainer = styled.div`
  cursor: pointer;
  padding: 16px;
  background-color: white;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  .itemPreviewImage {
    border-radius: 4px;
  }
`;

export const ItemPreviewImage = styled.img`
  object-fit: contain;
  min-width: 180px;
  flex-basis: 100px;
`;

export const ItemPreviewInformation = styled.div`
  flex-grow: 4;
  flex-shrink: 1;
  flex-basis: 100px;
  min-width: 60%;
  padding: 16px;
`;

export const ItemPreviewLocation = styled.span`
  font-size: 12px;
  opacity: 0.55;
`;

export const ItemPreviewPriceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-bottom: 16px;
`;

export const ItemPreviewPrice = styled.h2`
  font-size: 24px;
  margin: 0 10px 0 0;
`;

export const ItemPreviewDescription = styled.p`
  font-size: 18px;
  max-width: 400px;
`;
