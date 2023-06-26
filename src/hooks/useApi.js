import { useEffect, useState } from "react"
import { transforAPIData } from "../utils/transformer";

export const useApi = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData ] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then(data => data.json())
    .then(data => {
      setData(transforAPIData(url, data?.data?.electricity || []))
    })
    .catch(err => console.error(err))
    .finally(() => setLoading(false))
  }, [])

  return [data, loading];
}
