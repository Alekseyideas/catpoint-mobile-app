import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../store/applicationState';
import {setUserCompanies} from '../store/Companies/actions';
import {TUserCompany} from '../store/Companies/types';

export const useSocket = (uri: string) => {
  const {Token} = useSelector((store: ApplicationState) => store);
  const dispatch = useDispatch();
  const ws = React.useRef<WebSocket | any>(null);
  // new WebSocket(uri)
  const [userId, setUserId] = React.useState('');

  const openConnection = () => {
    ws.current.onopen = () => {
      ws.current.send(
        JSON.stringify({
          type: 'getUserCompanies',
          data: {
            token: `bearer ${Token.data}`,
          },
        }),
      );
      ws.current.send(
        JSON.stringify({
          type: 'getKey',
          data: {
            token: `bearer ${Token.data}`,
          },
        }),
      );
    };
  };

  const handlerMess = () => {
    ws.current.onmessage = async (e) => {
      const resp: {
        type: 'getKey' | 'getCompanies' | 'getUserCompanies' | 'addPoint';
        data: any | null;
      } = JSON.parse(e.data);

      switch (resp.type) {
        case 'getKey':
          console.log(JSON.stringify(resp.data), 'resp.data');
          setUserId(resp.data?.clientId || '');
          break;
        case 'addPoint':
        case 'getUserCompanies':
          console.log(JSON.stringify(resp), 'resp');
          dispatch(setUserCompanies({companies: resp.data as TUserCompany[]}));
          break;
        default:
          break;
      }
      // getComp(userId);
    };
  };

  const handleError = () => {
    ws.current.onerror = (e) => {
      // an error occurred
      console.log(222, e.message);
    };
  };
  const handleClose = () => {
    ws.current.onclose = (e) => {
      console.log(e.code, e);
    };
  };

  React.useEffect(() => {
    ws.current = new WebSocket(uri);
    openConnection();
    handleError();
    handlerMess();
    handleClose();
    return () => ws.current.close();
  }, []);
  return {
    ws,
    setUserId,
    userId,
  };
};
