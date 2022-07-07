import React from 'react';
import '../styles/Info.css';
import General from './General';
import Skills  from './Skills';
import Certifications from './Certifications';
import Experience from './Experience';
import { v4 as uuidv4 } from 'uuid';
import { Section } from '../App';
import {moveTo} from '../modules/array-functions.js';
import Educations from './Educations';

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
                {order.map((s, index) => this.getSection(s, index))}
            </div>
        )
    }

    getSection(section, index) {
        switch(section) {
            case Section.Skills: 
                return <Skills 
                    key          ={uuidv4()} 
                    resume       ={this.props.resume} 
                    updateResume ={this.props.updateResume}
                    moveSection  ={this.moveSection}
                    index        ={index}
                />
            case Section.Certifications:
                return <Certifications 
                    key          ={uuidv4()} 
                    resume       ={this.props.resume} 
                    updateResume ={this.props.updateResume}
                    moveSection  ={this.moveSection}
                    index        ={index}
                />
            case Section.Education:
                return <Educations 
                    key          ={uuidv4()} 
                    resume       ={this.props.resume} 
                    updateResume ={this.props.updateResume}
                    moveSection  ={this.moveSection}
                    index        ={index}
                />
            default:
                return <Experience 
                    key          ={uuidv4()} 
                    resume       ={this.props.resume} 
                    updateResume ={this.props.updateResume}
                    moveSection  ={this.moveSection}
                    index        ={index}
                />
        }
    }

    moveSection(index, direction) {
        let copy   = this.props.order;
        copy       = moveTo(index, index+direction, copy);
        this.props.updateOrder(copy);
    }
}

export default Info;