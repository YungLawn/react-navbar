import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { RoundedBox } from '@react-three/drei';
import * as THREE from "three";

export default function IsotopeTile({ x, y, z }) {
    const box = useRef();
    const vec = new THREE.Vector3(x, y, z);
    useFrame(() => box.current.position.lerp(vec, 0.1));
    return (
    <RoundedBox ref={box} smoothness={8} position={[0, 0, 0]} args={[1, 1, 0.2]} radius={0.075}>
        <meshStandardMaterial attach="material" color={"white"} />
    </RoundedBox>
    );
}