import React         from 'react';
import { moveTo }    from '../modules/array-functions';
import Education     from '../modules/Education.js';
import SectionHeader from './SectionHeader';
import ListItem      from './ListItem';
import '../styles/Info.css';

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

        const education   = this.props.resume.education;
        const moveSection = this.props.moveSection;
        const index       = this.props.index;

        return (
            <div className='section-wrapper'>
                <SectionHeader title="Education" moveSection={moveSection} index={index}/>
                <div className='input-button-wrapper'>
                    <div className='multiple-inputs'>
                        <input value={this.state.degree} onChange={(e) => this.degreeChanged(e)} type="text" placeholder='Degree' className='section-input'></input>
                        <input value={this.state.school} onChange={(e) => this.schoolChanged(e)}type="text" placeholder='School' className='section-input'></input>
                        <input value={this.state.date} onChange={(e) => this.dateChanged(e)}type="text" placeholder='Date' className='section-input'></input>
                        <button className='add-button' onClick={() => this.addEducation()}>Add</button>
                    </div>
                </div>
                <div className='list-wrapper'>
                    {education.map((edu, index) => this.getListItem(edu, index))}
                </div>
            </div>
        )
    }

    getListItem(edu, index) {
        return <ListItem 
            content={
                <div>
                    <p>{edu.degree}</p>
                    <p>{edu.school}</p>
                    <p>{edu.date}</p>
                </div>
            }
            moveItem   = {this.moveItem}
            deleteItem = {this.deleteItem}
            index      = {index}
        />
    }

    moveItem(index, direction) {
        let copy    = this.props.resume; 
        copy.education = moveTo(index, index + direction, copy.education);
        this.props.updateResume(copy);
    }

    deleteItem(index) {   
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