import React, { Component } from 'react';

import {
    Label,
    FormGroup,
    Button,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { User, Calendar, File } from 'react-feather';

class ApplyForLeave extends Component {
    // _isMounted = false;

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <AvForm onValidSubmit={this.handleValidSubmit} className="authentication-form card p-5">
                                
                            <h5 className="text-uppercase  text-center">Apply Your Leave</h5>
                                <AvGroup className="">
                                    <Label for="fullname">Leave Type</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="input-group-text">
                                                <User className="icon-dual" />
                                            </span>
                                        </InputGroupAddon>
                                        <AvInput
                                            type="text"
                                            name="fullname"
                                            id="fullname"
                                            required
                                        />
                                    </InputGroup>

                                    <AvFeedback>This field is invalid</AvFeedback>
                                </AvGroup>
                                <AvGroup className="">
                                    <Label for="fullname">Leave For</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="input-group-text">
                                                <User className="icon-dual" />
                                            </span>
                                        </InputGroupAddon>
                                        <AvInput
                                            type="text"
                                            name="fullname"
                                            id="fullname"
                                            required
                                        />
                                    </InputGroup>

                                    <AvFeedback>This field is invalid</AvFeedback>
                                </AvGroup>
                                <AvGroup className="">
                                    <Label for="email">Start Date</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="input-group-text">
                                                <Calendar className="icon-dual" />
                                            </span>
                                        </InputGroupAddon>
                                        <AvInput
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                        />
                                    </InputGroup>

                                    <AvFeedback>This field is invalid</AvFeedback>
                                </AvGroup>

                                <AvGroup className="">
                                    <Label for="email">End Date</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="input-group-text">
                                                <Calendar className="icon-dual" />
                                            </span>
                                        </InputGroupAddon>
                                        <AvInput
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                        />
                                    </InputGroup>

                                    <AvFeedback>This field is invalid</AvFeedback>
                                </AvGroup>
                                <AvGroup className="mb-3">
                                    <Label for="password">Reason</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="input-group-text">
                                                <File className="icon-dual" />
                                            </span>
                                        </InputGroupAddon>
                                        <AvInput
                                            type="text"
                                            name="password"
                                            id="password"
                                            required
                                        />
                                    </InputGroup>
                                    <AvFeedback>This field is invalid</AvFeedback>
                                </AvGroup>
                                <FormGroup className="form-group mb-0 text-center">
                                    <Button className="btn-block btn btn-secondary">
                                        Apply
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

export default ApplyForLeave;
