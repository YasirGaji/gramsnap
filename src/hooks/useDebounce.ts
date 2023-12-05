import { useEffect, useState } from 'react'




export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebounceedValue] = useState<T>(value);


  useEffect(() => {

    const handler = setTimeout(() => {
      setDebounceedValue(value);
    }, delay);




    return () => {
      clearTimeout(handler);
    }
  },
  [value, delay]
  )


  return debouncedValue;
}