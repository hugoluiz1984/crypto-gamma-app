import React,{useState, useEffect} from 'react'
import axios from 'axios';

const useAxios = (params) => {

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3/';

    const fetchData = async () => {
        try {
            setLoading(true);
            const result = await axios(params);
            setResponse(result.data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(params);
    }, []);


  return (
    {response: response , loading: loading, error: error}
  )
}

export default useAxios