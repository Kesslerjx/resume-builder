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
                {order.map((s, index) => this.getSection(s, index))}
            </div>
        )
    }

    getSection(section, index) {
        switch(section) {
            case Section.Skills:
                return this.skillsSection(this.props.resume.skills, index);
            case Section.Certifications:
                return this.certificationsSection(this.props.resume.certifications, index);
            case Section.Education:
                return this.educationSection(this.props.resume.education, index);
            default:
                return this.experienceSection(this.props.resume.experience, index);
        }
    }

    getContactInformation(general) {
        let contact = "";
        contact +=  general.email + (general.number === "" ? "" : ` | ${general.number}`);
        return (contact === "" ? "Contact information here" : contact);
    }

    skillsSection(skills, index) {
        if(skills.length > 0) {
            return (
                <div key={uuidv4()} className='resume-section'>
                <p className='large-text'>Skills</p>
                <p className='normal-text'>{skills.join(', ')}</p>
                {
                    (index !== this.props.order.length-1) ? <hr></hr>: <div></div>
                }
                </div>
            )
        }
    }

    certificationsSection(certifications, index) {
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
                    {
                        (index !== this.props.order.length-1) ? <hr></hr>: <div></div>
                    }
                </div>
            )
        }
    }

    educationSection(education, index) {
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
                    {
                        (index !== this.props.order.length-1) ? <hr></hr>: <div></div>
                    }
                </div>
            )
        }
    }

    experienceSection(experience, index) {
        if(experience.length > 0) {
            console.log(experience);
            return (
                <div key={uuidv4()} className='resume-section'>
                    <p className='large-text'>Experience</p>
                    <div className='resume-section'>
                        {experience.map( (job, index) =>
                            <div key={uuidv4()}>
                                <div className='list-item-wrapper'>
                                    <div>
                                        <p className='normal-text'>{job.title}</p>
                                        <p className='normal-text'>{job.name}</p>
                                    </div>
                                    <p className='normal-text'>{`${job.from} - ${job.to}`}</p>
                                </div>
                                <ul>
                                    {job.tasks.map(task =>
                                        <li key={uuidv4()} className='normal-text'>{task}</li>
                                    )}
                                </ul>
                                {
                                    (index !== experience.length-1) ? <br></br>: <div></div>
                                }
                            </div>
                        )}
                    </div>
                    {
                        (index !== this.props.order.length-1) ? <hr></hr>: <div></div>
                    }
                </div>
            )
        }
    }

}

export default Preview;