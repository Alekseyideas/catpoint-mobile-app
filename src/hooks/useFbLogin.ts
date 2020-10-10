import React from 'react';
import {GraphRequest, GraphRequestManager} from 'react-native-fbsdk';
import {TUser} from '../store/User/types';

export const useFbLogin = () => {
  const [fbError, setFbError] = React.useState<boolean>(false);
  const [fbSuccess, setFbSuccess] = React.useState(false);
  const [fbLoading, setFbLoading] = React.useState(false);
  const [fbUser, setFbUser] = React.useState<TUser | null>(null);

  const responseInfoCallback = (
    error: object | undefined,
    result: {name?: string} | undefined,
  ): any => {
    if (error) {
      console.log('Error fetching data: ', error);
    } else {
      console.log(result);
    }
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
