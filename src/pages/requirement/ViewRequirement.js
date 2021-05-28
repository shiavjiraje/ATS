import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search,CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {UncontrolledDropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import * as FeatherIcon from 'react-feather';
import { getRequirementList, getRequirementModal, setSaveRequirement } from '../../redux/requirement/actions';
import EditRequirementmodal from './EditRequirementmodal';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import ShowRequirement from './ShowRequirement';
import ResumeUpload from './ResumeUpload';
import SetInterview from './SetInterview';
import SetOffer from './SetOffer';
import config from '../../helpers/baseurl';
//import axios from 'axios';

var urlpattern = config.baseUrl;
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
                    {/* <div  className="dropdown-item notify-item p1">
                    <ExportCSVButton className="btn-link" { ...props.csvProps }>Export PDF</ExportCSVButton>
                    </div>
                    <div  className="dropdown-item notify-item p1">
                    <ExportCSVButton className="btn-link" { ...props.csvProps }>Export EXCEL</ExportCSVButton>
                    </div> */}
                </DropdownMenu>
            </UncontrolledDropdown>
                                {/* <ExportCSVButton className="btn-primary" { ...props.csvProps }>Export CSV!!</ExportCSVButton> */}
                                </Col>                            
                            </Row>
                            {/* <EditRequirementmodal modalToggle={toggle}/> */}
                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                defaultSorted={defaultSorted}
                                wrapperClasses="table-responsive"
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
                                
                            />
                        </React.Fragment>
                    )}
                </ToolkitProvider>
    );
};

const ViewRequirement = (props) => {
    const [file, setFile] = useState(null);
    const dispatch = useDispatch(); 
   let records = useSelector((state) => state.Requirements.requirements);
   //console.log(records, 'requirement')
    useEffect(() => {
        dispatch(getRequirementList());

        // eslint-disable-next-line 
    }, []);
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

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
 
  const[showrequrement, setshowrequrement]=useState(true);
    const columns = [
        {
            dataField: 'jobcode',
            text: 'Job Code.',
        },
        {
            dataField:'jclientname',
            text:"Client Name"
        },
        {
            dataField: 'jskill',
            text: 'Skill',
            formatter: (cellContent, row) => {
                //const id = row.jid;
                return (
                  <button
                  className="btn btn-link text-secondary p-0"
                    onClick={() => showRequrementDetails(row)}
                    title="Edit"
                  >
                   {row.jskill}
                  </button>
                );
              },
        },
        {
            dataField: 'jposition',
            text: 'Position',
        },
        {
            dataField: 'jlocation',
            text: 'Location',
        },
        {
            dataField: 'jendclient',
            text: 'End Client',
        },
        {
            dataField: 'jstatus',
            text: 'Status',
        },
        {
            dataField: 'jcreatedon',
            text: 'Created On',
        },
        {
            dataField: 'jassignuser',
            text: 'Assign To',
            headerStyle: (colum, colIndex) => {
                return { width: '200px'};
              }
        },  
        {
            dataField: 'actions',
            text: 'Action',
            formatter: (cellContent, row) => {
                //const id = row.jid;
                return (
                  <button
                  className="btn btn-link text-secondary p-0"
                    onClick={() => showActionStatus(row)}
                    title="Edit"
                  >
                   Action
                  </button>
                );
              },
        },
        {
            dataField: 'summary',
            text: 'Summary',
            formatter: (cellContent, row) => {
                //const id = row.jid;
                return (
                  <button
                  className="btn btn-link text-secondary p-0"
                    onClick={() => setsummarydeatailsmodal(row)}
                    title="Edit"
                  >
                   Summary
                  </button>
                );
              },
        },
        
        {
            dataField: 'resume',
            text: 'Resume',
            formatter: (cellContent, row) => {
                //const id = row.jid;
                return (
                  <button
                  className="btn btn-link text-secondary p-0"
                    onClick={() => showResumeUploadtDetails(row)}
                    title="Edit"
                  >
                   Resume
                  </button>
                );
              },
        },
        {
            dataField: 'interview',
            text: 'Interview',
            formatter: (cellContent, row) => {
                //const id = row.jid;
                return (
                  <button
                  className="btn btn-link text-secondary p-0"
                    onClick={() => showSetInterviewDetails(row)}
                    title="Edit"
                  >
                   Interview
                  </button>
                );
              },
        },
        {
            dataField: 'offer',
            text: 'Offer',
            formatter: (cellContent, row) => {
                //const id = row.jid;
                return (
                  <button
                  className="btn btn-link text-secondary p-0"
                    onClick={() => showSetOfferDetails(row)}
                    title="Edit"
                  >
                   Offer
                  </button>
                );
              },
              
        },
        {
          dataField: 'edit',
          text: 'Edit',
          formatter: (cellContent, row) => {
              //const id = row.jid;
              return (
                <button
                className="btn btn-link text-secondary"
                  onClick={() => _validateFunction(row)}
                  title="Edit"
                >
                 <FeatherIcon.Edit />
                </button>
              );
            },
          //formatter:editRequirement
      },

    ];
     //Action modal start///
    const [modal2, setModal2] = useState(false);
    const  [status, setstatus] = useState('');
    const [jid, setjid]=useState('');
    const toggle2 = () => setModal2(!modal2);
    function showActionStatus(row, id) {
        var newjid =row.jid;
        setjid(newjid);
        toggle2();
    }
    const {
        // buttonLabel,
         className
       } = props;
    const handleSubmitAction = (e) => {
        e.preventDefault();
      //var getcfid=formtDetails.cfid;
       var data = {
        status: status,
        jid:jid
      };
        
        var config = {
          method: 'PUT',
          url: `${urlpattern}UpdateRequirementStatus?jid=${jid}&status=${status}`,          
          data : data
        };
        console.log(data);
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          getRequirementList();
          //swal("Status Updated Successful", "success");
          toggle2();
        })
        .catch(function (error) {
          console.log(error);
        });
      };

    //Action modal end///
    //Summary modal start///  
    const [modal3, setModal3] = useState(false);
    //const [summaryjid, setsummaryjid]=useState();
    const toggle3 = () => setModal3(!modal3);
    const [summarydetails, setsummarydetails]=useState([]);
    function setsummarydeatailsmodal(row, id) {
       // var newjid =row.jid;
        
       // setsummaryjid(row.jid);
              
        toggle3();
        var config = {
            method: 'GET',
            url: `${urlpattern}ViewRequirementSummary?jid=${row.jid}`,   
          };
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data.Data));
           var newsumdeta= response.data.Data;
           setsummarydetails(newsumdeta);
            //swal("Status Updated Successful", "success");
            //toggle2();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    // const handleSubmitSummry = (e) => {   
    //     console.log(summaryjid, "findal summary");  
       
    //   };
      //Summary modal end
    function _validateFunction(row , id) {    
       // console.log("activity id :",(id));
        // dispatch(getRequirementModal((row)));

        dispatch( setSaveRequirement( row) );

            dispatch( getRequirementModal() );
    }
    const[viewSingleRequirement, setviewSingleRequirement]=useState([]);
    function showRequrementDetails(row , id) {  
        setshowrequrement(!showrequrement);
        var viewrequrementdetails =row;
       // console.log(row, "showRequrementDetails");
        setviewSingleRequirement(viewrequrementdetails);
        setActiveTab('1');
     }
     function showResumeUploadtDetails(row , id) {  
        setshowrequrement(!showrequrement);
        var viewrequrementdetails =row;
       // console.log(row, "showRequrementDetails");
        setviewSingleRequirement(viewrequrementdetails);
        setActiveTab('2');
     }
     function showSetInterviewDetails(row , id) {  
        setshowrequrement(!showrequrement);
        var viewrequrementdetails =row;
       // console.log(row, "showRequrementDetails");
        setviewSingleRequirement(viewrequrementdetails);
        setActiveTab('3');
     }
     function showSetOfferDetails(row , id) {  
        setshowrequrement(!showrequrement);
        var viewrequrementdetails =row;
       // console.log(row, "showRequrementDetails");
        setviewSingleRequirement(viewrequrementdetails);
        setActiveTab('4');
     }
   
//    Requirement details section
const goBackToRequirement=()=>{
    setshowrequrement(!showrequrement);
    
}
var setsumrymodal =summarydetails || [];
console.log(setsumrymodal, "modal summary data");
   return (
        <React.Fragment>
            {showrequrement ?
            <Row>
                <Col>
                <EditRequirementmodal/>
                <form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={3}> <input type="file" className="form-control" onChange={handleOnChange} /></Col>
                    <Col lg={3}><button className="btn btn-primary" type="submit">Upload File</button></Col>
                 </Row>
                </form>
                    <TableWithSearch records={records} columns={columns} />
                </Col>
            </Row>
            :
            <Row>
            <div className="col-sm-12">
            <Nav tabs className="second-level-tab nav nav-tabs justify-content-start">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            
          </NavLink>
        </NavItem>
        <NavItem className="upload-li">
          <NavLink
            className={ classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Upload Resume
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Set Interview
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Offer
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="req-tab-content" activeTab={activeTab}>
          
        <TabPane tabId="1">
            <Row>
                <div className="header-info">Requirement Details</div>
            </Row>
            <Col sm="12">
              <ShowRequirement viewSingleRequirement={viewSingleRequirement} goBackToRequirement={goBackToRequirement}/>
            </Col>
        </TabPane>
        <TabPane tabId="2">
            <Col sm="12">
             <ResumeUpload viewSingleRequirement={viewSingleRequirement} goBackToRequirement={goBackToRequirement}/>
            </Col>
        </TabPane>
        <TabPane tabId="3">
            <Col sm="12">
             <SetInterview viewSingleRequirement={viewSingleRequirement} goBackToRequirement={goBackToRequirement}/>
            </Col>
        </TabPane>
        <TabPane tabId="4">
            <Col sm="12">
              <SetOffer viewSingleRequirement={viewSingleRequirement} goBackToRequirement={goBackToRequirement}/>
            </Col>
        </TabPane>
      </TabContent>
    </div>
            </Row>
}
<Modal isOpen={modal2} toggle={toggle2} className={className}>
            <form onSubmit={handleSubmitAction}>
        <ModalHeader toggle={toggle2}>Change Status</ModalHeader>
        <ModalBody>
        <Row>
                       <Col lg={12}>
                     <label>Status</label>
                           <select className="form-control"
                            onChange={(e) => {
                                setstatus(e.target.value);
                              }}
                              name="status">
                               <option value="">Select</option>
                               <option value="Active">Active</option>
                               <option value="Deactive">Deactive</option>
                               <option value="Hold">Hold</option>
                               <option value="Delete">Delete</option>
                               <option value="Close">Close</option>
                           </select>
                       </Col>
                       </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">Save</Button>{' '}
          <Button color="primary" onClick={toggle2}>Cancel</Button>
        </ModalFooter>
        </form>
      </Modal>
      <Modal isOpen={modal3} toggle={toggle3} className={className}>
            <form onSubmit={handleSubmitAction}>
        {/* <ModalHeader toggle={toggle3}>Change Status</ModalHeader> */}
        <ModalBody>
        <Row>
            <Col lg={12}>
                     <label>Submission : {summarydetails.submission}</label><br/>
                     <label>Interview : {summarydetails.interview}</label><br/>
                     <label>Offer : {summarydetails.offer}</label><br/>
                     <label>Start : {summarydetails.start}</label><br/>
                     <label>BD : {summarydetails.bd}</label><br/>
             </Col>
        </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle3}>Close</Button>
        </ModalFooter>
        </form>
      </Modal>
        </React.Fragment>
    );
};

export default ViewRequirement;


