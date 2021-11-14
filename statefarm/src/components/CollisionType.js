import React from 'react';
import ColorScheme from "../ColorScheme";
import t_bone_icon from '../assets/TBoned.png';
import Head_On_icon from '../assets/HeadOn.png';
import Sideswipe_icon from '../assets/SideSwiped.png';
import Rear_Ended_icon from '../assets/RearEnded.png';
import Pedestrian_icon from '../assets/Pedestrian.png';
import Other_icon from '../assets/SingleVehicle.png';

const CRASH_TYPES = {
    T_BONE: 0,
    Head_On: 1,
    Sideswipe: 2,
    Rear_Ended: 3,
    Pedestrian: 4,
    Other: 5,
}
export default class CollisionType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            crash_type: undefined
        }
    }
    render() {
        const bg0 = ColorScheme.get_color("bg0");
        var img_style = {flex: 1,
            width: null,
            height: null,
            resizeMode: 'contain'}
        return (
            <React.Fragment>
              <div style={{display:"flex", flexDirection:"column",width:"75%", gap:50, margin: "0 auto" }}>
                <button
                  //style={{ backgroundColor: bg0 }}
                  className="monitor_tab_button"
                  onClick={() => { this.setState({ CRASH_TYPES: CRASH_TYPES.T_BONE }) }}
                >
                  <img src={t_bone_icon} alt="log" style={{height:100,width: "75%"}}/>
                </button>
                <button
                  //style={{ backgroundColor: bg0 }}
                  className="monitor_tab_button"
                  onClick={() => { this.setState({ CRASH_TYPES: CRASH_TYPES.Head_On }) }}
                >
                  <img src={Head_On_icon} alt="health" style={{height:150, width: "75%"}}/>
                </button>
                <button
                  //style={{ backgroundColor: bg0 }}
                  className="monitor_tab_button"
                  onClick={() => { this.setState({ CRASH_TYPES: CRASH_TYPES.Sideswipe }) }}
                >
                  <img src={Sideswipe_icon} alt="delay" style={{height:150, width: "75%"}}/>
                </button>
                <button
                  //style={{ backgroundColor: bg0 }}
                  className="monitor_tab_button"
                  onClick={() => { this.setState({ CRASH_TYPES: CRASH_TYPES.Sideswipe }) }}
                >
                  <img src={Rear_Ended_icon} alt="delay" style={{height:150, width: "75%"}}/>
                </button>
                <button
                  //style={{ backgroundColor: bg0 }}
                  className="monitor_tab_button"
                  onClick={() => { this.setState({ CRASH_TYPES: CRASH_TYPES.Sideswipe }) }}
                >
                  <img src={Pedestrian_icon} alt="delay" style={{height:150, width: "75%"}}/>
                </button>
                <button
                  //style={{ backgroundColor: bg0 }}
                  className="monitor_tab_button"
                  onClick={() => { this.setState({ CRASH_TYPES: CRASH_TYPES.Sideswipe }) }}
                >
                  <img src={Other_icon} alt="delay" style={{height:150, width: "75%"}}/>
                </button>
              </div>
            </React.Fragment>
          );
    }
}