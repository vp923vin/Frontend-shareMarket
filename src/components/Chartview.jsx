import React, { useEffect, useRef } from 'react';

function Chartview() {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) { // Ensure container is not null
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
      {
        "autosize": true,
       "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "save_image": false,
        "hide_side_toolbar": true,
       
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;

      container.current.appendChild(script);

      // Cleanup to prevent duplication or resource leak
      return () => {
        if (container.current && container.current.contains(script)) {
          container.current.removeChild(script);
        }
      };
    }
  }, []); // Dependency array to ensure it only runs once on mount

  return (
    <div ref={container}  className="lg:w-[90%] h-[300px] w-full ">
      
      {/* <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div> */}
    </div>
  );
}

export default Chartview;
