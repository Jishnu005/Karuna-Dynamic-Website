import { useRef, useMemo, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";

/* ---------- Materials (warm, low-poly, matching site palette) ---------- */
const PALETTE = {
  floor: "#D8C7A6",
  wall: "#F3E9D6",
  wallBack: "#EAD9BE",
  bedFrame: "#8B5E3C",
  bedLinenA: "#C1577A",
  bedLinenB: "#164E4A",
  bedLinenC: "#B08D57",
  bedLinenD: "#EFD4DD",
  pillow: "#FBF5EA",
  window: "#BFE3E0",
  windowFrame: "#0E3634",
  wardrobe: "#164E4A",
};

/* A single low-poly bed: frame + mattress + pillow + folded linen block */
function Bed({ position, rotationY, linen }) {
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* frame legs */}
      <mesh position={[0, 0.18, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.05, 0.36, 2]} />
        <meshStandardMaterial color={PALETTE.bedFrame} roughness={0.85} />
      </mesh>
      {/* mattress */}
      <mesh position={[0, 0.42, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.98, 0.16, 1.9]} />
        <meshStandardMaterial color={PALETTE.pillow} roughness={0.9} />
      </mesh>
      {/* linen throw */}
      <mesh position={[0, 0.53, 0.15]} castShadow>
        <boxGeometry args={[1, 0.06, 1.5]} />
        <meshStandardMaterial color={linen} roughness={0.95} />
      </mesh>
      {/* pillow */}
      <mesh position={[0, 0.56, -0.78]} castShadow>
        <boxGeometry args={[0.7, 0.14, 0.4]} />
        <meshStandardMaterial color={PALETTE.pillow} roughness={0.9} />
      </mesh>
      {/* headboard */}
      <mesh position={[0, 0.75, -1.02]} castShadow>
        <boxGeometry args={[1.05, 0.9, 0.08]} />
        <meshStandardMaterial color={PALETTE.bedFrame} roughness={0.8} />
      </mesh>
    </group>
  );
}

function Wardrobe({ position, rotationY = 0 }) {
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.9, 2, 0.6]} />
        <meshStandardMaterial color={PALETTE.wardrobe} roughness={0.7} />
      </mesh>
      <mesh position={[0.01, 1, 0.31]}>
        <boxGeometry args={[0.02, 1.9, 0.02]} />
        <meshStandardMaterial color={PALETTE.brass} />
      </mesh>
    </group>
  );
}

function Room() {
  return (
    <group>
      {/* floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[9, 9]} />
        <meshStandardMaterial color={PALETTE.floor} roughness={1} />
      </mesh>

      {/* back wall (with window cut visually via a frame + glass pane) */}
      <mesh position={[0, 2.2, -4.4]} receiveShadow>
        <boxGeometry args={[9, 4.4, 0.15]} />
        <meshStandardMaterial color={PALETTE.wallBack} roughness={0.95} />
      </mesh>

      {/* window frame */}
      <mesh position={[0, 2.3, -4.32]}>
        <boxGeometry args={[2.6, 2, 0.12]} />
        <meshStandardMaterial color={PALETTE.windowFrame} roughness={0.6} />
      </mesh>
      {/* window glass — this is the "exit portal" the camera flies through */}
      <mesh position={[0, 2.3, -4.28]} name="window-glass">
        <planeGeometry args={[2.3, 1.7]} />
        <meshPhysicalMaterial
          color={PALETTE.window}
          transparent
          opacity={0.35}
          roughness={0.05}
          transmission={0.6}
          thickness={0.2}
        />
      </mesh>
      {/* window mullions */}
      <mesh position={[0, 2.3, -4.27]}>
        <boxGeometry args={[0.06, 1.7, 0.02]} />
        <meshStandardMaterial color={PALETTE.windowFrame} />
      </mesh>
      <mesh position={[0, 2.3, -4.27]}>
        <boxGeometry args={[2.3, 0.06, 0.02]} />
        <meshStandardMaterial color={PALETTE.windowFrame} />
      </mesh>

      {/* side walls */}
      <mesh position={[-4.4, 2.2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[9, 4.4, 0.15]} />
        <meshStandardMaterial color={PALETTE.wall} roughness={0.95} />
      </mesh>
      <mesh position={[4.4, 2.2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[9, 4.4, 0.15]} />
        <meshStandardMaterial color={PALETTE.wall} roughness={0.95} />
      </mesh>

      {/* 4 beds, distinct positions/angles — a 4-sharing room layout */}
      <Bed position={[-2.7, 0, -2.6]} rotationY={0} linen={PALETTE.bedLinenA} />
      <Bed position={[2.7, 0, -2.6]} rotationY={0} linen={PALETTE.bedLinenB} />
      <Bed position={[-2.7, 0, 1.6]} rotationY={Math.PI} linen={PALETTE.bedLinenC} />
      <Bed position={[2.7, 0, 1.6]} rotationY={Math.PI} linen={PALETTE.bedLinenD} />

      {/* wardrobes along side walls */}
      <Wardrobe position={[-4.05, 0, -0.4]} rotationY={Math.PI / 2} />
      <Wardrobe position={[4.05, 0, -0.4]} rotationY={-Math.PI / 2} />

      {/* soft rug in center */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, -0.6]}>
        <circleGeometry args={[1.6, 24]} />
        <meshStandardMaterial color="#EFD4DD" roughness={1} transparent opacity={0.85} />
      </mesh>

      {/* lighting */}
      <ambientLight intensity={0.65} color="#FBF5EA" />
      <directionalLight
        position={[3, 6, 2]}
        intensity={1.1}
        color="#FFF3DE"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[0, 3, -4]} intensity={0.4} color="#BFE3E0" />
    </group>
  );
}

/* Exposes the camera ref up to the parent so GSAP can drive it directly.
   Also applies the initial position/lookAt immediately on mount, so the
   very first frame (before any scroll) already matches the intended
   opening shot instead of using three.js's default camera orientation. */
function CameraRig({ camRef, initialLook }) {
  const { camera } = useThree();
  camRef.current = camera;

  useEffect(() => {
    if (initialLook) {
      camera.position.set(...initialLook.pos);
      camera.lookAt(...initialLook.look);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default function RoomScene({ camRef, initialLook }) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ fov: 45, position: initialLook?.pos ?? [10, 11, 10], near: 0.1, far: 100 }}
      gl={{ antialias: true, alpha: true }}
    >
      <CameraRig camRef={camRef} initialLook={initialLook} />
      <Room />
      <fog attach="fog" args={["#F3E9D6", 8, 18]} />
    </Canvas>
  );
}
