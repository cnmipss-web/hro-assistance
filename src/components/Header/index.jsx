import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = props => (
  <HeaderBox>
    <HeaderTitle>
      CNMI PSS HRO Assistance
    </HeaderTitle>
    <UserInfo>
      {props.currentUser}
      <LoginButton
        tabIndex="0"
        onClick={() => {}}
      >
        {props.currentUser ? 'Logout' : 'Login'}
      </LoginButton>
    </UserInfo>
  </HeaderBox>
);

Header.propTypes = {
  currentUser: PropTypes.string.isRequired,
};

export default Header;

const HeaderBox = styled.div`
  background: ${props => props.theme.header.backgroundColor};
  color: ${props => props.theme.header.color};
  height: ${props => props.theme.header.height};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  margin: 15px;
  font-size: 1.25rem;
`;

const UserInfo = styled.div`
  margin: 15px;
  font-size: 1rem;
`;

const LoginButton = styled.button`
  background-color: inherit;
  border: none;
  color: inherit;
  cursor: pointer;
`;
