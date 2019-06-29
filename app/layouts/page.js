import React, { Fragment } from 'react';

const page = ({ children }) => {
  return (
    <Fragment>
      <main>{children}</main>
    </Fragment>
  );
};

export default page;
