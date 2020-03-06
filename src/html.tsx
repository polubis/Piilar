import React from 'react';

interface Props {
  children: string;
  scripts: string[];
  stylesheets: string[];
  css: string;
}

class Html extends React.Component<Props> {
  render() {
    const { children, scripts, stylesheets, css } = this.props;

    return (
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <style id="jss-server-side">{css}</style>
          {stylesheets.map(sheet => (
            <link rel="stylesheet" key={sheet} href={sheet}></link>
          ))}
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: children }}></div>
          {scripts.map(script => (
            <script key={script} src={script} async></script>
          ))}
        </body>
      </html>
    );
  }
}

export default Html;
