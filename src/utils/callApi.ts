/* eslint-disable @typescript-eslint/ban-types */
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {API_URI} from '../../env';

interface CallApiIn {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  route: string;
  data?: Object;
}

export const callApi = async (axData: CallApiIn) => {
  const {method, route} = axData;
  try {
    const token = await AsyncStorage.getItem('token');
    const res = await axios({
      method,
      url: `${API_URI}${route}`,
      headers: {
        authorization: `bearer ${token}`,
      },
      data: axData.data ? axData.data : null,
    });
    const responce = res.data;
    return responce.data;
  } catch (e) {
    console.log('error data', axData);
    console.log(e.response?.data || e);

    throw new Error(e.response?.data || e);
  }
};
