import { unAuthAxiosCall } from '../axiosConfig';
import { AxiosResponse } from 'axios';

const BASE_PATH = '/items';
const GET_ITEMS_LIMIT = 4;

export const getItems = async (
  searchString: string,
): Promise<AxiosResponse<any> | undefined> => {
  return unAuthAxiosCall(
    `${BASE_PATH}?q=${searchString}&limit=${GET_ITEMS_LIMIT}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export const getItemDetails = async (
  itemId: string,
): Promise<AxiosResponse<any> | undefined> => {
  return unAuthAxiosCall(`${BASE_PATH}/${itemId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
