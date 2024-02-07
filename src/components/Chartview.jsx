import React, { useEffect } from 'react';
import './tradingview.css'; // Add a CSS file for custom styles if needed

const TradingViewChart = () => {
  useEffect(() => {
    // Load TradingView chart library dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize TradingView widget
      new window.TradingView.widget({
        "width": "100%",
        
        "symbol": "NSE:NIFTY",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "withdateranges": true,
        "range": "1D",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "studies": [
          "MASimple@tv-basicstudies",
          "MAExp@tv-basicstudies",
          "MAExp@tv-basicstudies"
        ],
        "container_id": "tradingview_123"
      });
    };

    // Clean up the script tag on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
    <div id="tradingview_123"></div>


   

    
   
    </>
  );
};

export default TradingViewChart;
