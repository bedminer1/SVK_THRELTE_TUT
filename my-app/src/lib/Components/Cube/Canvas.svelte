<script lang="ts">
    import { Canvas } from '@threlte/core'
    import Scene from '$lib/Components/Cube/Scene.svelte'
</script>

<main class="relative my-10 w-3/4 h-[400px] md:h-[700px] border-2 drop-shadow-xl border-dashed rounded-xl">
    <Canvas>
        <Scene />
    </Canvas>
</main>