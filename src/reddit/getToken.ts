import axios from 'axios';
import qs from 'querystring';
import { REDDIT_TOKEN_ENDPOINT } from '../constants/constants';

import {
  REDDIT_ID,
  REDDIT_SECRET,
  REDDIT_USER,
  REDDIT_PASSWORD,
} from '../../credentials.json';

const body = {
  grant_type: 'password',
  username: REDDIT_USER,
  password: REDDIT_PASSWORD,
};

const options = {
  headers: {
    'User-Agent': 'Dad-joke-bot by /u/djentelmenis',
  },
  auth: {
    username: REDDIT_ID,
    password: REDDIT_SECRET,
  },
};

export const getToken = () =>
  new Promise((resolve) => {
    axios
      .post(REDDIT_TOKEN_ENDPOINT, qs.stringify(body), options)
      .then((response) => {
        if (response.status === 200) {
          console.log('Access token received successfully');
          resolve(response.data.access_token);
        }

        resolve(null);
      })
      .catch((error) => {
        console.log(error);
      });
  });
