import React, { Component, useState, StyleSheet, Form } from 'react';
import fs from 'fs'
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
const crypto = require("crypto");
//const fs = require("fs");


function SelectiveDisclosureScreen() {

    const pk = `-----BEGIN RSA PRIVATE KEY-----
    Proc-Type: 4,ENCRYPTED
    DEK-Info: DES-EDE3-CBC,1BA03E7DD91084B7
    
    Kan8UIv9mR/PLHFt9V4yyTwDW7IiRam4fVqdB/MF+zvBZrRD727FpmT1A7GfK5sQ
    2bc1+UPWl1TwspSC8vFwF0bk5i1Z3E6iLGPToql0/wMtmlvBT3lUQB7eMFRO9mWL
    AN2sh80gbKiTnECsWK0Tm1MtUr1o46ioVMaqat9NqtLTOTwe2a69XU/3flXrSqyI
    qH0u2zoWGsi7JSDjjC9a9Xh7Cr1yvucm8yyQe0kaf8Lrc8J4Ajqwy6XrzTXqD7BU
    c9f/bOjPrXVx92wrJ7mN1Yi3VEHSlhzcoTQd0/psWOHT4cob7Ws5GgACbjHEvp6r
    42HiarKnV06AjnpQnqQt6nrNiZ4G2wMhrckW5Nyt99qJ48QGpcf2xL+qKSVuY/Ut
    02vVm9VgXTsH6ZmsuwcIAi98nKdQjw892mwmcgLM0ZMuGV6e2pgY7S6HKdzIZkfN
    vf+0NVnDGem+/3nIct2RLaVnNNGty7QXPTKhqodEfCZGsy0CGCVlH1s7pfxQANED
    EoKoH1b7NnDKKnmCj2NrkwImjvSN1zpT5c9+Z4FTb3uJvEuZYue5hzyg6IwGMZql
    vrYDIBdjtcz7+BlLCR9a2RF+kp7gti+hYwOr9J66dOTxIk2529zrA5gJ2C/F9awF
    8GBzHl8h6OSvd32hNJdZ8qCBerdoqMXadNiYEkYKaAcF2w7JdYgjCMCBp6E5HyFf
    BbaHgG5jt383x2WV0S3+ewEXpkZv6Fr7vqmaFxKcoFaMobeeMAYBlgMn+T7wmGDn
    a9d8COcXlbAs4Zx84C5+I4DoOrd59MKIxcPHOEPduzcpdcnJyVF9gcohvCfU/FqA
    XBXzZkegkj/ra+9iE58DkckHZfARwHJROSvQKbF0h1Hxvxmqm7reyiRTcJrQ4ddb
    mantqdG3myqiB6Umh0KF4Fqku5l9yv6Qz3dJmifwregL2kp5eoTi+dCsO7d9KMMS
    EOW/OZqv5g6jwRM2dkCYqyI0WGX5C7zAFcU+1y1gVoe+1XYaKGpC6p2CIxhrTd/1
    6aCsQ+SN+D1j8LNaOgCNiF3QFb7mkXeEhZcelpdnrUSFmDcIGbViD2YNzV9NON7c
    KT59V6QxoPUpsfB3vGS2yRofhrEcoKK3Vysx9yHZL55IEPZPoYcleGu+1idgXXgc
    n11B+57EDVpV3cPRm73PLbLFNxz+yo1DwBj07EN66ry0U437Pj6M1iAgEP09qh5t
    RY5o5txGsCm0mshDjqrK+y0oARSyEk7510MReaJou9Te0mKMDQDhVEKewpv1ov9y
    giJRUWIovByXSLvkY763wQ7BVndYu/oNpx3XoSPJN1Epd2L7FevP7bXVcUptdU5o
    nXXJbb9GPsBkio52awFusEHmNXpMvbWR3w/zD3CuW+f0beN6sEagSSh4mpkCJBp1
    +IwIS9ohpdoI8JJo8x+5k6KEfFe/z4kzCVURydKzOvaw1Pvifn8FNAEdsyd7relH
    MERO9rkVlz/qPEze0hCiuunl5UfI1BaBb826156HVLrT1eOYA5KSQlm1B7bKjYaP
    AbS1c+8y3+bilHtnA2Wpm0ioY66gYPVe1JhX41tqUkuu5rI2ymS8r2e9UERIpLsh
    -----END RSA PRIVATE KEY-----`
    

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
    
    let state = {};

    const referenceUserWithKey = (key) => {
        console.log(key)
        // Make request to your backend/db and save the key to the user's profile
    }

    function saveDataSet(event) {
        //var plainText = (`${firstname}::${middlename}::${lastname}::${lastname}::${dob}::${checkbox1}::${email}::${mobile}::${address1}::${address2}::${city}::${stateprovince}::${country}::${zippostal}::${countrydob}::${countrycitizenship}::${height}::${weight}::${eyecolor}`);
        const metadata = {
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
        }
        //encode 
        //const pkey = crypto.createPrivateKey({format: 'pem', key: pk});
        //const encrypted_metadata = crypto.privateEncrypt(pk, Buffer.from(JSON.stringify(metadata))).toString('base64');
        alert(`${JSON.stringify(metadata)}`);
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
                    <Dropdown.Toggle variant="success" id="dropdown-basic"  disabled = { checkbox1 === 'false' || checkbox1 === undefined }
                                  value={(event) => alert(event.target.value)} 
                                  //onChange={ (evernt) => alert(event.target.value) } 
                    >
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
                        <Dropdown disabled = { checkbox2 === 'false' || checkbox2 === undefined } >
                            <Dropdown.Toggle variant="success" id="dropdown-basic" onSelect={function(evt){console.log(evt)}}>
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
                        onFinish={(identityAccessKey) => {
                            // Open new window for end user to prevent duplicate verifications
                            window.location.href =("https://passbase.com/")
                        }}
                        onError={(errorCode) => {}}
                        onStart={() => {}}
                        prefillAttributes={{
                            email: {email}
                        }}
                    />
                </Col>
            </Row>
        </Container>

            
        
    );

  }
  
  export default SelectiveDisclosureScreen;
