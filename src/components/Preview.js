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
            </div>
        )
    }

    getContactInformation(general) {
        let contact = "";
        contact +=  general.email + (general.number === "" ? "" : ` | ${general.number}`);
        return (contact === "" ? "Contact information here" : contact);
    }
}

export default Preview;