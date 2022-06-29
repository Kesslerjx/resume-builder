import React from 'react';
import '../styles/Info.css'
import upIcon from '../icons/up.svg';
import downIcon from '../icons/down.svg';
import Certificiation from '../objects/Certification';
import { Direction } from './Info';

class Certifications extends React.Component {
    render() {

        const certifications = this.props.resume.certifications;
        const moveSection    = this.props.moveSection;

        return (
            <div className='section-wrapper'>
                <div className='section-header'>
                    <p className='section-title'>Certifications</p>
                    <div>
                        <img alt="Move section up" src={upIcon} className="icon" onClick={(e) => moveSection(e, Direction.Up)}></img>
                        <img alt="Move section down" src={downIcon} className="icon" onClick={(e) => moveSection(e, Direction.Down)}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Certifications;