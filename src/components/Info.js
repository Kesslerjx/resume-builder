import React from 'react';
import '../styles/Info.css';
import General from './General';
import Skills  from './Skills';
import Certifications from './Certifications';
import { v4 as uuidv4 } from 'uuid';
import { Section } from '../App';
import {moveTo, getIndexInNodes} from '../modules/array-functions.js';
import Educations from './Educations';

const Direction = {
    Up: -1,
    Down: 1
}

class Info extends React.Component {

    constructor(props) {
        super(props);

        this.moveSection = this.moveSection.bind(this);
    }

    render() {

        const { resume, updateResume, order } = this.props;

        return (
            <div className='info-wrapper'>
                <General resume={resume} updateResume={updateResume}/>
                {order.map(s => this.getSection(s))}
            </div>
        )
    }

    getSection(section) {
        switch(section) {
            case Section.Skills: 
                return <Skills 
                    key          ={uuidv4()} 
                    resume       ={this.props.resume} 
                    updateResume ={this.props.updateResume}
                    moveSection  ={this.moveSection}
                />
            case Section.Certifications:
                return <Certifications 
                    key          ={uuidv4()} 
                    resume       ={this.props.resume} 
                    updateResume ={this.props.updateResume}
                    moveSection  ={this.moveSection}
                />
            case Section.Education:
                return <Educations 
                    key          ={uuidv4()} 
                    resume       ={this.props.resume} 
                    updateResume ={this.props.updateResume}
                    moveSection  ={this.moveSection}
                />
        }
    }

    moveSection(event, direction) {
        let target = event.target.parentElement.parentElement.parentElement;
        let parent = target.parentElement;
        let index  = getIndexInNodes(target, parent) - 1; //Subtract 1 so General isn't counted
        let copy   = this.props.order;
        copy       = moveTo(index, index+direction, copy);
        
        this.props.updateOrder(copy);
    }
}

export default Info;
export {Direction};