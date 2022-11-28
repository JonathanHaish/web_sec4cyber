import React , {Component} from 'react';

class VideoFlash extends Component{
    render(){
        return(
            <React.Fragment>
            <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,16,0" width="320" height="400">
                <param name="movie" value="filename.swf"/>
                <param name="quality" value="high"/>
                <param name="play" value="true"/>
                <param name="LOOP" value="false"/>
                <embed src="video-filename.swf" width="320" height="400" play="true" loop="false" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"></embed>
           </object>
           </React.Fragment>
        );
    };
}

export default VideoFlash;