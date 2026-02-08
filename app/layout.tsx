import React from 'react';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Backoffice</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;