import axios from 'axios';

axios.defaults.baseURL = 'https://661e2e1298427bbbef03ab07.mockapi.io/api/v1/';

export const fetchCatalogDataApi = async page => {
  const data = await axios('adverts', {
    params: {
      page,
      limit: 4,
    },
  });
  return data.data;
};
