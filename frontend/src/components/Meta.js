import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Chaldal Grocery Shop',
};

export default Meta;
