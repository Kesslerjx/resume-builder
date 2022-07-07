import React         from 'react';
import {moveTo }     from '../modules/array-functions.js';
import SectionHeader from './SectionHeader';
import ListItem      from './ListItem';
import '../styles/Info.css'


class Skills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }

        this.updateValue = this.updateValue.bind(this);
        this.moveItem    = this.moveItem.bind(this);
        this.deleteItem  = this.deleteItem.bind(this);
    }

    updateValue(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {

        const skills = this.props.resume.skills;
        const moveSection = this.props.moveSection;

        return (
            <div className='section-wrapper'>
                <SectionHeader title="Skills" moveSection={moveSection} />
                <div className='input-button-wrapper'>
                    <input value={this.state.value} onChange={(e) => this.updateValue(e )} id='skill-name' type="text" placeholder='Skill' className='section-input'></input>
                    <button className='add-button' onClick={(e) => this.addSkill(e)}>Add</button>
                </div>
                <div className='list-wrapper'>
                    {skills.map( (skill, index) => this.getListItem(skill, index))}
                </div>
            </div>
        )
    }

    addSkill() {
        if(this.state.value !== "") {
            let copy  = this.props.resume;
            copy.skills = [...this.props.resume.skills, this.state.value];
            this.props.updateResume(copy);
        }
    }

    getListItem(skill, index) {
        return <ListItem 
            content={
                <div>
                    <p>{skill}</p>
                </div>
            }
            moveItem   = {this.moveItem}
            deleteItem = {this.deleteItem}
            index      = {index}
        />
    }

    moveItem(index, direction) {
        let copy    = this.props.resume; 
        copy.skills = moveTo(index, index + direction, copy.skills);
        this.props.updateResume(copy);
    }

    deleteItem(event) {
        let index  = this.getIndex(event)        
        let copy   = this.props.resume;
        copy.skills.splice(index, 1);
        this.props.updateResume(copy);
    }
}

export default Skills;