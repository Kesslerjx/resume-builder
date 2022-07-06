import React from 'react';
import '../styles/Info.css';
import Certification from '../modules/Certification.js';
import { getIndexInNodes, moveTo } from '../modules/array-functions';
import SectionHeader from './SectionHeader';
import ListItem from './ListItem';

class Certifications extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            certification: "",
            expiration: ""
        }

        this.moveItem   = this.moveItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    render() {

        const certifications = this.props.resume.certifications;
        const moveSection    = this.props.moveSection;

        return (
            <div className='section-wrapper'>
                <SectionHeader title="Certifications" moveSection={moveSection} />
                <div className='input-button-wrapper'>
                    <div className='multiple-inputs'>
                        <input value={this.state.certification} onChange={(e) => this.certificationChange(e)} type="text" placeholder='Certification' className='section-input'></input>
                        <input value={this.state.expiration} onChange={(e) => this.expirationChange(e)}type="text" placeholder='Expiration Date' className='section-input'></input>
                        <button className='add-button' onClick={() => this.addCertification()}>Add</button>
                    </div>
                </div>
                <div className='list-wrapper'>
                    {certifications.map(cert => this.getListItem(cert))}
                </div>
            </div>
        )
    }

    getListItem(cert) {
        return <ListItem 
            content={
                <div>
                    <p>{`${cert.name}`}</p>
                    <p>{`Expiration: ${cert.expiration}`}</p>
                </div>
            }
            moveItem={this.moveItem}
            deleteItem={this.deleteItem}
        />
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

    moveItem(event, direction) {
        let index   = this.getIndex(event)
        let copy    = this.props.resume; 
        copy.certifications = moveTo(index, index + direction, copy.certifications);
        this.props.updateResume(copy);
    }

    deleteItem(event) {
        let index  = this.getIndex(event)        
        let copy   = this.props.resume;
        copy.certifications.splice(index, 1);
        this.props.updateResume(copy);
    }
}

export default Certifications;