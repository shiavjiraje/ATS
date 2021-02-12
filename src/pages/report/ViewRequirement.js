import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search,CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {UncontrolledDropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import * as FeatherIcon from 'react-feather';
import { getReqReportList } from '../../redux/allreport/actions';
//import EditRequirementmodal from './EditRequirementmodal';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import PageTitle from '../../components/PageTitle';
//import AddUserModal from '../user/AddUserModal';
//import EditRequirementmodal from './EditRequirementmodal';

const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];

const { ExportCSVButton } = CSVExport;
const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">Show</label>
        <Input
            type="select"
            name="select"
            id="no-entries"
            className="custom-select custom-select-sm d-inline col-2"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>;
            })}
        </Input>
        <label className="d-inline ml-1">Entry</label>
    </React.Fragment>
);

const TableWithSearch = (props) => {
    const { SearchBar } = Search;
    //const dispatch = useDispatch();

    // const rowEvent = {
    //     onClick: (e, row, rowIndex) => {
    //       console.log(`clicked on row with index: ${rowIndex} ${row.jobcode}`);
    //     }
    //   };
    const NoDataIndication = () => (
        <div className="spinner">
          <div className="rect1" />
          <div className="rect2" />
          <div className="rect3" />
          <div className="rect4" />
          <div className="rect5" />
        </div>
      );
      const {
        //buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
      const [file, setFile] = useState(null);
      const toggle = () => setModal(!modal);
      const UPLOAD_ENDPOINT =
      "http://144.48.250.235:98/api/UploadFile";
  
    const handleSubmit = async e => {
      e.preventDefault();
      //if await is removed, console log will be called before the uploadFile() is executed completely.
      //since the await is added, this will pause here then console log will be called
      let res = await uploadFile(file);
      console.log(res.data);
    };
  
    const uploadFile = async file => {
      const formData = new FormData();
      formData.append("avatar", file);
  
      return await axios.post(UPLOAD_ENDPOINT, formData, {
        headers: {
          "content-type": "multipart/form-data"
        }
      });
    };
  
    const handleOnChange = e => {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
    };
    return (
            
                <ToolkitProvider bootstrap4 keyField="ROW_NUMBER" data={props.records} columns={props.columns} search>
                    {(props) => (
                        <React.Fragment>
                            <Row>
                                
                                <Col md={6} className="">
                                    <SearchBar {...props.searchProps} />
                                </Col>    
                                <Col md={6} className="text-right">
                                <UncontrolledDropdown className=" profile-dropdown-menu">
                                <button className="btn btn-secondary bg-secondary upbtn  mr-0" onClick={toggle}>Upload New</button>
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="button"
                    className="btn btn-secondary dropdown-toggle bg-secondary  mr-0">
                    Download <FeatherIcon.ChevronDown />
                </DropdownToggle>
                <DropdownMenu right className="topbar-dropdown-menu profile-dropdown-items">
                    <div className="dropdown-item notify-item p1">
                    <ExportCSVButton className="btn-link" { ...props.csvProps }>Export CSV</ExportCSVButton>
                    </div>
                    <div  className="dropdown-item notify-item p1">
                    <ExportCSVButton className="btn-link" { ...props.csvProps }>Export PDF</ExportCSVButton>
                    </div>
                    <div  className="dropdown-item notify-item p1">
                    <ExportCSVButton className="btn-link" { ...props.csvProps }>Export EXCEL</ExportCSVButton>
                    </div>
                </DropdownMenu>
            </UncontrolledDropdown>
            <Modal isOpen={modal} toggle={toggle} className={className}>
            <form onSubmit={handleSubmit}>
                        <ModalHeader toggle={toggle}>Upload </ModalHeader>
                        <ModalBody>
                          <Row>
                            <input type="file" className="form-control" onChange={handleOnChange} />
                         </Row>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" type="submit">Upload File</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                        </form>
                    </Modal>
                                {/* <ExportCSVButton className="btn-primary" { ...props.csvProps }>Export CSV!!</ExportCSVButton> */}
                                </Col>                            
                            </Row>
                            {/* <EditRequirementmodal modalToggle={toggle}/> */}
                            <div class="table-responsive">
                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                defaultSorted={defaultSorted}
                                //rowEvents={rowEvent}
                                noDataIndication={ () => <NoDataIndication /> }
                                pagination={
                                    paginationFactory( 
                                        { 
                                            sizePerPage: 10, 
                                            sizePerPageRenderer: sizePerPageRenderer, 
                                            sizePerPageList: [
                                                { text: '10', value: 10, }, 
                                                { text: '20', value: 20 }, 
                                                { text: '50', value: 50 }, 
                                                { text: 'Todos', value: ( props.records ? props.records.length : 0 ) }
                                            ] 
                                        } 
                                    )
                                }
                                
                            /></div>
                        </React.Fragment>
                    )}
                  
                </ToolkitProvider>
    );
};

const ViewRequirement = (props) => {
    
    const dispatch = useDispatch(); 
   let records = useSelector((state) => state.Report.reqreport);
   console.log(records, 'requirement')
    useEffect(() => {
        dispatch(getReqReportList());

        // eslint-disable-next-line 
    }, []);
   
    const columns = [
        {
            dataField: 'jobcode',
            text: 'Job Code.',
        },
        {
            dataField:'client',
            text:"Client Name"
        },
        {
            dataField: 'skill',
            text: 'Skill',
        },
        {
            dataField: 'position',
            text: 'Position',
        },
        {
            dataField: 'location',
            text: 'Location',
        },
        {
            dataField: 'type',
            text: 'Type',
        },
        {
            dataField: 'status',
            text: 'Status',
        },
        {
            dataField: 'createdon',
            text: 'Created On',
        },
        {
            dataField: 'submission',
            text: 'Submission',
        },  
        {
            dataField: 'interview',
            text: 'Interview',
        },
        {
            dataField: 'offer',
            text: 'Offer',
        },
        {
            dataField: 'hire',
            text: 'Hire',
        },
        {
            dataField: 'bd',
            text: 'BD',
        },
    ]
        return (
        <React.Fragment>
            <Row>
                <Col>
                {/* <EditRequirementmodal/> */}
               
                    <TableWithSearch records={records} columns={columns} />
                </Col>
            </Row>
            
        </React.Fragment>
    );
};

export default ViewRequirement;


