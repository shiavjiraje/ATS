import React, { useEffect } from 'react';
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

    const dispatch = useDispatch(); 
   let records = useSelector((state) => state.Requirements.requirements);
   //console.log(records, 'requirement')
    useEffect(() => {
        dispatch(getRequirementList());

        // eslint-disable-next-line 
    }, []);

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
        }
    ];
    function _validateFunction(row , id) {    
       // console.log("activity id :",(id));
        // dispatch(getRequirementModal((row)));

        dispatch( setSaveRequirement( row) );

            dispatch( getRequirementModal() );
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
                      
   }   return (
        <React.Fragment>
            <Row>
                <Col>
                <EditRequirementmodal/>
                    <TableWithSearch records={records} columns={columns} />
                </Col>
            </Row>
            
        </React.Fragment>
    );
};

export default ViewRequirement;


