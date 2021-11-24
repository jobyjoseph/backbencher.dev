import React, { useEffect } from "react";

const GoogleAd = ({
  className,
  style,
  layout,
  format,
  client = "ca-pub-5942804533883970",
  slot,
  responsive,
  layoutKey,
}) => {
  useEffect(() => {
    try {
      const adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({});
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-layout={layout}
        data-ad-format={format}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-layout-key={layoutKey}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default GoogleAd;
