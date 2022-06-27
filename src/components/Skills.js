import React from 'react';
import '../styles/Info.css'
import '../styles/Skills.css'
import { v4 as uuidv4 } from 'uuid';

const Direction = {
    Up: 'u',
    Down: 'd'
}

class Skills extends React.Component {

    constructor(props) {
        super(props);

        this.value = "";
    }

    render() {

        const skills = this.props.resume.skills;

        return (
            <div className='section-wrapper'>
                <p className='section-title'>Skills</p>
                <div className='input-button-wrapper'>
                    <input id='skill-name' type="text" placeholder='Skill' className='section-input'></input>
                    <button onClick={(e) => this.addSkill(e)}>Add</button>
                </div>
                <div className='skills-wrapper'>
                    {skills.map(skill => this.getSkillDiv(skill))}
                </div>
            </div>
        )
    }

    addSkill() {

        let input = document.querySelector('#skill-name');

        if(input.value !== "") {
            let copy  = this.props.resume;
            copy.skills = [...this.props.resume.skills, input.value];
            this.props.updateResume(copy);
            input.value = "";
        }
    }

    getSkillDiv(skill) {
        return (
            <div key={uuidv4()} className='skill-wrapper'>
                <p>{skill}</p>
                <div>
                    <button onClick={(e) => this.moveSkill(e, Direction.Up)}>U</button>
                    <button onClick={(e) => this.moveSkill(e, Direction.Down)}>D</button>
                    <button onClick={(e) => this.removeSkill(e)}>X</button>
                </div>
            </div>
        )
    }

    moveSkill(event, direction) {

        let index    = this.getSkillIndex(event);
        let moveable = (direction === Direction.Up ? index > 0 : index < this.props.resume.skills.length);

        if(moveable) {
            let skill = this.props.resume.skills[index];
            let copy  = this.props.resume;

            copy.skills.splice(index, 1);
            copy.skills.splice(direction === Direction.Up ? index-1 : index+1, 0, skill);

            this.props.updateResume(copy);
        }
    }

    removeSkill(event) {
        let index = this.getSkillIndex(event);
        let copy  = this.props.resume;
        copy.skills.splice(index, 1);
        this.props.updateResume(copy);
    }

    getSkillIndex(event) {
        let skill  = event.target.parentElement.parentElement;
        let nodes  = Array.from(document.querySelector('.skills-wrapper').childNodes);
        return nodes.indexOf(skill);
    }
}

export default Skills;