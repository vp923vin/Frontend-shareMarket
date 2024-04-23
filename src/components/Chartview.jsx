import React, { useEffect, useRef } from "react";

function TradingViewWidget() {
  const container = useRef(null);

  useEffect(() => {
    const scriptId = "tradingview-widget-script";

    if (container.current) {
      const existingScript = container.current.querySelector(`#${scriptId}`);

      if (!existingScript) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
          "symbols": [
            ["Apple", "AAPL|1D"]
          ],
          "chartOnly": false,
          "width": 600,
          "height": 240,
          "locale": "en",
          "colorTheme": "dark",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": ["1d|1", "1w|7", "1m|30"]
        }`;
        container.current.appendChild(script);
      }
    }

    return () => {
      if (container.current) {
        const existingScript = container.current.querySelector(`#${scriptId}`);
        if (existingScript) {
          container.current.removeChild(existingScript);
        }
      }
    };
  }, []); // dependency array is empty to run only once after component mount

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      {/* Optional copyright information */}
    </div>
  );
}

export default TradingViewWidget;
