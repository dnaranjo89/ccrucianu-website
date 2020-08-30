import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import 'react-vertical-timeline-component/style.min.css';

const Logo = ({ alt, filename }) =>
  console.log('filename', alt, filename) || (
    <div key={alt} data-tilt className="thumbnail rounded">
      <ProjectImg alt={alt} filename={filename} />
    </div>
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

  //   <VerticalTimeline>
  //   <VerticalTimelineElement
  //     className="vertical-timeline-element--work"
  //     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  //     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
  //     date="2011 - present"
  //     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  //     // icon={<WorkIcon />}
  //   >
  //     <h3 className="vertical-timeline-element-title">Creative Director</h3>
  //     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
  //     <p>
  //       Creative Direction, User Experience, Visual Design, Project Management, Team Leading
  //     </p>
  //   </VerticalTimelineElement>
  //   <VerticalTimelineElement
  //     className="vertical-timeline-element--work"
  //     date="2010 - 2011"
  //     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  //     // icon={<WorkIcon />}
  //   >
  //     <h3 className="vertical-timeline-element-title">Art Director</h3>
  //     <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
  //     <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
  //   </VerticalTimelineElement>
  // </VerticalTimeline>

  return (
    <section id="timeline">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          <VerticalTimeline>
            {projects.map((project) => {
              const { title, subtitle, info, info2, url, repo, img, id } = project;

              return (
                <VerticalTimelineElement
                  className="timelineItem"
                  contentStyle={{
                    'box-shadow': '7px 10px 5px 0px rgba(0, 0, 0, 0.25)',
                    'border-radius': '10px',
                    // margin: '4em 0',
                    width: '40%',
                    textAlign: 'right',
                  }}
                  // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date="2011 - present"
                  iconClassName="timelineIcon"
                  dateClassName="timelineDate"
                  icon={<Logo alt={title} filename={img} />}
                  contentArrowStyle={{ display: 'none' }}
                >
                  <h3 className="vertical-timeline-element-title">{title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
                  <p>{info}</p>
                </VerticalTimelineElement>
                // <Row key={id}>
                //   <Col lg={4} sm={12}>
                //     <Fade
                //       left={isDesktop}
                //       bottom={isMobile}
                //       duration={1000}
                //       delay={500}
                //       distance="30px"
                //     >
                //       <div className="project-wrapper__text">
                //         <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                //         <div>
                //           <p>
                //             {info ||
                //               'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                //           </p>
                //           <p className="mb-4">{info2 || ''}</p>
                //         </div>
                //         <a
                //           target="_blank"
                //           rel="noopener noreferrer"
                //           className="cta-btn cta-btn--hero"
                //           href={url || '#!'}
                //         >
                //           See Live
                //         </a>

                //         {repo && (
                //           <a
                //             target="_blank"
                //             rel="noopener noreferrer"
                //             className="cta-btn text-color-main"
                //             href={repo}
                //           >
                //             Source Code
                //           </a>
                //         )}
                //       </div>
                //     </Fade>
                //   </Col>
                //   <Col lg={8} sm={12}>
                //     <Fade
                //       right={isDesktop}
                //       bottom={isMobile}
                //       duration={1000}
                //       delay={1000}
                //       distance="30px"
                //     >
                //       <div className="project-wrapper__image">
                //         <a
                //           href={url || '#!'}
                //           target="_blank"
                //           aria-label="Project Link"
                //           rel="noopener noreferrer"
                //         >
                //           <Tilt
                //             options={{
                //               reverse: false,
                //               max: 8,
                //               perspective: 1000,
                //               scale: 1,
                //               speed: 300,
                //               transition: true,
                //               axis: null,
                //               reset: true,
                //               easing: 'cubic-bezier(.03,.98,.52,.99)',
                //             }}
                //           >
                //             <div data-tilt className="thumbnail rounded">
                //               <ProjectImg alt={title} filename={img} />
                //             </div>
                //           </Tilt>
                //         </a>
                //       </div>
                //     </Fade>
                //   </Col>
                // </Row>
              );
            })}
          </VerticalTimeline>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
