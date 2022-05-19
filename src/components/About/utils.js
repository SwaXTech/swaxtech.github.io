import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";

export const renderTooltip = (text) => (props) =>
  <Tooltip {...props}>{text}</Tooltip>;
export const Tech = (props) => (
  <OverlayTrigger placement="top" overlay={renderTooltip(props.name)}>
    <Col xs={4} md={2} className="tech-icons">
      {props.children}
    </Col>
  </OverlayTrigger>
);
