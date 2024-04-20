import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  
  const container = useRef();

  useEffect(() => {
    const scriptId = "tradingview-widget-script";

    // Check if the script already exists in the container
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
            [
              "Apple",
              "AAPL|1D"
            ]
          ],
          "chartOnly": false,
          "width":600 ,
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
          "dateRanges": [
            "1d|1",
            "1w|7",
            "1m|30"
          ]
        }`;
      container.current.appendChild(script);
    }

    // Clean up function to remove the script when component unmounts
    return () => {
      const script = container.current.querySelector(`#${scriptId}`);
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      {/* <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div> */}
    </div>
  );
}

export default TradingViewWidget;
