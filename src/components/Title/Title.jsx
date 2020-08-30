import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Title = ({ title, subtitle }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <div className="sectionTitleContainer">
      <h2 className="sectionTitle">{title}</h2>
      {subtitle && <p className="sectionSubtitle">{subtitle}</p>}
    </div>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
