import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Settings = () => {
  return (
    <div
      className="tab-pane"
      id="pills-setting"
      role="tabpanel"
      aria-labelledby="pills-setting-tab"
    >
      <div>
        <div className="px-4 pt-4">
          <h4 className="mb-0">Settings</h4>
        </div>

        <div className="text-center border-bottom p-4">
          <div className="mb-4 profile-user">
            <img
              src="assets/images/users/avatar-1.jpg"
              className="rounded-circle avatar-lg img-thumbnail"
              alt=""
            />
            <button
              type="button"
              className="btn bg-light avatar-xs p-0 rounded-circle profile-photo-edit"
            >
              <i className="ri-pencil-fill"></i>
            </button>
          </div>

          <h5 className="font-size-16 mb-1 text-truncate">Patricia Smith</h5>
          <div className="dropdown d-inline-block mb-1">
            <a
              className="text-muted dropdown-toggle pb-1 d-block"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Available <i className="mdi mdi-chevron-down"></i>
            </a>

            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Available
              </a>
              <a className="dropdown-item" href="#">
                Busy
              </a>
            </div>
          </div>
        </div>
        {/*  */}

        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                About
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card.Header>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Media
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card.Header>
          <Card.Header>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Media
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card.Header>
          <Card.Header>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Media
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card.Header>
        </Accordion>

        {/*  */}
      </div>
    </div>
  );
};

export default Settings;
