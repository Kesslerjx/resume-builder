import React from 'react';
import '../styles/Info.css';
import upIcon from '../icons/up.svg';
import downIcon from '../icons/down.svg';
import deleteIcon from '../icons/delete.svg';
import { Direction } from './Info';
import { v4 as uuidv4 } from 'uuid';
import { getIndexInNodes, moveTo } from '../modules/array-functions';
import Education from '../modules/Education.js';

class Educations extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            degree: "",
            school: "",
            date: ""
        }
    }
    render() {

        const education = this.props.resume.education;
        const moveSection    = this.props.moveSection;

        return (
            <div className='section-wrapper'>
                <div className='section-header'>
                    <p className='section-title'>Education</p>
                    <div>
                        <img alt="Move section up" src={upIcon} className="icon" onClick={(e) => moveSection(e, Direction.Up)}></img>
                        <img alt="Move section down" src={downIcon} className="icon" onClick={(e) => moveSection(e, Direction.Down)}></img>
                    </div>
                </div>
                <div className='input-button-wrapper'>
                    <div className='multiple-inputs'>
                        <input value={this.state.degree} onChange={(e) => this.degreeChanged(e)} type="text" placeholder='Degree' className='section-input'></input>
                        <input value={this.state.school} onChange={(e) => this.schoolChanged(e)}type="text" placeholder='School' className='section-input'></input>
                        <input value={this.state.date} onChange={(e) => this.dateChanged(e)}type="text" placeholder='Date' className='section-input'></input>
                        <button className='add-button' onClick={() => this.addEducation()}>Add</button>
                    </div>
                </div>
                <div className='list-wrapper'>
                    {education.map(edu => this.getElement(edu))}
                </div>
            </div>
        )
    }

    getElement(edu) {
        return (
            <div key={uuidv4()} className='list-item-wrapper'>
                <div>
                    <p>{edu.degree}</p>
                    <p>{edu.school}</p>
                    <p>{edu.date}</p>
                </div>
                <div className='list-item-buttons'>
                    <img alt="Move education up" src={upIcon} className="icon" onClick={(e) => this.moveEdu(e, Direction.Up)}></img>
                    <img alt="Move education down" src={downIcon} className="icon" onClick={(e) => this.moveEdu(e, Direction.Down)}></img>
                    <img alt="Delete education" src={deleteIcon} className="icon" onClick={(e) => this.removeEdu(e)}></img>
                </div>
            </div>
        )
    }

    getIndex(event) {
        let target  = event.target.parentElement.parentElement;
        let parent  = event.target.parentElement.parentElement.parentElement;
        return getIndexInNodes(target, parent);
    }

    moveEdu(event, direction) {
        let index   = this.getIndex(event)
        let copy    = this.props.resume; 
        copy.education = moveTo(index, index + direction, copy.education);
        this.props.updateResume(copy);
    }

    removeEdu(event) {
        let index  = this.getIndex(event)        
        let copy   = this.props.resume;
        copy.education.splice(index, 1);
        this.props.updateResume(copy);
    }

    degreeChanged(event) {
        this.setState({
            degree: event.target.value
        })
    }

    schoolChanged(event) {
        this.setState({
            school: event.target.value
        }) 
    }

    dateChanged(event) {
        this.setState({
            date: event.target.value
        })  
    }

    addEducation() {
        if(this.state.degree !== "" && this.state.school !== "" && this.state.date !== "") {
            let edu  = new Education(this.state.degree, this.state.school, this.state.date);
            let copy = this.props.resume;
            copy.education.push(edu);
            this.props.updateResume(copy);        
        }
    }
}

export default Educations;