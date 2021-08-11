import React, { Component } from 'react';
import { 
    Container, 
    Row, 
    Col, 
    Button, 
    InputGroup, 
    FormControl, 
    Dropdown
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import VerifyButton from "@passbase/button/react";

function SelectiveDisclosureScreen() {

    const referenceUserWithKey = (key) => {
        console.log(key)
        // Make request to your backend/db and save the key to the user's profile
    }

    return (
        <Container>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="First Name"
                        aria-label="firstname"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Middle Name"
                        aria-label="middlename"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Last Name"
                        aria-label="lastname"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <DatePicker className="mb-3" placeholder="Date Of Birth"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Email"
                        aria-label="email"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Mobile Number"
                        aria-label="mobile"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">+1555-555-5555</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                    <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="inclusion" label="Select Data for Inclusion" placeholder="Select Data for Inclusion"/>
                    </InputGroup>
                    </Col>
            </Row>
            <Row>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Address 1"
                            aria-label="address1"
                            aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                </Col>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Address 2"
                            aria-label="address2"
                            aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                </Col>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="city"
                            aria-label="city"
                            aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                </Col>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="State/Province"
                            aria-label="stateprovince"
                            aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Country
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Canada</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">India</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Pakistan</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Philippines</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Serbia</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">United States</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Zipcode/Postal Code"
                            aria-label="zipcodepostalcode"
                            aria-describedby="basic-addon2"
                            />
                        </InputGroup> 
                </Col>
            </Row>
            <Row>
                    <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="inclusion" label="Select Data for Inclusion" placeholder="Select Data for Inclusion"/>
                    </InputGroup>
                    </Col>
            </Row>
            <Row>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Country of Birth
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Canada</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">India</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Pakistan</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Philippines</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Serbia</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">United States</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                    </Col>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Country of Current citizenship
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Canada</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">India</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Pakistan</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Philippines</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Serbia</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">United States</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                    </Col>
            </Row>
            <Row>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Height"
                            aria-label="height"
                            aria-describedby="basic-addon2"
                            />
                        </InputGroup> 
                </Col>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Weight"
                            aria-label="weight"
                            aria-describedby="basic-addon2"
                            />
                        </InputGroup> 
                </Col>
                
            </Row>
            <Row>
            <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Eye Color
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Black</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Brown</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                </Col>
                <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Hair Color
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Black</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Brown</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Blonde</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                </Col>

            </Row>
            <Row>
                <Col>
                    <VerifyButton
                        apiKey={"TBFIEVmCNIcZ7605NBsoe9kVbM21Sdss6fXlztkkltvZIse6WA6u3NEUfXJXU3CG"}
                        onSubmitted={(identityAccessKey) => {
                            referenceUserWithKey(identityAccessKey)
                        }}
                        onFinish={(identityAccessKey) => {}}
                        onError={(errorCode) => {}}
                        onStart={() => {}}
                        prefillAttributes={{
                            email: "hans.meier@corp.de"
                        }}
                    />
                </Col>
            </Row>
        </Container>

            
        
    );
  }
  
  export default SelectiveDisclosureScreen;
