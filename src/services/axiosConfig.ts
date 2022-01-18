import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL?.toString() || '';

const axiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  validateStatus: (status) => status < 400,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    error.response?.data;
  },
);

const encodeQueryParams = (url: string, query: any) => {
  const encodeURL = new URL(url);
  if (query) {
    Object.entries(query).forEach(([k, v]: any) =>
      encodeURL.searchParams.append(k, v),
    );
  }
  return encodeURL;
};

const axiosCall = async (url: string, { query, ...requestOptions }: any) => {
  const requestUrl: any = encodeQueryParams(`${API_URL}${url}`, query);
  try {
    const response = await axiosInstance({
      method: requestOptions.method,
      url: requestUrl,
      data: requestOptions.body,
      headers: requestOptions.headers,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const unAuthAxiosCall = (url: any, requestOptions: any) =>
  axiosCall(url, requestOptions);
