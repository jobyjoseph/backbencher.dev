const React = require("react");

const HeadComponents = [
  <script
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5942804533883970"
    crossOrigin="anonymous"
    async
    key="1"
  />,
];

exports.onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setHeadComponents(HeadComponents);
  setPostBodyComponents([
    <script
      data-name="BMC-Widget"
      data-cfasync="false"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="jobyjoseph"
      data-description="Support me on Buy me a coffee!"
      data-message="Hope I could help you today! Would you like to buy me a coffee?"
      data-color="#FFDD00"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
    ></script>,
  ]);
};
