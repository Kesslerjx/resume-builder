import React from 'react';
import '../styles/Info.css'
import '../styles/Skills.css'
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

    updateValue(newValue) {
        this.setState({
            value: newValue
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
                    <input value={this.state.value} onChange={(e) => this.updateValue(e.target.value)} id='skill-name' type="text" placeholder='Skill' className='section-input'></input>
                    <button onClick={(e) => this.addSkill(e)}>Add</button>
                </div>
                <div className='skills-wrapper'>
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
            this.updateValue("");
        }
    }

    getSkillDiv(skill) {
        return (
            <div key={uuidv4()} className='skill-wrapper'>
                <p>{skill}</p>
                <div>
                    <img alt="Move skill up" src={upIcon} className="icon" onClick={(e) => this.moveSkill(e, Direction.Up)}></img>
                    <img alt="Move skill down" src={downIcon} className="icon" onClick={(e) => this.moveSkill(e, Direction.Down)}></img>
                    <img alt="Delete skill" src={deleteIcon} className="icon" onClick={(e) => this.removeSkill(e)}></img>
                </div>
            </div>
        )
    }

    moveSkill(event, direction) {
        let index   = getIndexInNodes(event.target.parentElement.parentElement, document.querySelector('.skills-wrapper'));
        let copy    = this.props.resume; 
        copy.skills = moveTo(index, index + direction, copy.skills);
        this.props.updateResume(copy);
    }

    removeSkill(event) {
        let index   = getIndexInNodes(event.target.parentElement.parentElement, document.querySelector('.skills-wrapper'));
        let copy  = this.props.resume;
        copy.skills.splice(index, 1);
        this.props.updateResume(copy);
    }
}

export default Skills;