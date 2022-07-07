import React            from 'react';
import upIcon           from '../icons/up.svg';
import downIcon         from '../icons/down.svg';
import deleteIcon       from '../icons/delete.svg';
import { v4 as uuidv4 } from 'uuid';
import Direction        from '../modules/Direction.js';
import '../styles/Info.css';

export default class ListItem extends React.Component {
    render() {

        const { content, moveItem, deleteItem, index } = this.props;

        return (
            <div key={uuidv4()} className='list-item-wrapper'>
                {content}
                <div className='list-item-buttons'>
                    <img alt="Move item up" src={upIcon} className="icon" onClick={() => moveItem(index, Direction.Up)}></img>
                    <img alt="Move item down" src={downIcon} className="icon" onClick={() => moveItem(index, Direction.Down)}></img>
                    <img alt="Delete item" src={deleteIcon} className="icon" onClick={(e) => deleteItem(e)}></img>
                </div>
            </div>
        )
    }
}