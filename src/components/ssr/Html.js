import React from "react";

class Html extends React.Component {
  render() {
    const { children, scripts, stylesheets } = this.props;

    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          {stylesheets.map(sheet => (
            <link rel="stylesheet" key={sheet} href={sheet}></link>
          ))}
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: children }}></div>
          {scripts.map(script => (
            <script key={script} src={script}></script>
          ))}
        </body>
      </html>
    );
  }
}

export default Html;
