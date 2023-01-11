
import React from 'react';
import {OrbitControls} from '@react-three/drei';

export default function SpecialControls() {
    return (

        <OrbitControls 
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 1}
            minAzimuthAngle = {0}
            maxAzimuthAngle = {0}
            minDistance = {10}
            maxDistance = {100}
            panSpeed = {0.5}
            rotateSpeed = {0.25}
            zoomSpeed = {1}
            location = {[0,0,0]}
        >
        </OrbitControls>

        // <MapControls> 
        //     location ={[0,0,0]}
        //     minPolarAngle={Math.PI / 2} 
        //     maxPolarAngle={Math.PI / 1} 
        //     minAzimuthAngle = {0}
        //     maxAzimuthAngle = {0}
        // </MapControls>
    )
}