import { React, useState } from "react";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

export const TabsComponent = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div>
      <Nav tabs justified>
        <NavItem style={{ cursor: "pointer" }}>
          <NavLink
            className={activeTab == "1" ? "active" : ""}
            onClick={() => {
              setActiveTab("1");
            }}
          >
            Complete
          </NavLink>
        </NavItem>
        <NavItem style={{ cursor: "pointer" }}>
          <NavLink
            className={activeTab == "2" ? "active" : ""}
            onClick={() => {
              setActiveTab("2");
            }}
          >
            Incomplete
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">{props.complete}</Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">{props.incomplete}</Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};
