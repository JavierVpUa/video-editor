/* eslint-disable react/no-unknown-property */
import {IPageObject} from "@/types"
import {meshBounds, useTexture} from "@react-three/drei"
import {DoubleSide} from "three"
import {R3fTransformControls} from "./R3fTransformControls"

export const R3fImage = ({ pageObject }: { pageObject: IPageObject }) => {
  const texture = useTexture(pageObject.url)

  return (
    <R3fTransformControls pageObject={pageObject}>
      <mesh raycast={meshBounds}>
        <planeGeometry args={[40, 25]}/>
        <meshStandardMaterial
          map={texture}
          toneMapped={false}
          side={DoubleSide}
        />
      </mesh>
    </R3fTransformControls>
  )
}
