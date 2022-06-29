import React from 'react';
import '../styles/Preview.css';

class Preview extends React.Component {
    render() {

        const resume = this.props.resume;

        return (
            <div className='preview-wrapper'>
                <p className='large-text'>{resume.general.name === "" ? "Name here" : resume.general.name}</p>
                <p className='normal-text'>{this.getContactInformation(resume.general)}</p>
                <p className='normal-text'>{resume.general.location === "" ? "Location here" : resume.general.location}</p>
                <hr></hr>
                {this.skillsSection(resume.skills)}
            </div>
        )
    }

    getContactInformation(general) {
        let contact = "";
        contact +=  general.email + (general.number === "" ? "" : ` | ${general.number}`);
        return (contact === "" ? "Contact information here" : contact);
    }

    skillsSection(skills) {
        if(skills.length > 0) {
            return (
                <>
                <p className='large-text'>Skills</p>
                <p className='normal-text'>{skills.join(', ')}</p>
                <hr></hr>
                </>
            )
        }
    }

}

export default Preview;