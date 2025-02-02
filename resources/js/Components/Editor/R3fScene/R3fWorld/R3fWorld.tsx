/* eslint-disable react/no-unknown-property */
import {useZustand} from "@/store/useZustand"
import {AXES_LENGTH, SHOW_AXES_HELPER, loaders} from "@/utils/constants"
import {useThree} from "@react-three/fiber"
import {Fragment, useEffect} from "react"
import {Color} from "three"
import {R3fAudio} from "./R3fAudio"
import {R3fGif} from "./R3fGif"
import {R3fImage} from "./R3fImage"
import {R3fModel} from "./R3fModel"
import {R3fSvg} from "./R3fSvg"
import {R3fText} from "./R3fText"
import {R3fVideo} from "./R3fVideo"

const bgColor = new Color()

export const R3fWorld = () => {
  const { pageArr, selPageId, pageObjectArr } = useZustand()
  const { scene } = useThree()

  useEffect(() => {
    const selPage = pageArr.find((v) => v.id === selPageId)

    if (selPage?.background) {
      if (selPage.background.substring(0, 1) === "#") {
        bgColor.set(selPage.background)
        scene.background = bgColor
      } else {
        loaders.loadAsset("texture", selPage.background).then((v) => {
          scene.background = v
        })
      }
    } else {
      scene.background = null
    }
  }, [pageArr, selPageId])

  return (
    <>
      {pageObjectArr
        .filter((v) => v.page_id === selPageId)
        .map(
          (v, i) =>
            v.url && (
              <Fragment key={i}>
                {v.type === "text" && <R3fText pageObject={v}/>}
                {v.type === "image" && <R3fImage pageObject={v}/>}
                {v.type === "gif" && <R3fGif pageObject={v}/>}
                {v.type === "svg" && <R3fSvg pageObject={v}/>}
                {v.type === "video" && <R3fVideo pageObject={v}/>}
                {v.type === "model" && <R3fModel pageObject={v} useCloneGltf/>}
                {v.type === "audio" && <R3fAudio pageObject={v}/>}
              </Fragment>
            )
        )}
      {SHOW_AXES_HELPER && <axesHelper args={[AXES_LENGTH]}/>}
    </>
  )
}
