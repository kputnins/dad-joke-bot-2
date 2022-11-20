import axios, { AxiosError } from 'axios';
import { getToken } from './getToken';

export const getDadJoke = async (): Promise<string> => {
  const token = await getToken();

  const options = {
    headers: { Authorization: `bearer ${token}` },
  };

  return new Promise((resolve) => {
    axios
      .get(
        'https://oauth.reddit.com/r/dadjokes/top/.json?limit=1&t=week',
        options,
      )
      .then((response) => {
        if (response.status === 200) {
          console.log('Dad joke retrieved successfully');
          const firstLine = response.data.data.children[0].data.title;
          const secondLine =
            response.data.data.children[0].data.selftext.replace(
              /[\r\n]{2,}/g,
              '\n',
            );
          resolve(
            `\`Reddit dad-joke of the week\`\n_${firstLine}_\n*${secondLine}*`,
          );
        }
      })
      .catch((error: AxiosError) => {
        console.log(error.message);
        resolve(error.message);
      });
  });
};
