import React from 'react';
import { Link } from 'react-router-dom';

const CoinTrending = ({coin}) => {
    //console.log(coin)
    
  return (
    <Link to={`/coin/${coin.id}`} >
        <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200">
            <div className="flex items-center gap-3">
                <span className="font-semibold">#{coin.score+1}</span>
                <img src={coin.small} alt={coin.id} className="w-6"/>
                <p className="">{coin.name}</p>
                <span className="text-xs">({coin.symbol})</span>

            </div>
        </div>
    </Link>
  )
}

export default CoinTrending