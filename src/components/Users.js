import React, { Component } from 'react';
import User from './User';

import classes from './Users.module.css';


class Users extends Component {

  constructor() {
    super();
    this.state = { //state is always an object in class based components (we have one state and we group all all states in this object)
      showUsers: true
    }
  }

  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers} //only the state that is changed is modified and others are kept as it is
    })
  }

  render() {

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
      <button onClick={this.toggleUsersHandler.bind(this)}>
        {this.state.showUsers ? 'Hide' : 'Show'} Users
      </button>
      {this.state.showUsers && usersList}
    </div>
    )
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

  

//   return (
    
//   );
// };

export default Users;
