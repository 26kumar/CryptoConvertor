import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchedData = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inr, setINR] = useState(0);

  const endpoint = 'live';
  const access_key = 'aed48a21a69505ecf678d81759ebcd0d';
  const target = 'INR';
  const API_URL = `https://api.coinlayer.com/api/${endpoint}?access_key=${access_key}&target=${target}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setRates(response.data.rates);
      } catch (err) {
        setError(err.message || 'Unexpected Error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const calculateCrypto = (symbol) => {
    if (!rates[symbol]) return 'N/A';
    return (inr / rates[symbol]).toFixed(6);
  };

  if (loading) return <div className="text-white text-center mt-10 text-xl animate-pulse">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-10 text-xl">Error: {error}</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white px-4">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-md flex flex-col items-center gap-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-white drop-shadow ">Crypto Converter</h1>

        <input
          type="number"
          placeholder="Enter INR"
          onChange={(e) => setINR(Number(e.target.value))}
          onWheel={(e) => e.target.blur()}
          className="font-bold w-full px-5 py-4 rounded-xl text-white bg-white/10 border border-white/20 backdrop-blur-md placeholder-white text-center text-lg focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all duration-300"
        />

        <div className="w-full flex flex-col gap-3 mt-4">
          <div
          onClick={() => window.open("https://www.google.com/search?q=usdt+to+inr&rlz=1C1PRFI_enIN1022IN1022&oq=usdt+to+inr&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIKCAEQABixAxiABDIKCAIQABixAxiABDIHCAMQABiABDIKCAQQABixAxiABDIMCAUQABhDGIAEGIoFMgoIBhAAGLEDGIAEMgoIBxAAGLEDGIAEMgoICBAAGLEDGIAEMgcICRAAGIAE0gEIMjE2NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8")}
          className="cursor-pointer bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white font-semibold rounded-xl py-4 text-center shadow-md transform transition-transform hover:scale-105 hover:shadow-xl">USDT : {calculateCrypto('USDT')}</div>
          <div 
          onClick={() => window.open("https://www.google.com/search?q=btc+to+inr&rlz=1C1PRFI_enIN1022IN1022&oq=btc+to+inr&gs_lcrp=EgZjaHJvbWUyEwgAEEUYJxg5GEYYggIYgAQYigUyDggBEEUYJxg7GIAEGIoFMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEINzYyMmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8")}
          className="cursor-pointer bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white font-semibold rounded-xl py-4 text-center shadow-md transform transition-transform hover:scale-105 hover:shadow-xl">BTC : {calculateCrypto('BTC')}</div>
          <div 
          onClick={() => window.open("https://www.google.com/search?q=ltc+to+inr&sca_esv=342c1fe1167455aa&rlz=1C1PRFI_enIN1022IN1022&sxsrf=AHTn8zqwOTKxHqhndzRVCKyuIjE_vrd6Zg%3A1744103945766&ei=Cer0Z8fGLu-YseMP3dfO6Qs&ved=0ahUKEwiH743BjciMAxVvTGwGHd2rM70Q4dUDCBA&uact=5&oq=ltc+to+inr&gs_lp=Egxnd3Mtd2l6LXNlcnAiCmx0YyB0byBpbnIyChAjGIAEGCcYigUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIIEAAYgAQYywEyBhAAGAUYHjIGEAAYBRgeMgYQABgFGB5IthRQuQ9Y1xJwA3gBkAEAmAGhAaABqAKqAQMwLjK4AQPIAQD4AQGYAgWgAsYCwgIHECMYsAMYJ8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIKEAAYgAQYChjLAcICCxAAGIAEGIYDGIoFwgIFEAAY7wXCAggQABiABBiiBJgDAIgGAZAGCpIHAzMuMqAH2QqyBwMwLjK4B7YC&sclient=gws-wiz-serp")}
          className="cursor-pointer bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white font-semibold rounded-xl py-4 text-center shadow-md transform transition-transform hover:scale-105 hover:shadow-xl">LTC : {calculateCrypto('LTC')}</div>
        </div>
      </div>
    </div>
  );
};

export default FetchedData;
