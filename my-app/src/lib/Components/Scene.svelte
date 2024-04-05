<script lang="ts">
    import { T } from '@threlte/core'
    import { interactivity } from '@threlte/extras'
    import { spring } from 'svelte/motion'

    interactivity()
    const scale = spring([1,1,1])
</script>

<T.Mesh 
    position={[0,0,0]}
    scale={$scale}
    on:pointerenter={() => scale.set([2,0.5,2])}
    on:pointerleave={() => scale.set([1,1,1])}
    >
    <T.BoxGeometry args={[2, 2, 2]}/>
    <T.MeshBasicMaterial color="green"/>
</T.Mesh>

<T.PerspectiveCamera 
    makeDefault
    position={[5,5,5]}
    on:create={({ ref }) => {
        ref.lookAt(0, 0, 0)
    }}
/>