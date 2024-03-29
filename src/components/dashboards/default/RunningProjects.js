import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Col, Form, ProgressBar, Row } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import FalconCardFooterLink from 'components/common/FalconCardFooterLink';
import Flex from 'components/common/Flex';
import classNames from 'classnames';

const Project = ({ project, isLast }) => {
  const { color, progress, duration, title } = project;
  return (
    <Row
      className={classNames('align-items-center py-2', {
        'border-bottom border-200 ': !isLast
      })}
    >
      <Col className="py-1">
        <Flex className="align-items-center">
          <div className="avatar avatar-xl me-3">
            <div className={`avatar-name rounded-circle bg-soft-${color}`}>
              <span className={`fs-0 text-${color}`}>{title[0]}</span>
            </div>
          </div>
          <Flex className="position-relative">
            <Flex tag="h6" align="center" className="mb-0">
              <a className="text-800 stretched-link" href="#!">
                {title}
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Col>
      <Col>
        <Row className="justify-content-end align-items-center">
          <Col xs="auto pe-0">
            <div className="fs--1 fw-semi-bold">{duration}</div>
          </Col>
          <Col xs="2" className="pe-card"></Col>
        </Row>
      </Col>
    </Row>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    color: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  isLast: PropTypes.bool
};

const RunningProjects = ({ data }) => {
  return (
    <Card>
      <FalconCardHeader
        title="Current Price"
        light
        titleTag="h6"
        endEl={
          <Form.Select size="sm" className="me-2">
            <option>Highest Price</option>
            <option>Lowest Price</option>
          </Form.Select>
        }
      />

      <Card.Body className="py-0">
        {data.map((project, index) => (
          <Project
            project={project}
            isLast={index === data.length - 1}
            key={project.id}
          />
        ))}
      </Card.Body>

      <FalconCardFooterLink title="Show all coin currency" size="sm" />
    </Card>
  );
};

RunningProjects.propTypes = {
  data: PropTypes.arrayOf(Project.propTypes.project).isRequired
};

export default RunningProjects;
