import React from 'react';
import '../styles/Info.css';
import { getIndexInNodes, moveTo } from '../modules/array-functions';
import Education from '../modules/Education.js';
import SectionHeader from './SectionHeader';
import ListItem from './ListItem';

class Educations extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            degree: "",
            school: "",
            date: ""
        }

        this.moveItem = this.moveItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    render() {

        const education = this.props.resume.education;
        const moveSection    = this.props.moveSection;

        return (
            <div className='section-wrapper'>
                <SectionHeader title="Education" moveSection={moveSection} />
                <div className='input-button-wrapper'>
                    <div className='multiple-inputs'>
                        <input value={this.state.degree} onChange={(e) => this.degreeChanged(e)} type="text" placeholder='Degree' className='section-input'></input>
                        <input value={this.state.school} onChange={(e) => this.schoolChanged(e)}type="text" placeholder='School' className='section-input'></input>
                        <input value={this.state.date} onChange={(e) => this.dateChanged(e)}type="text" placeholder='Date' className='section-input'></input>
                        <button className='add-button' onClick={() => this.addEducation()}>Add</button>
                    </div>
                </div>
                <div className='list-wrapper'>
                    {education.map(edu => this.getListItem(edu))}
                </div>
            </div>
        )
    }

    getListItem(edu) {
        return <ListItem 
            content={
                <div>
                    <p>{edu.degree}</p>
                    <p>{edu.school}</p>
                    <p>{edu.date}</p>
                </div>
            }
            moveItem={this.moveItem}
            deleteItem={this.deleteItem}
        />
    }

    getIndex(event) {
        let target  = event.target.parentElement.parentElement;
        let parent  = event.target.parentElement.parentElement.parentElement;
        return getIndexInNodes(target, parent);
    }

    moveItem(event, direction) {
        let index   = this.getIndex(event)
        let copy    = this.props.resume; 
        copy.education = moveTo(index, index + direction, copy.education);
        this.props.updateResume(copy);
    }

    deleteItem(event) {
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