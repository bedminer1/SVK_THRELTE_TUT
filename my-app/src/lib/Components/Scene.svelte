<script lang="ts">
    import { T, useTask } from '@threlte/core'
    import { interactivity } from '@threlte/extras'
    import { spring } from 'svelte/motion'

    interactivity()
    const scale = spring([1,1,1])

    let rotation = 0
    useTask((delta) => { // delta is time since last frame
        rotation += delta
    })
</script>

<T.DirectionalLight 
    position={[0,10,10]}
    castShadow/>

<T.Mesh 
    rotation.y={rotation}
    position={[0,0,0]}
    scale={$scale}
    on:pointerenter={() => scale.set([2,0.5,2])}
    on:pointerleave={() => scale.set([1,1,1])}
    castShadow
    >
    <T.BoxGeometry args={[2, 2, 2]}/>
    <T.MeshStandardMaterial color="hotpink"/>
</T.Mesh>

<T.PerspectiveCamera 
    makeDefault
    position={[5,5,5]}
    on:create={({ ref }) => {
        ref.lookAt(0, 0, 0)
    }}
/>

<T.Mesh
    receiveShadow
    rotation.x={- Math.PI / 2}
    position={[0,-1.2,0]}
>
    <T.CircleGeometry args={[3, 60]} />
    <T.MeshStandardMaterial color="white" />
</T.Mesh>

