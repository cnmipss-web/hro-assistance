import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
// import styled from 'styled-components';

class ExistingTickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: this.props.admin,
    };
  }

  componentWillMount() {
    const currentTickets = axios.get('dummy');
    this.setState({
      currentTickets,
    });
  }

  ticketTable() {
    const { currentTickets } = this.state;
    return (
      <table>
        {currentTickets}
      </table>
    );
  }

  ticketEstimate() {
    const { currentTickets } = this.state;
    return (
      <div>
        {currentTickets}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.admin ? this.ticketTable() : this.ticketEstimate() }
      </div>
    );
  }
}

ExistingTickets.propTypes = {
  admin: PropTypes.bool,
};

ExistingTickets.defaultProps = {
  admin: false,
};

export default ExistingTickets;
