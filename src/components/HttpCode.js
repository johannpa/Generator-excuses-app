import React, { useState, useEffect} from 'react';
import Data from "../data/data.json";
import { useSearchParams } from 'react-router-dom';


function Http_code() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveHttpCode = searchParams.get('filter') === 'active'; 

  useEffect(() => {
    
  }, [searchParams]);

  return (
    <div>
       
    </div>
  )
}

export default Http_code;