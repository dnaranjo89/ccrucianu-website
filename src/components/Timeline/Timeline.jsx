import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import 'react-vertical-timeline-component/style.min.css';

const Logo = ({ alt, filename, url }) => (
  <a href={url} key={alt} data-tilt className="thumbnail rounded">
    <ProjectImg alt={alt} filename={filename} />
  </a>
);

const Timeline = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="timeline">
      <Container>
        <div className="project-wrapper">
          <Title title="⌛ Timeline" subtitle="Professional experience" />
          <VerticalTimeline>
            {projects.map((project) => {
              const { title, subtitle, info, date, url, img, id } = project;

              return (
                <VerticalTimelineElement
                  key={id}
                  className="timelineItem"
                  date={date}
                  iconClassName="timelineIcon"
                  dateClassName="timelineDate"
                  icon={<Logo alt={title} filename={img} url={url} />}
                  contentArrowStyle={{ display: 'none' }}
                >
                  <a href={url}>
                    <h3 className="timelineItemTitle">{title}</h3>
                    <h4 className="timelineItemSubtitle">{subtitle}</h4>
                  </a>
                  <p className="timelineItemInfo">{info}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
