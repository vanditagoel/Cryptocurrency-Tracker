import React from 'react'
import { createContext, useState, useContext, useEffect } from 'react'

const Crypto = createContext()

const CryptoContext = ({children}) => {
    const [currency, setCurrency] = useState('INR')
    const [symbol, setSymbol] = useState('₹')

    useEffect(() => {
        const symbols = {
          INR: '₹',
          USD: '$'
        };
      
        setSymbol(symbols[currency] || '');
      }, [currency]);

    return <Crypto.Provider value ={{currency, symbol, setCurrency}}>{children}</Crypto.Provider>
};

export default CryptoContext

export const CryptoState = () => {
    return useContext(Crypto)
}