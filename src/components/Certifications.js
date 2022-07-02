import React from 'react';
import '../styles/Info.css';
import upIcon from '../icons/up.svg';
import downIcon from '../icons/down.svg';
import deleteIcon from '../icons/delete.svg';
import { Direction } from './Info';
import Certification from '../modules/Certification.js';
import { v4 as uuidv4 } from 'uuid';
import { getIndexInNodes, moveTo } from '../modules/array-functions';

class Certifications extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            certification: "",
            expiration: ""
        }
    }

    render() {

        const certifications = this.props.resume.certifications;
        const moveSection    = this.props.moveSection;

        return (
            <div className='section-wrapper'>
                <div className='section-header'>
                    <p className='section-title'>Certifications</p>
                    <div>
                        <img alt="Move section up" src={upIcon} className="icon" onClick={(e) => moveSection(e, Direction.Up)}></img>
                        <img alt="Move section down" src={downIcon} className="icon" onClick={(e) => moveSection(e, Direction.Down)}></img>
                    </div>
                </div>
                <div className='input-button-wrapper'>
                    <div className='multiple-inputs'>
                        <input value={this.state.certification} onChange={(e) => this.certificationChange(e)} type="text" placeholder='Certification' className='section-input'></input>
                        <input value={this.state.expiration} onChange={(e) => this.expirationChange(e)}type="text" placeholder='Expiration Date' className='section-input'></input>
                    </div>
                    <button onClick={() => this.addCertification()}>Add</button>
                </div>
                <div className='list-wrapper'>
                    {certifications.map(cert => this.getCertElement(cert))}
                </div>
            </div>
        )
    }

    getCertElement(cert) {
        return(
            <div key={uuidv4()} className='list-item-wrapper'>
                <div>
                    <p>{`${cert.name}`}</p>
                    <p>{`Expiration: ${cert.expiration}`}</p>
                </div>
                <div className='list-item-buttons'>
                <img alt="Move certification up" src={upIcon} className="icon" onClick={(e) => this.moveCert(e, Direction.Up)}></img>
                    <img alt="Move certification down" src={downIcon} className="icon" onClick={(e) => this.moveCert(e, Direction.Down)}></img>
                    <img alt="Delete certification" src={deleteIcon} className="icon" onClick={(e) => this.removeCert(e)}></img>
                </div>
            </div>
        )
    }

    certificationChange(event) {
        this.setState({
            certification: event.target.value
        })
    }

    expirationChange(event) {
        this.setState({
            expiration: event.target.value
        })
    }

    addCertification() {
        if(this.state.certification !== "" && this.state.expiration !== "") {
            let cert = new Certification(this.state.certification, this.state.expiration);
            let copy = this.props.resume;
            copy.certifications.push(cert);
            this.props.updateResume(copy);
        }
    }

    getIndex(event) {
        let target  = event.target.parentElement.parentElement;
        let parent  = event.target.parentElement.parentElement.parentElement;
        return getIndexInNodes(target, parent);
    }

    moveCert(event, direction) {
        let index   = this.getIndex(event)
        let copy    = this.props.resume; 
        copy.certifications = moveTo(index, index + direction, copy.certifications);
        this.props.updateResume(copy);
    }

    removeCert(event) {
        let index  = this.getIndex(event)        
        let copy   = this.props.resume;
        copy.certifications.splice(index, 1);
        this.props.updateResume(copy);
    }
}

export default Certifications;