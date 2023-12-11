// LIBRARY IMPORT
import { Stack, Form, Row, Col } from "react-bootstrap";

// ASSETS IMPORT
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  BiMessageSquareCheck,
  BiMessageSquareEdit,
  BiMessageSquareDetail,
  BiGroup,
} from "react-icons/bi";
import Chart from "./MainBar/Chart";
const DashboardContent = () => {
  return (
    <>
      <section id="dashboard-content">
        <Stack className="mb-4">
          <h5>Welcome back, Karla!</h5>
          <p>01 Jan 2023</p>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div className="card-dashboard card-shadow-1">
            <Row className="pe-3 mb-3">
              <Col xs={10}>
                <BiMessageSquareCheck size={40} />
              </Col>
              <Col xs={2}>
                <BiDotsVerticalRounded size={20} />
              </Col>
            </Row>
            <Stack direction="vertical">
              <h4>02/08</h4>
              <p>Total Tasks</p>
            </Stack>
          </div>
          <div className="card-dashboard card-shadow-1">
            <Row className="pe-3 mb-3">
              <Col xs={10}>
                <BiMessageSquareEdit size={40} />
              </Col>
              <Col xs={2}>
                <BiDotsVerticalRounded size={20} />
              </Col>
            </Row>
            <Stack direction="vertical">
              <h4>22/40</h4>
              <p>Total Test</p>
            </Stack>
          </div>
          <div className="card-dashboard card-shadow-1">
            <Row className="pe-3 mb-3">
              <Col xs={10}>
                <BiMessageSquareDetail size={40} />
              </Col>
              <Col xs={2}>
                <BiDotsVerticalRounded size={20} />
              </Col>
            </Row>
            <Stack direction="vertical">
              <h4>02/08</h4>
              <p>Total Report</p>
            </Stack>
          </div>
          <div className="card-dashboard card-shadow-1">
            <Row className="pe-3 mb-3">
              <Col xs={10}>
                <BiGroup size={40} />
              </Col>
              <Col xs={2}>
                <BiDotsVerticalRounded size={20} />
              </Col>
            </Row>
            <Stack direction="vertical">
              <h4>02/08</h4>
              <p>Total Lessons</p>
            </Stack>
          </div>
        </Stack>

        <Row className="mt-3">
          <Col sm={4}>
            <div className="card-dashboard card-shadow-2">
              <h6>Student Performance</h6>
            </div>
          </Col>
          <Col sm={8}>
            <div className="card-dashboard card-shadow-2">
              <h6>Total Test Report</h6>
              <Chart />
            </div>
          </Col>
        </Row>

        <Row className="mt-3 ms-1 me-1">
          <div className="card-dashboard card-shadow-2">
            <h6>Teaching Lessons</h6>
          </div>
        </Row>
      </section>
    </>
  );
};

export default DashboardContent;
