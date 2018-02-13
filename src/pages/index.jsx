import React from 'react';
// import Link from 'gatsby-link';

import RequestForm from '../components/RequestForm';
import ExistingTickets from '../components/ExistingTickets';

const IndexPage = () => (
  <div>
    <RequestForm />
    <ExistingTickets />
  </div>
);

export default IndexPage;
