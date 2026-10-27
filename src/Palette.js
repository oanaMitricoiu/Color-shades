import {Component} from 'react';
import ColorBox from './ColorBox';
import Slider from "rc-slider";
import './Palette.css';
import "rc-slider/assets/index.css";

class Palette extends Component {
    constructor(props){
        super(props);
        this.state={level:300};
        this.changeLevel=this.changeLevel.bind(this)
    }

    changeLevel(level){
        this.setState({level})
    }
    
    render(){
        const {colors} = this.props.palette;
        const {level} = this.state;
        
        const colorBoxes=colors[level].map(color => (
        <ColorBox background={color.hex} name={color.name}/>
    ))
        return (
            <div className='Palette'>
                <Slider defaultValue={level} onChangeComplete={this.changeLevel} 
                min={100} max={900} step={100}/>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
} 

export default Palette;