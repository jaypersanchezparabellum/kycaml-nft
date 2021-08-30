import React, { Component, useState, StyleSheet, Form } from 'react';
import { 
    Container, 
    Row, 
    Col, 
    Button, 
    InputGroup, 
    FormControl, 
    Dropdown
} from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import VerifyButton from "@passbase/button/react";
//encryption functions
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
const crypto = require("crypto");
const fs = require("fs");






function SelectiveDisclosureScreen() {
    let xdata;

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
    const [encodedmetadata, setencodedmetadata] = useState();
    const [hmacdigest, sethmacdigest] = useState();
    
    let state = {};

    const referenceUserWithKey = (key) => {
        console.log(`UUID of Passbase verification ${key}`)
        sessionStorage.setItem('referenceuserkey', key)
        // This UUID from Passbase can be used to query, via Passbase API, for status of the verfication which must be done manually.  
        
    }

    function saveDataSet() {
        alert(JSON.stringify(state))
        /*const metadata = {
            "firstname":firstname,
            "middlename":middlename,
            "lastname":lastname,
            "dob":dob,
            "selectedinclusion1":checkbox1,
            "email":email,
            "mobile":mobile,
            "address1":address1,
            "address2":address2,
            "city":city,
            "stateprovince":stateprovince,
            "country":country,
            "zippostal":zippostal,
            "countrydob":countrydob,
            "selectedinclusion2":checkbox2,
            "countrycitizenship":countrycitizenship,
            "height":height,
            "weight":weight,
            "eyecolor":eyecolor,
            "haircolor":haircolor
        }*/
        let uuid = '83155ef0-b92b-4bef-9ddb-fffec69fc8f0'
        //axios connect
        axios.post('http://127.0.0.1:8080/identitykey', {
            uuid:uuid
        })
          .then(function (response) {
              alert(`save data ${response}`);
            console.log(response);
        })
          .catch(function (error) {
              console.log(error)
            alert(`save data error ${error}`);
        });
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
        if(checkbox2 !== undefined) {
            setcheckbox2(event.value)
        }
        else {
            setcheckbox2('off')
        }
    }

    function handleFirstName(event) {
        setfirstname(event.value)
        state = {firstname:event.value}
    }

    function handleLastName(event) {
        setlastname(event.value)
        state = {lastname:event.value}
    }

    return (
        <Container>
            <Row style={{ backgroundColor: 'blue', justifyContent: "center", "margin-bottom": "8px" }}>
            <Col md={4}>Parabellum KYC/AML Process</Col>
            </Row>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="First Name"
                        aria-label="firstname"
                        aria-describedby="basic-addon1"
                        onChange={ (event) => { 
                            handleFirstName(event.target.value) 
                            //alert(`First Name ${event.target.value}`)
                        }}
                        style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Middle Name"
                        aria-label="middlename"
                        aria-describedby="basic-addon1"
                        onChange={ (event) => { 
                            setmiddlename(event.target.value) 
                        }}
                        style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
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
                        style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <DatePicker className="mb-3" placeholder="Date Of Birth" selected={dob} onChange={date => setdob(date)} style={{border: '10px solid rgba(0, 0, 0, 0.05)'}} />
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
                        style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
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
                        style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
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
                            style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
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
                            style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
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
                            style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
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
                            style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
                            />
                        </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="country"
                            aria-label="country"
                            aria-describedby="basic-addon2"
                            onChange={ (event) => { setcountry(event.target.value) }}
                            disabled = { checkbox1 === 'false' || checkbox1 === undefined }
                            style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
                            />
                        </InputGroup>
                </Col>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Zipcode/Postal Code"
                            aria-label="zipcodepostalcode"
                            aria-describedby="basic-addon2"
                            onChange={ (event) => { setzippostal(event.target.value) }}
                            disabled = { checkbox1 === 'false' || checkbox1 === undefined }
                            style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
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
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Country of Birth"
                            aria-label="countrydob"
                            aria-describedby="basic-addon2"
                            onChange={ (event) => { setcountrydob(event.target.value) }}
                            disabled = { checkbox2 === 'false' || checkbox2 === undefined }
                            style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Current of Citizenship"
                            aria-label="countrycitizenship"
                            aria-describedby="basic-addon2"
                            onChange={ (event) => { setcountrycitizenship(event.target.value) }}
                            disabled = { checkbox2 === 'false' || checkbox2 === undefined }
                            style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
                            />
                        </InputGroup>
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
                            style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
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
                            style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
                            />
                        </InputGroup> 
                </Col>
                
            </Row>
            <Row>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Eye Color"
                            aria-label="eyecolor"
                            aria-describedby="basic-addon2"
                            onChange={ (event) => { seteyecolor(event.target.value) }}
                            disabled = { checkbox2 === 'false' || checkbox2 === undefined }
                            style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
                            />
                        </InputGroup>
                </Col>
                <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Hair Color"
                            aria-label="haircolor"
                            aria-describedby="basic-addon2"
                            onChange={ (event) => { sethaircolor(event.target.value) }}
                            disabled = { checkbox2 === 'false' || checkbox2 === undefined }
                            style={{border: '10px solid rgba(0, 0, 0, 0.05)'}}
                            />
                        </InputGroup>
                </Col>

            </Row>

            <Row>
                <Col>
                    <Button variant="primary" color="accent" onClick={ saveDataSet }>Save Data Set</Button>
                </Col>
                <Col>
                    <VerifyButton
                        apiKey={"TBFIEVmCNIcZ7605NBsoe9kVbM21Sdss6fXlztkkltvZIse6WA6u3NEUfXJXU3CG"}
                        onSubmitted={(identityAccessKey) => {
                            localStorage.setItem('referenceuserkey', identityAccessKey)
                            //POST to 'identitykey' endpoint
                        }}
                        onFinish={(identityAccessKey) => {
                            // Open new window for end user to prevent duplicate verifications
                            window.location.href =("https://kycaml-nft.parabellum.io/")
                        }}
                        onError={(errorCode) => {
                            alert(`Verification Error: ${errorCode}`)
                        }}
                        onStart={() => { 
                            
                            //let recordId = Math.floor((Math.random() * 100000) + 1);
                            const metadata = {
                                "firstname":firstname,
                                "middlename":middlename,
                                "lastname":lastname,
                                "dob":dob,
                            }
                            //POST to '/nftid' endpoint
                            
                            
                        }}
                        metaData={{
                            "metadata":xdata
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );

  }
  
  export default SelectiveDisclosureScreen;
