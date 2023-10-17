<script>
  import { T, useFrame } from "@threlte/core";
  import { interactivity } from "@threlte/extras";
  import { spring } from "svelte/motion";
  import { someAtom } from "./Store.ts";

  interactivity();
  let someReactiveValue = 1;
  const scale = spring(someReactiveValue);
  let timeMultiplier = 1;
  let rotation = 0;
  useFrame((state, delta) => {
    rotation += delta * timeMultiplier;
  });

  someAtom.subscribe((newValue) => {
    if (newValue === "ouchthathurts") {
      someReactiveValue = 5;
      timeMultiplier = 5;
    } else {
      someReactiveValue = 1;
      timeMultiplier = 1;
    }
  });
</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0);
  }}
/>

<T.DirectionalLight position={[0, 10, 10]} castShadow />

<T.Mesh
  rotation.y={rotation}
  position.y={1}
  scale={$scale}
  on:pointerenter={() => scale.set(1.5)}
  on:pointerleave={() => scale.set(1)}
  castShadow
>
  <T.BoxGeometry args={[1, 2, 1]} />
  <T.MeshStandardMaterial color="hotpink" />
</T.Mesh>

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
  <T.CircleGeometry args={[4, 40]} />
  <T.MeshStandardMaterial color="white" />
</T.Mesh>
