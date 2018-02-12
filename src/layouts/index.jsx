import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import Header from '../components/Header';
import theme from '../styles';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="CNMI Public School System Human Resources Office Assistance"
      meta={[
        { name: 'description', content: 'human resources office assistance' },
        { name: 'keywords', content: 'cnmi pss, public school system, human resources, assistance' },
      ]}
    />
    <ThemeProvider theme={theme} >
      <div>
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children()}
        </div>
      </div>
    </ThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
