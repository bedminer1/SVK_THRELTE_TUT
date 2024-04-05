<script lang="ts">
    import { T, useTask } from '@threlte/core'
    import { interactivity, OrbitControls, Float } from '@threlte/extras'
    import { spring } from 'svelte/motion'

    interactivity()
    const scale = spring([1,1,1])

    let rotation = 0
    // useTask is better than requestAnimationFrame
    // handles fluctuation in fps
    useTask((delta) => { // delta is time since last frame
        rotation += delta / 3
    })
</script>

<T.DirectionalLight 
    position={[0,10,10]}
    castShadow/>

<T.AmbientLight intensity={0.1} />

<Float
  floatIntensity={1}
  floatingRange={[0, 1]}
>
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
</Float>

<T.OrthographicCamera makeDefault zoom={100} position={[5, 6, 5]}>
	<OrbitControls
		on:create={({ ref }) => {
			ref.minPolarAngle = Math.PI / 4 - 0.9;
			ref.maxPolarAngle = Math.PI / 4 + 0.3;
			ref.maxZoom = 390;
			ref.minZoom = 100;
		}}
	/>
</T.OrthographicCamera>

<T.Mesh
    receiveShadow
    position={[0,-1.2,0]}
>
    <T.BoxGeometry args={[10, 0.1, 10]} />
    <T.MeshStandardMaterial color="white" />
</T.Mesh>

<T.GridHelper
  args={[10, 10]}
  position.y={-1.1}
/>


