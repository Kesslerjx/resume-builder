import React from 'react';
import '../styles/Info.css'
import {moveTo, getIndexInNodes} from '../modules/array-functions.js';
import SectionHeader from './SectionHeader';
import ListItem from './ListItem';


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
                    {skills.map(skill => this.getListItem(skill))}
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

    getListItem(skill) {
        return <ListItem 
            content={
                <div>
                    <p>{skill}</p>
                </div>
            }
            moveItem={this.moveItem}
            deleteItem={this.deleteItem}
        />
    }

    getIndex(event) {
        let target  = event.target.parentElement.parentElement;
        let parent  = target.parentElement;
        return getIndexInNodes(target, parent);
    }

    moveItem(event, direction) {
        let index   = this.getIndex(event)
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