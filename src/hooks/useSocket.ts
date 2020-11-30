import React from 'react';

export const useSocket = (uri: string) => {
  const ws = React.useRef<WebSocket | null>(null);
  // new WebSocket(uri)
  const [userId, setUserId] = React.useState('');

  const openConnection = () => {
    ws.current.onopen = () => {
      ws.current.send(
        JSON.stringify({
          type: 'getKey',
          data: null,
        }),
      ); // send a message
    };
  };

  const handlerMess = () => {
    ws.current.onmessage = async (e) => {
      const resp: {
        type: 'getKey' | 'getCompanies';
        data: {clientId: string} | null;
      } = JSON.parse(e.data);

      switch (resp.type) {
        case 'getKey':
          setUserId(resp.data?.clientId || '');
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
      console.log(e.code, e.reason);
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
