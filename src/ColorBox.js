import {Component} from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    render(){
        const {name, background}= this.props;
        return (
            <div className='ColorBox' style={{background}}>
                <div className='copy-container'>
                    <div class='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
            <span className='see-more'>More</span>
            </div>
        )
    }
}

export default ColorBox;