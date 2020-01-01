import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: []
        };
    }
    componentWillMount() {
        this.callApiService();
    }
    callApiService() {
        fetch('http://localhost:7800/nem/involved-parties/v1/{InvolvedPartyID}')
            .then(res => res.json())
            .then((data) => {
                this.setState({ account: data })
                // console.log(data)
            })
    }
    render() {
        return (
             <div className="abc">
                <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr id="ROW1">
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                    </Table>
                </div >
                {this.state.account && this.state.account.map((item) => (
                    <div>
                        <Table striped bordered hover size="sm">
                            <tbody>
                                <tr id="ROW2">
                                    <td>{item.id}</td>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <Button color="success" size="sm">Edit</Button>
                                        <Button color="danger" size="sm">Delete</Button>
                                    </td>
                                </tr>

                            </tbody>

                        </Table>
                    </div>
                ))}
            </div>

        )
    }

}
export default Account;