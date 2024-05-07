import React, { useEffect, useRef } from "react";
import { useContextApi } from "./context/UseContext";

function Chartview() {
  const { theme } = useContextApi();
  const container = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "TVC:DJI",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "${theme}",
        "style": "1",
        "locale": "in",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, [theme]); // Add 'theme' to dependency array

  return (
    <div ref={container} className="lg:w-[90%] h-[200px] w-full">
      {/* Optional: If you want to include TradingView branding */}
      {/* 
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div> 
      */}
    </div>
  );
}

export default Chartview;
