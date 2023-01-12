import React, {useState} from 'react';
import { Text } from 'troika-three-text';
import { extend } from '@react-three/fiber';

extend({ Text });

function PeriodicText(props) {

    const [opts, setOpts] = useState({
        font: "Philosopher",
        fontSize: 12,
        color: "#99ccff",
        maxWidth: 300,
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: "justify",
        materialType: "MeshPhongMaterial"
      });

    return (  
        <text>
            scale={100}
            text={props.text}
        </text>

    );
}

export default PeriodicText;