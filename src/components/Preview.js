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
            case Section.Education:
                return this.educationSection(this.props.resume.education);
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
                <div key={uuidv4()} className='resume-section'>
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
                <div key={uuidv4()} className='resume-section'>
                    <p className='large-text'>Certifications</p>
                    <div className='resume-section'>
                        {certifications.map((cert) => (
                            <div key={uuidv4()} className='list-item-wrapper'>
                                <p className='normal-text'>{cert.name}</p>
                                <p className='normal-text'>{cert.expiration}</p>
                            </div>
                        ))}
                    </div>
                    <hr></hr>
                </div>
            )
        }
    }

    educationSection(education) {
        if(education.length > 0) {
            return (
                <div key={uuidv4()} className='resume-section'>
                    <p className='large-text'>Education</p>
                    <div className='resume-section'>
                        {education.map((edu) => (
                            <div key={uuidv4()} className='list-item-wrapper'>
                                <div>
                                    <p className='normal-text'>{edu.degree}</p>
                                    <p className='normal-text'>{edu.school}</p>
                                </div>
                                <p className='normal-text'>{edu.date}</p>
                            </div>
                        ))}
                    </div>
                    <hr></hr>
                </div>
            )
        }
    }

}

export default Preview;