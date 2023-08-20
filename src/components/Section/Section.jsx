import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styled';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <SectionContainer>
        <h2>{title}</h2>
        {children}
      </SectionContainer>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
