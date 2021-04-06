import React, { Component } from 'react'
import './drumpad.scss'

class Drumpad extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drum_pad: {
                Q: [
                    'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
                    'Heater 1'
                ],
                W: [
                    'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
                    'Heater 2'
                ],
                E: [
                    'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
                    'Heater 3'
                ],
                A: [
                    'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
                    'Heater 4'
                ],
                S: [
                    'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
                    'Clap'
                ],
                D: [
                    'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
                    'Open HH'
                ],
                Z: [
                    'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
                    'Kick n\' Hat'
                ],
                X: [
                    'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
                    'Kick'
                ],
                C: [
                    'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
                    'Closed HH'
                ]
            }
        };

        this.playAudio = this.playAudio.bind(this);
    }

    playAudio(key) {
        // update parent's current_key
        const drumpad_key = this.state.drum_pad[key];
        this.props.changeDisplay(drumpad_key[1]);
        // play audio
        const sound_clip = new Audio(drumpad_key[0]);
        sound_clip.play();
    }

    render() {
        const drum_pad = this.state.drum_pad;
        const drum_keys = Object.keys(drum_pad);
        const drum_pad_elements = drum_keys.map((drumpad_key, index) => {
            return (
                    <div id={drum_pad[drumpad_key][1]} className="drum-pad" key={index} onClick={() => this.playAudio(drumpad_key)}>
                        <p>{drumpad_key}</p>
                    </div>
                    )
        })
        return (
            <div id="drumpad_container">
                {drum_pad_elements}
            </div>
        )
    }
}

export default Drumpad
