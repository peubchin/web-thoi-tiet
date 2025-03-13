import { useEffect, useState } from 'react';

export default function useURL(url = '') {
  const [fetching, setFetching] = useState({
    status: 'loading',
    result: null,
  });

  const setResult = (res) => {
    setFetching({
      ...fetching,
      result: res,
    });
  };

  useEffect(() => {
    setFetching((old) => {
      return {
        ...old,
        status: 'loading',
      };
    });
    const abortController = new AbortController();
    fetch(url, {
      signal: abortController.signal,
      mode: 'cors',
      credentials: 'include',
    })
      .then(async (res) => {
        if (!res.ok) {
          const msg = (await res.json()).message;
          throw new Error(msg);
        }
        setFetching({
          status: 'loaded',
          result: await res.json(),
        });
      })
      .catch((e) => {
        if (e.name === 'AbortError') {
          return;
        }
        setFetching({
          result: e,
          status: 'error',
        });
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  return {
    ...fetching,
    setResult,
  };
}
