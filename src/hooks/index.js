import { useEffect, useState } from 'react';
import { getData } from '../api';

export function useLoadData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadData = () => {
    setIsLoading(true);
    getData()
      .then(loadedData => setData(loadedData))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }
  useEffect(() => {
    loadData();
  }, []);

  return {
    data, isLoading, error
  }
}