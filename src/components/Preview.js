import React from 'react';
import '../styles/Preview.css';
import { Section } from '../App';
import { v4 as uuidv4 } from 'uuid';

class Preview extends React.Component {
    render() {

        const { resume, order } = this.props;

        return (
            <div className='preview-wrapper'>
                <p className='large-text'>{resume.general.name === "" ? "Name here" : resume.general.name}</p>
                <p className='normal-text'>{this.getContactInformation(resume.general)}</p>
                <p className='normal-text'>{resume.general.location === "" ? "Location here" : resume.general.location}</p>
                <hr></hr>
                {order.map(s => this.getSection(s))}
            </div>
        )
    }

    getSection(section) {
        switch(section) {
            case Section.Skills:
                return this.skillsSection(this.props.resume.skills);
            case Section.Certifications:
                return this.certificationsSection(this.props.resume.certifications);
        }
    }

    getContactInformation(general) {
        let contact = "";
        contact +=  general.email + (general.number === "" ? "" : ` | ${general.number}`);
        return (contact === "" ? "Contact information here" : contact);
    }

    skillsSection(skills) {
        if(skills.length > 0) {
            return (
                <div key={uuidv4()}>
                <p className='large-text'>Skills</p>
                <p className='normal-text'>{skills.join(', ')}</p>
                <hr></hr>
                </div>
            )
        }
    }

    certificationsSection(certifications) {
        if(certifications.length > 0) {
            return (
                <div key={uuidv4()}>
                    <p className='large-text'>Certifications</p>
                </div>
            )
        }
    }

}

export default Preview;