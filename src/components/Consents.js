import React, {Component} from 'react';
import ConsentItem from './ConsentItem';
import PropTypes from 'prop-types';

class Consents extends Component {

  render(){
    return this.props.consents.map((consent) => (
    <ConsentItem key={consent.id} consent={consent} markConsenting={this.props.markConsenting} delete={this.props.delete}/>
    ));
  }
}

// Prop Types
Consents.propTypes = {
  consents: PropTypes.array.isRequired
}

export default Consents;