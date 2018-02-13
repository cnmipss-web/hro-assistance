import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: this.props.currentUser,
      tel: '',
      issue: {},
    };

    this.updateFormValues = this.updateFormValues.bind(this);
  }

  updateFormValues(event) {
    event.preventDefault();
    console.log(event.target.id);
    return this;
  }

  render() {
    return (
      <Form
        id="request-form"
        aria-labelledby="form-title"
      >
        <FormTitle
          id="form-title"
          aria-label="request-form"
        >
          Enter Your Request
        </FormTitle>
        <label
          htmlFor="name-input"
        >
          Name:
          <input
            id="name-input"
            type="text"
            defaultValue={this.state.name}
            onChange={this.updateFormValues}
          />
        </label>
        <label
          htmlFor="email-input"
        >
          Email:
          <input
            id="email-input"
            type="email"
            defaultValue={this.state.email}
            onChange={this.updateFormValues}
          />
        </label>
        <label
          htmlFor="email-input"
        >
          Telephone:
          <input
            id="tel-input"
            type="phone"
            defaultValue={this.state.tel}
            onChange={this.updateFormValues}
          />
        </label>
        <label
          htmlFor="email-input"
        >
          Request:
          <input
            id="Issue-input"
            type="textarea"
            defaultValue={this.state.issue}
            onChange={this.updateFormValues}
          />
        </label>
      </Form>
    );
  }
}

RequestForm.propTypes = {
  currentUser: PropTypes.string.isRequired,
};

export default RequestForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width 500px;
  min-width: 250px;
  border: 1px solid grey;

  label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FormTitle = styled.h1`
  font-size: 1rem;
`;
