import React, { useEffect, useRef } from 'react';
import { useContextApi } from '../context/UseContext';

function FlashTradeview() {
  const container = useRef(null); // Ensure initial value is null

  const{theme}= useContextApi()

  useEffect(() => {
    // Check if the script already exists to avoid duplication
    if (container.current && !container.current.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
      {
        "container_id": "technical-analysis-chart-demo",
        "width": "100%",
        "height": "100%",
        "autosize": true,
        "symbol": "AAPL",
        "interval": "D",
        "timezone": "exchange",
        "theme": "${theme}",
        "style": "1",
        "withdateranges": true,
        "hide_side_toolbar": true,
        "hide_top_toolbar": true,
        "withdateranges": false,
        "allow_symbol_change": true,
        "save_image": false,
        "studies": ["ROC@tv-basicstudies", "StochasticRSI@tv-basicstudies", "MASimple@tv-basicstudies"],
        "show_popup_button": true,
        "popup_width": "1000",
        "popup_height": "650",
        "support_host": "https://www.tradingview.com"
      }`;
      container.current.appendChild(script);
    }

    return () => {
      // Cleanup script on component unmount to avoid duplication
      if (container.current) {
        const child = container.current.querySelector('script');
        if (child) {
          container.current.removeChild(child);
        }
      }
    };
  }, []); // Dependency array ensures this runs once on component mount

  return (
    <div ref={container} style={{ height: '90vh', width: '100%' }}>

    </div>
  );
}

export default FlashTradeview;
