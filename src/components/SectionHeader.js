import React     from 'react';
import upIcon    from '../icons/up.svg';
import downIcon  from '../icons/down.svg';
import Direction from '../modules/Direction.js';
import '../styles/Info.css';

export default class SectionHeader extends React.Component {
    render() {

        const { title, moveSection} = this.props;

        return (
            <div className='section-header'>
                <p className='section-title'>{title}</p>
                <div>
                    <img alt="Move section up" src={upIcon} className="icon" onClick={(e) => moveSection(e, Direction.Up)}></img>
                    <img alt="Move section down" src={downIcon} className="icon" onClick={(e) => moveSection(e, Direction.Down)}></img>
                </div>
            </div>
        )
    }
}