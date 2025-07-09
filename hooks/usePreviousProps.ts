import React, { useEffect, useRef } from 'react';

function usePreviousProps<K = any>(value: K){
   const ref = useRef<K | undefined>(undefined); 
  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

export default usePreviousProps;