import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Subtitle = ({ title }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <p className="sectionSubtitle">{title}</p>
  </Fade>
);

Subtitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Subtitle;
