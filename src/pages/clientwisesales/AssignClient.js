import React, { Component } from 'react';

import {
    Label,
    FormGroup,
    Button,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap';
import { AvForm, AvGroup, AvFeedback } from 'availity-reactstrap-validation';
import { User } from 'react-feather';

class AssignClient extends Component {
    // _isMounted = false;

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <AvForm onValidSubmit={this.handleValidSubmit} className="authentication-form card p-5">
                                
                            <h5 className="text-uppercase  text-center">Apply Your Leave</h5>
                                <AvGroup className="">
                                    <Label for="fullname">Select Sales User</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="input-group-text">
                                                <User className="icon-dual" />
                                            </span>
                                        </InputGroupAddon>
                                        <select
                                            type="text"
                                            className="form-control"
                                            name="fullname"
                                            id="fullname"
                                            required
                                        ></select>
                                    </InputGroup>

                                    <AvFeedback>This field is invalid</AvFeedback>
                                </AvGroup>
                                <AvGroup className="">
                                    <Label for="fullname">Select Client Name</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="input-group-text">
                                                <User className="icon-dual" />
                                            </span>
                                        </InputGroupAddon>
                                        <select
                                            type="text"
                                            name="clentname"
                                            id="clentname"
                                            className="form-control"
                                            required
                                        ></select>
                                    </InputGroup>

                                    <AvFeedback>This field is invalid</AvFeedback>
                                </AvGroup>
                                <FormGroup className="form-group mb-0 text-center">
                                    <Button className="btn-block btn btn-secondary">
                                        Assign Client
                                    </Button>
                                </FormGroup>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AssignClient;
