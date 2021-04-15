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
import axios from 'axios';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import ShowRequirement from './ShowRequirement';
import ResumeUpload from './ResumeUpload';
import SetInterview from './SetInterview';
import SetOffer from './SetOffer';

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
                    <div  className="dropdown-item notify-item p1">
                    <ExportCSVButton className="btn-link" { ...props.csvProps }>Export PDF</ExportCSVButton>
                    </div>
                    <div  className="dropdown-item notify-item p1">
                    <ExportCSVButton className="btn-link" { ...props.csvProps }>Export EXCEL</ExportCSVButton>
                    </div>
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
            formatter:actionRequirement
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
        }
    ];
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
    function actionRequirement(cell, row) {     
        return <label>
               <button type="button" 
                               id="actionButton" title="Action"
                       onClick={() => {_validateFunction(row=[])}} 
                       className="btn btn-link text-secondary">
                            <FeatherIcon.Target />
               </button>
               
               </label> 
                      
   }  
//    Requirement details section
const goBackToRequirement=()=>{
    setshowrequrement(!showrequrement);
    
}
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
        </React.Fragment>
    );
};

export default ViewRequirement;


