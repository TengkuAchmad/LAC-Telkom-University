// LIBRARY IMPORT
import { Row, Col, Stack } from "react-bootstrap";

// ASSETS IMPORT
import { BiDotsVerticalRounded } from "react-icons/bi";

const UpcomingEvents = () => {
  return (
    <section id="upcoming-events">
      <div className="title-mainbar mt-3 mb-3">
        <h6>Upcoming Events</h6>
      </div>
      <Row>
        <Col xs={3}>
          <p>11 Dec</p>
        </Col>
        <Col xs={8}>
          <div className="line"></div>
        </Col>
        <Col xs={1}>
          <BiDotsVerticalRounded size={15} />
        </Col>
      </Row>

      <Row className="container-task">
        <Col xs={3} className="task-schedule">
          <h6>09.00 AM</h6>
        </Col>
        <Col xs={1} className="task-schedule">
          <h2>|</h2>
        </Col>
        <Col xs={4} className="task-schedule">
          <Stack direction="vertical">
            <h6>EPrT A</h6>
            <p>Proctoring</p>
          </Stack>
        </Col>
        <Col xs={4} className="task-schedule">
          <p>09.00-12.00 am</p>
        </Col>
      </Row>
      <Row className="container-task">
        <Col xs={3} className="task-schedule">
          <h6>01.00 PM</h6>
        </Col>
        <Col xs={1} className="task-schedule">
          <h2>|</h2>
        </Col>
        <Col xs={4} className="task-schedule">
          <Stack direction="vertical">
            <h6>EPrT B</h6>
            <p>Proctoring</p>
          </Stack>
        </Col>
        <Col xs={4} className="task-schedule">
          <p>01.00-03.00 pm</p>
        </Col>
      </Row>
      <Row className="container-task">
        <Col xs={3} className="task-schedule">
          <h6>04.00 PM</h6>
        </Col>
        <Col xs={1} className="task-schedule">
          <h2>|</h2>
        </Col>
        <Col xs={4} className="task-schedule">
          <Stack direction="vertical">
            <h6>EPrT C</h6>
            <p>Proctoring</p>
          </Stack>
        </Col>
        <Col xs={4} className="task-schedule">
          <p>04.00-06.00 pm</p>
        </Col>
      </Row>
    </section>
  );
};

export default UpcomingEvents;
