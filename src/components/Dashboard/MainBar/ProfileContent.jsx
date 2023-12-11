// LIBRARY IMPORT
import { Stack, Dropdown } from "react-bootstrap";

// ASSETS IMPORT
import { BiBell } from "react-icons/bi";

import { MDBBadge } from "mdb-react-ui-kit";

const ProfileContent = (props) => {
  return (
    <section id="profile">
      <div className="position-relative">
        <div className="position-absolute top-0 end-0">
          <Stack direction="horizontal">
            <div className="position-relative d-inline-block">
              <BiBell size={20} />
              <MDBBadge
                color="danger"
                className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
              >
                <span class="visually-hidden">New alerts</span>
              </MDBBadge>
            </div>
            <div className="circle-profile me-2 ms-3">
              <img src="https://i.pravatar.cc/25" alt="" />
            </div>
            <Stack direction="vertical">
              <h6>{props.name}</h6>
              <Dropdown>
                <Dropdown.Toggle variant="info" className="custom-dropdown-toggle">
                  As Proctor
                </Dropdown.Toggle>

                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item href="#/action-1" className="custom-dropdown-menu">Proctor</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Instructor
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Developing Support
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Stack>
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default ProfileContent;
