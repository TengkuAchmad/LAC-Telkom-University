// LIBRARY IMPORT
import React from "react";
import { Row, Col, Stack } from "react-bootstrap";

const SeparatorLine = (props) => {
  return (
    <Row className="mb-3">
      <Col xs={4}>
        <div className="line"></div>
      </Col>
      <Col xs={4}>
        <p className="p-line">{props.text}</p>
      </Col>
      <Col xs={4}>
        <div className="line"></div>
      </Col>
    </Row>
  );
};

export default SeparatorLine;
