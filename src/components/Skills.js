import React from 'react';
import '../styles/Info.css'
import { v4 as uuidv4 } from 'uuid';
import upIcon from '../icons/up.svg';
import downIcon from '../icons/down.svg';
import deleteIcon from '../icons/delete.svg';
import {moveTo, getIndexInNodes} from '../modules/array-functions.js';
import {Direction} from './Info';

class Skills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }

        this.updateValue = this.updateValue.bind(this);
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
                <div className='section-header'>
                    <p className='section-title'>Skills</p>
                    <div>
                        <img alt="Move section up" src={upIcon} className="icon" onClick={(e) => moveSection(e, Direction.Up)}></img>
                        <img alt="Move section down" src={downIcon} className="icon" onClick={(e) => moveSection(e, Direction.Down)}></img>
                    </div>
                </div>
                <div className='input-button-wrapper'>
                    <input value={this.state.value} onChange={(e) => this.updateValue(e )} id='skill-name' type="text" placeholder='Skill' className='section-input'></input>
                    <button onClick={(e) => this.addSkill(e)}>Add</button>
                </div>
                <div className='list-wrapper'>
                    {skills.map(skill => this.getSkillDiv(skill))}
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

    getSkillDiv(skill) {
        return (
            <div key={uuidv4()} className='list-item-wrapper'>
                <p>{skill}</p>
                <div className='list-item-buttons'>
                    <img alt="Move skill up" src={upIcon} className="icon" onClick={(e) => this.moveSkill(e, Direction.Up)}></img>
                    <img alt="Move skill down" src={downIcon} className="icon" onClick={(e) => this.moveSkill(e, Direction.Down)}></img>
                    <img alt="Delete skill" src={deleteIcon} className="icon" onClick={(e) => this.removeSkill(e)}></img>
                </div>
            </div>
        )
    }

    getIndex(event) {
        let target  = event.target.parentElement.parentElement;
        let parent  = target.parentElement;
        return getIndexInNodes(target, parent);
    }

    moveSkill(event, direction) {
        let index   = this.getIndex(event)
        let copy    = this.props.resume; 
        copy.skills = moveTo(index, index + direction, copy.skills);
        this.props.updateResume(copy);
    }

    removeSkill(event) {
        let index  = this.getIndex(event)        
        let copy   = this.props.resume;
        copy.skills.splice(index, 1);
        this.props.updateResume(copy);
    }
}

export default Skills;