import { OrbitControls } from '@react-three/drei';
import {Canvas} from '@react-three/fiber'
import { Room } from './room';
import { useMediaQuery } from 'react-responsive';
import * as THREE from "three";
const HeroEx = () => {
    const isTablet=useMediaQuery({query:'(max-width:1024px)'})
    const isMobile=useMediaQuery({query:'(max-width:768px)'})
    return ( 
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={100}
      color="white"
    />
    {/* cheragh motalee */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={40}
      color="#4cc9f0"
    />
    {/*divar */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={60}
      color="#9d4edd"
    />
    {/* nor */}
    <primitive
      object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={15}
    />
            <ambientLight intensity={0.2} color="#1a1a40"/>
            <directionalLight position={[5,5,5]} intensity={1}/>
            <OrbitControls
        enablePan={false} 
        enableZoom={!isTablet} 
        maxDistance={20} 
        minDistance={5} 
        minPolarAngle={Math.PI / 5} 
        maxPolarAngle={Math.PI / 2} 
      />
           <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
            <Room/>
            </group>
        </Canvas>
     );
}
 
export default HeroEx;