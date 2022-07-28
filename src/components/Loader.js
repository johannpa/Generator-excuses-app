import React from 'react';
import { Audio, Circles, Puff } from  'react-loader-spinner'

function Loader() {
  return (
    <div>
        <Puff color="#00BFFF" height={80} width={80} />
    </div>
  )
}

export default Loader;