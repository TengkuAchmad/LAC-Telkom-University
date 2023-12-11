// LIBRARY IMPORT
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Nav, Tab } from "react-bootstrap";
import { useUser } from '../api/UserContext';

// ASSETS IMPORT
import {
  BiGridAlt,
  BiMessageSquareCheck,
  BiMessageSquareEdit,
  BiMessageSquareDetail,
  BiGroup,
  BiLogOutCircle,
} from "react-icons/bi";
import { SiZoom } from "react-icons/si";
import telkom from "../assets/telkom2.png";

// COMPONENTS IMPORT
import DashboardContent from "../components/Dashboard/DashboardContent";
import Calendar from "../components/Dashboard/MainBar/CalendarContent";
import ProfileContent from "../components/Dashboard/MainBar/ProfileContent";
import UpcomingEvents from "../components/Dashboard/MainBar/UpcomingEvents";

const MainLayout = () => {
  const { userData } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear()
    navigate('/');
  }

  return (

    <>
      <section id="mainlayout">
        <Tab.Container id="sidebar" defaultActiveKey="Dashboard">
          <Row className="m-0">
            <Col sm={1} id="sidebar">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="sidebar-nav">
                    <img src={telkom} alt="telkom logo" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Dashboard"
                    className="sidebar-nav"
                    title="Dashboard"
                  >
                    <BiGridAlt />{" "}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Tasks"
                    className="sidebar-nav"
                    title="Tasks"
                  >
                    <BiMessageSquareCheck />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Tests"
                    className="sidebar-nav"
                    title="Tests"
                  >
                    <BiMessageSquareEdit />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Reports"
                    className="sidebar-nav"
                    title="Reports"
                  >
                    <BiMessageSquareDetail />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Participants"
                    className="sidebar-nav"
                    title="Participants"
                  >
                    <BiGroup />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Zoom"
                    className="sidebar-nav"
                    title="Zoom"
                  >
                    <SiZoom />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Logout"
                    className="sidebar-nav logout"
                    title="Logout"
                    onClick={handleLogout}
                  >
                    <BiLogOutCircle />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content className="ps-5 pt-3 pb-3 pe-1">
                <Tab.Pane eventKey="Dashboard">
                  <DashboardContent />
                </Tab.Pane>
                <Tab.Pane eventKey="Tasks">
                  <DashboardContent />
                </Tab.Pane>
                <Tab.Pane eventKey="Tests">
                  <DashboardContent />
                </Tab.Pane>
                <Tab.Pane eventKey="Reports">
                  <DashboardContent />
                </Tab.Pane>
                <Tab.Pane eventKey="Participants">
                  <DashboardContent />
                </Tab.Pane>
              </Tab.Content>
            </Col>

            <Col sm={3} id="mainbar">
              <ProfileContent name={userData.uuid_user}/>
              <Calendar />
              <UpcomingEvents />
            </Col>
          </Row>
        </Tab.Container>
      </section>
    </>
  );
};

export default MainLayout;
