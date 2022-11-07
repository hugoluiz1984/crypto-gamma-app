import React from 'react'
import Markets from '../components/Markets'
import Trending from '../components/Trending'

const CryptoHome = () => {
  return (
    <div className="warpper-container">
        <Trending />
        <Markets />
    </div>
  )
}

export default CryptoHome