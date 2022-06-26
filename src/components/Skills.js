import React from 'react';
import '../styles/Info.css'
import '../styles/Skills.css'
import { v4 as uuidv4 } from 'uuid';

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
            <div key={uuidv4()}>{skill}</div>
        )
    }
}

export default Skills;