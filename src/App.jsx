import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import { useRef } from "react";


function Model(props) {
  const { nodes, materials } = useGLTF("/ponchik.glb");

  const myMesh = useRef();

  useFrame(({ clock }) => {
    // myMesh.current.rotation.x = clock.getElapsedTime();
    myMesh.current.rotation.z = clock.getElapsedTime();
    myMesh.current.rotation.y = clock.getElapsedTime();
  });
  return (
    <group {...props} dispose={null} ref={myMesh}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <group position={[0, 0, -0.42]} rotation={[-0.01, 0, 2.66]} scale={1}>
          <mesh
            geometry={nodes.Sprinkles_1.geometry}
            material={materials["Material #51"]}
            position={[31.92, 1.75, -0.28]}
            scale={10}
          />
          <mesh
            geometry={nodes.Sprinkles_2.geometry}
            material={materials["Material #38"]}
            position={[31.92, 1.75, -0.28]}
            scale={10}
          />
          <mesh
            geometry={nodes.Sprinkles_3.geometry}
            material={materials["Material #25 1"]}
            position={[31.92, 1.75, -0.28]}
            scale={10}
          />
          <mesh
            geometry={nodes.Sprinkles_4.geometry}
            material={materials["Material #26"]}
            position={[31.92, 1.75, -0.28]}
            scale={10}
          />
          <mesh
            geometry={nodes.donut.geometry}
            material={materials.Hero}
            position={[0.21, 1.75, 0.12]}
            scale={7.81}
          />
          <mesh
            geometry={nodes.ICING.geometry}
            material={materials["Hero 1"]}
            position={[0.21, 1.75, 0.12]}
            scale={7.81}
          />
        </group>
      </group>
    </group>
  );
}

function App() {
  return (
    <Canvas camera={{ fov: 70, position: [0, 0, 65] }}>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.5} />
      <Model />
    </Canvas>
  );
}

export default App;
