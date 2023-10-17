<script lang="ts">
  import { Canvas } from "@threlte/core";
  import Scene from "./Scene.svelte";
  import { someAtom } from "./Store.ts";

  const changeTheATOM = () => {
    const value = someAtom.get();
    if (value === "oohyeah") {
      someAtom.set("ouchthathurts");
    } else {
      someAtom.set("oohyeah");
    }
  };
</script>

<div style="width: 100vw; height: 100vh; position: relative;">
  <Canvas>
    <Scene />
  </Canvas>
  <button
    on:click={changeTheATOM}
    style="width: 25%; background-color: white; color: black; position: absolute; left: 50%; bottom: 10px; height: 10vh; font-size: 2rem; transform: translateX(-50%); border-radius: 8px;"
    >Click Meeee</button
  >
</div>
