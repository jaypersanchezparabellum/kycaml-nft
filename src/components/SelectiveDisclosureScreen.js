import React, { Component, useState, StyleSheet } from 'react';
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
import "react-datepicker/dist/react-datepicker.css";
import VerifyButton from "@passbase/button/react";

function SelectiveDisclosureScreen() {

    
    
    // Declare a new state variable, which we'll call "count"
    const [firstname, setfirstname] = useState();
    const [middlename, setmiddlename] = useState();
    const [lastname, setlastname] = useState();
    const [dob, setdob] = useState(new Date());
    const [email, setemail] = useState();
    const [mobile, setmobile] = useState();
    const [inclusion1, setinclusion1] = useState();
    const [address1, setaddress1] = useState();
    const [address2, setaddress2] = useState();
    const [city, setcity] = useState();
    const [stateprovince, setstateprovince] = useState();
    const [country, setcountry] = useState();
    const [zippostal, setzippostal] = useState();
    const [inclusion2, setinclusion2] =  useState();
    const [countrydob, setcountrydob] = useState();
    const [countrycitizenship, setcountrycitizenship] = useState();
    const [height, setheight] = useState();
    const [weight, setweight] = useState();
    const [eyecolor, seteyecolor] = useState();
    const [haircolor, sethaircolor] = useState();
    const [dataset,setdataset] = useState();
    const [checkbox1, setcheckbox1] = useState();
    const [checkbox2, setcheckbox2] = useState();
    
    let state = {};

    const referenceUserWithKey = (key) => {
        console.log(key)
        // Make request to your backend/db and save the key to the user's profile
    }

    function saveDataSet(event) {
        //check1 = { event.target.checked ? 'true' : 'false }
        alert(`${firstname}::${middlename}::${lastname}::${lastname}::${dob}::${checkbox1}::${email}::${mobile}::${address1}::${address2}::${city}::${stateprovince}::${country}::${zippostal}::${countrydob}::${countrycitizenship}::${height}::${weight}::${eyecolor}`);
        /*setdataset = {"firstname":firstname};
        state = {"middlename":middlename};
        state = {"lastname":lastname}
        state = {"dob":dob}
        state = {"email":email}
        state = {"mobile":mobile}
        state = {"address1":address1}
        state = {"address2":address2}
        state = {"city":city}
        state = {"stateprovince":stateprovince}
        state = {"country":country}
        state = {"zippostal":zippostal}
        state = {"countrydob":countrydob}
        state = {"countrycitizenship":countrycitizenship}
        state = {"height":height}
        state = {"weight":weight}
        state = {"eyecolor":eyecolor}
        state = {"haircolor":haircolor}
        alert(`${JSON.stringify(state)}`)*/
    }
    
    function handleCheckbox1(event) {
        if(checkbox1 !== undefined) {
            setcheckbox1(event.value)
        }
        else {
            setcheckbox1('off')
        }
    }

    function handleCheckbox2(event) {
        if(checkbox1 !== undefined) {
            setcheckbox2(event.value)
        }
        else {
            setcheckbox2('off')
        }
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
                        onChange={ (event) => { setfirstname(event.target.value) }}
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Middle Name"
                        aria-label="middlename"
                        aria-describedby="basic-addon1"
                        onChange={ (event) => { setmiddlename(event.target.value) }}
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Last Name"
                        aria-label="lastname"
                        aria-describedby="basic-addon1"
                        onChange={ (event) => { setlastname(event.target.value) }}
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <DatePicker className="mb-3" placeholder="Date Of Birth" selected={dob} onChange={date => setdob(date)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Email"
                        aria-label="email"
                        aria-describedby="basic-addon2"
                        onChange={ (event) => { setemail(event.target.value) }}
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
                        onChange={ (event) => { setmobile(event.target.value) }}
                        />
                        <InputGroup.Text id="basic-addon2">+1555-555-5555</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                    <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="inclusion" label="Select Data for Inclusion" placeholder="Select Data for Inclusion" onChange={ (event) => {handleCheckbox1(event)} }/>
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
                            onChange={ (event) => { setaddress1(event.target.value) }}
                            disabled = { checkbox1 === 'false' || checkbox1 === undefined }
                            />
                        </InputGroup>
                </Col>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Address 2"
                            aria-label="address2"
                            aria-describedby="basic-addon2"
                            onChange={ (event) => { setaddress2(event.target.value) }}
                            disabled = { checkbox1 === 'false' || checkbox1 === undefined }
                            />
                        </InputGroup>
                </Col>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="city"
                            aria-label="city"
                            aria-describedby="basic-addon2"
                            onChange={ (event) => { setcity(event.target.value) }}
                            disabled = { checkbox1 === 'false' || checkbox1 === undefined }
                            />
                        </InputGroup>
                </Col>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="State/Province"
                            aria-label="stateprovince"
                            aria-describedby="basic-addon2"
                            onChange={ (event) => { setstateprovince(event.target.value) }}
                            disabled = { checkbox1 === 'false' || checkbox1 === undefined }
                            />
                        </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" disabled = { checkbox1 === 'false' || checkbox1 === undefined }>
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
                            onChange={ (event) => { setzippostal(event.target.value) }}
                            disabled = { checkbox1 === 'false' || checkbox1 === undefined }
                            />
                        </InputGroup> 
                </Col>
            </Row>
            <Row>
                    <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="inclusion" label="Select Data for Inclusion" placeholder="Select Data for Inclusion" onChange={ (event) => {handleCheckbox2(event)} }/>
                    </InputGroup>
                    </Col>
            </Row>
            <Row>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic"  disabled = { checkbox2 === 'false' || checkbox2 === undefined }>
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
                        <Dropdown >
                            <Dropdown.Toggle variant="success" id="dropdown-basic" disabled = { checkbox2 === 'false' || checkbox2 === undefined }>
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
                            onChange={ (event) => { setheight(event.target.value) }}
                            disabled = { checkbox2 === 'false' || checkbox2 === undefined }
                            />
                        </InputGroup> 
                </Col>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Weight"
                            aria-label="weight"
                            aria-describedby="basic-addon2"
                            onChange={ (event) => { setweight(event.target.value) }}
                            disabled = { checkbox2 === 'false' || checkbox2 === undefined }
                            />
                        </InputGroup> 
                </Col>
                
            </Row>
            <Row>
            <Col>
                        <Dropdown >
                            <Dropdown.Toggle variant="success" id="dropdown-basic" disabled = { checkbox2 === 'false' || checkbox2 === undefined }>
                                Eye Color
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Black</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Brown</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                </Col>
                <Col>
                        <Dropdown >
                            <Dropdown.Toggle variant="success" id="dropdown-basic" disabled = { checkbox2 === 'false' || checkbox2 === undefined }>
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
                    <Button variant="primary" color="accent" onClick={saveDataSet} >Save Data Set</Button>
                </Col>
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
                            email: {firstname}
                        }}
                    />
                </Col>
            </Row>
        </Container>

            
        
    );

  }
  
  export default SelectiveDisclosureScreen;
