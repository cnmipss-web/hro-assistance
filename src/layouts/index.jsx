import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

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
        <Main>
          {children()}
        </Main>
      </div>
    </ThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;

const Main = styled.main`
  width: 100%;
  margin-top: ${props => props.theme.header.height};
  padding: 15px;
`;
