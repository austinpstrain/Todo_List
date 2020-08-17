import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css'


export class ConsentItem extends Component {
    getStyle = () => {
        if(this.props.consent.checked){
            return{
                color: 'green',
                fontWeight: 'bold'
            }
        }
        else{
            return{
                textDecoration: 'none'
            }
        }
    }

    markConsenting = (e) =>{

    }

    render() {
        const { id, title } = this.props.consent;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markConsenting.bind(this, id)}/>
                    {'  '}
                    { title }
                    <button onClick={this.props.delete.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

// Prop Types
ConsentItem.propTypes = {
    consent: PropTypes.object.isRequired
  }

export default ConsentItem
