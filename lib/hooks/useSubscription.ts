import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import config from 'config';

const useSubscription = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const websocket = new WebSocket(config.wsUrl);
    websocket.onopen = () => {
      console.log('connected');
    };

    websocket.onmessage = (event) => {
      const payload = JSON.parse(event.data);
      queryClient.setQueriesData(payload.data, () => {
        return payload.data;
      });
    };

    return () => {
      websocket.close();
    };
  }, []);
};

export default useSubscription;
