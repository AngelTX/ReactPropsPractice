import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    return (
     <div>
        <div>{this.props.name}</div>
        <div>{this.props.lastname}</div>
        <div>{this.props.age}</div>
     </div>
    );
  }
}

User.propTypes = {
    // name:PropTypes.string,
    lastname:PropTypes.string,
    age:PropTypes.number,
    // hobbies:PropTypes.array,
    spanish:PropTypes.bool,
    message:PropTypes.func,
    car:PropTypes.object,

    // name:PropTypes.oneOf(["Francis","James"])

    name:PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),

    hobbies:PropTypes.arrayOf(PropTypes.string),
    // mother:PropTypes.string.isRequired

    mother:function(props, propName, componentName){
      if(props[propName] !== 'Jane'){
        return new Error('The name ${props[propName]} is not Jane')
      }
    }
}

export default User;
