import React from "react";
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const UserList =({users}) => {
    console.log('users length==',users);
    return(
        <ListGroup> 
        {users.map(user => {
                return(
                <ListGroupItem key={user.sucursalId}> 
                    <section style={{display:"flex"}}>
                        <div style={{flexGrow:"1", margin:"0px auto"}}>
                            {user.sucursalNombre} 
                            <input type="checkbox" checked={user.activo} style={{marginLeft:"20px"}}/>
                        </div>
                        <div>
                            <Button outline color="danger">Delete</Button>
                        </div>
                    </section>
                </ListGroupItem>
                );
        })}   
        </ListGroup>
    )
}
export default UserList;