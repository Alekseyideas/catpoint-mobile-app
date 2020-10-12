/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import {GraphRequest, GraphRequestManager} from 'react-native-fbsdk';
import {TUser} from '../store/User/types';

export const useFbLogin = () => {
  const [fbError, setFbError] = React.useState<boolean>(false);
  const [fbSuccess, setFbSuccess] = React.useState(false);
  const [fbLoading, setFbLoading] = React.useState(true);
  const [fbUser, setFbUser] = React.useState<TUser | null>(null);

  const responseInfoCallback = (
    error: object | undefined,
    result:
      | {
          first_name?: string;
          last_name?: string;
          picture?: {
            data: {
              url: string;
            };
          };
          id?: string;
        }
      | undefined,
  ) => {
    setFbLoading(false);
    // if (!result) return console.log('Error fetching data: result', result);
    if (error) return console.log('Error fetching data: ', error);
    console.log('fb get data', result);
    if (result) {
      const {id, picture, last_name, first_name} = result;
      return setFbUser({
        id: null,
        fbId: id || '',
        image: picture?.data.url || '',
        lastName: last_name || '',
        firstName: first_name || '',
        inId: '',
      });
    }
    return null;
  };

  const infoRequest = new GraphRequest(
    '/me',
    {
      parameters: {
        fields: {
          string: 'email,name,first_name,middle_name,last_name,picture{url}',
        },
      },
    },
    responseInfoCallback,
  );

  const startReq = () =>
    new GraphRequestManager().addRequest(infoRequest).start();

  return {
    fbError,
    fbSuccess,
    fbUser,
    startReq,
    fbLoading,
  };
};
