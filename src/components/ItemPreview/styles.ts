import styled from 'styled-components';

export const ItemPreviewContainer = styled.div`
  cursor: pointer;
  padding: 16px;
  display: flex;
  .itemPreviewImage {
    border-radius: 4px;
  }
`;

export const ItemPreviewImage = styled.img`
  object-fit: contain;
`;

export const ItemPreviewInformation = styled.div`
  flex-grow: 1;
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
`;
