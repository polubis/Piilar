import React from "react";

interface Props {
  children: string;
  scripts: string[];
  stylesheets: string[];
}

class Html extends React.Component<Props> {
  render() {
    const { children, scripts, stylesheets } = this.props;

    return (
      <html>
        <head>
          {/* <link rel="icon" href="data:,"></link> */}
          {/* <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" /> */}

          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
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
