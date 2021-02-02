import React from 'react';
import { Row, Col, Card, CardBody, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import AddUserModal from './AddUserModal';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

import PageTitle from '../../components/PageTitle';
import UserList from './UserList';
import { getUsersRequest } from "../../redux/user/actions";
import AssignUserRoleModal from './AssignUserRoleModal';
import ViewRoleModal from './ViewRoleModal';
const records = [
    
    {
        id: 1,
        name:"User",
        company:"Arche",
        designation:"Developer",
        location:'Mumbai',
        role:'User',
        email:'Vinodskadam92@gmail.com'
    },
    {
        id: 2,
        name:"Admin",
        company:"Arche",
        designation:"Designer",
        location:'Gujrat',
        role:'Admin',
        email:'Vinodskadam92@gmail.com'
    },
    {
        id: 3,
        name:"User",
        company:"Arche",
        designation:"Developer",
        location:'Mumbai',
        role:'User',
        email:'Vinodskadam92@gmail.com'
    },
    {
        id: 4,
        name:"Manager",
        company:"Arche",
        designation:"Project Manager",
        location:'Gujrat',
        role:'Manger',
        email:'Vinodskadam92@gmail.com'
    },
    {
        id: 5,
        name:"User",
        company:"Arche",
        designation:"Developer",
        location:'Mumbai',
        role:'User',
        email:'Vinodskadam92@gmail.com'
    },
    {
        id: 6,
        name:"Admin",
        company:"Arche",
        designation:"Designer",
        location:'Gujrat',
        role:'Admin',
        email:'Vinodskadam92@gmail.com'
    },
    {
        id: 7,
        name:"User",
        company:"Arche",
        designation:"Developer",
        location:'Mumbai',
        role:'User',
        email:'Vinodskadam92@gmail.com'
    },
    {
        id: 8,
        name:"Manager",
        company:"Arche",
        designation:"Project Manager",
        location:'Gujrat',
        role:'Manger',
        email:'Vinodskadam92@gmail.com'
    },
    {
        id: 9,
        name:"User",
        company:"Arche",
        designation:"Developer",
        location:'Mumbai',
        role:'User',
        email:'Vinodskadam92@gmail.com'
    },
    {
        id: 10,
        name:"Admin",
        company:"Arche",
        designation:"Designer",
        location:'Gujrat',
        role:'Admin',
        email:'Vinodskadam92@gmail.com'
    },
    {
        id: 11,
        name:"User",
        company:"Arche",
        designation:"Developer",
        location:'Mumbai',
        role:'User',
        email:'Vinodskadam92@gmail.com'
    },
    {
        id: 12,
        name:"Manager",
        company:"Arche",
        designation:"Project Manager",
        location:'Gujrat',
        role:'Manger',
        email:'Vinodskadam92@gmail.com'
    },
];

const columns = [
    {
        dataField: 'id',
        text: 'No.',
        sort: true,
    },
    {
        dataField: 'name',
        text: 'Name',
        sort: true,
    },
    {
        dataField: 'company',
        text: 'Company',
    },
    {
        dataField: 'designation',
        text: 'Designation',
    },
    {
        dataField: 'location',
        text: 'Location',
    },
    {
        dataField: 'role',
        text: 'Role',
    },
    {
        dataField: 'email',
        text: 'Email',
    },
];

const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];

const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    
    <React.Fragment>
        <label className="d-inline mr-1">Show To</label>
        <Input type="select" name="select" id="no-entries" className="custom-select custom-select-sm d-inline col-2"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>
            })}
        </Input>
        <label className="d-inline ml-1">Records</label>
    </React.Fragment>
);


class User extends React.Component {
    constructor(props){
        super(props);
       
        this.state={
            sucuresalesArray:[]
        }
      }
      handleSubmit=({firstName, lastName})=>{
        this.props.createUsersRequest({
          firstName,
          lastName          
        });
      }
      componentWillMount=()=>{
        this.props.getUsersRequest();
      }
    render(){
        const { SearchBar } = Search;
        const users = this.props.items;
        //var  items = [];
        console.log('users===',users);
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Master/User', path: 'Master/User', active: true },
                        ]}
                        title={'User'}
                    />
                </Col>
            </Row>
                <UserList users={users}/>        
            <Card>
            <CardBody>
                <div className="row">
                <h4 className="header-title mt-0 mb-1 col-sm-6"><i className="uil uil-user"></i> View User</h4>
                <p className="sub-header col-sm-6 text-right"><AddUserModal /><AssignUserRoleModal/><ViewRoleModal/></p>
                </div>
                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={records}
                    columns={columns}
                    search>
                    {props => (
                        <React.Fragment>
                            <Row>
                                <Col className="text-right">
                                    <SearchBar {...props.searchProps} />
                                </Col>                                
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={true}
                                defaultSorted={defaultSorted}
                                pagination={paginationFactory({ sizePerPage: 5, sizePerPageRenderer: sizePerPageRenderer, sizePerPageList: [{ text: '5', value: 5, }, { text: '10', value: 10 }, { text: '50', value: 50 }, { text: 'Todos', value: records.length }] })}
                                
                                wrapperClasses="table-responsive"
                            />
                        </React.Fragment>
                    )}
                </ToolkitProvider>
            </CardBody>
        </Card>
        </React.Fragment>
    );
}
};

const mapStateToProps = (state, ownProps) => ({
    items:state.User.items
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getUsersRequest
    },dispatch)}

//export default connect(({items}) => ({items}),{
  //  getUsersRequest,
    //createUsersRequest
  //}) (User);

  export default connect(mapStateToProps,mapDispatchToProps)(User)