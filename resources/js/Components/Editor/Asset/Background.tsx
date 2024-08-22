import {useZustand} from "@/store/useZustand"
import axios from "axios"
import classNames from "classnames"
import {useState} from "react"
import {HexColorPicker} from "react-colorful"

const gradientsArr = [
  "/storage/image/gradients/(0).jpg",
  "/storage/image/gradients/(1).jpg",
  "/storage/image/gradients/(2).jpg",
  "/storage/image/gradients/(3).jpg",
  "/storage/image/gradients/(4).jpg",
  "/storage/image/gradients/(5).jpg",
  "/storage/image/gradients/(6).jpg",
  "/storage/image/gradients/(7).jpg",
  "/storage/image/gradients/(8).jpg",
  "/storage/image/gradients/(9).jpg",
  "/storage/image/gradients/(10).jpg",
  "/storage/image/gradients/(11).jpg",
  "/storage/image/gradients/(12).jpg",
  "/storage/image/gradients/(13).jpg",
  "/storage/image/gradients/(14).jpg",
  "/storage/image/gradients/(15).jpg",
  "/storage/image/gradients/(16).jpg",
  "/storage/image/gradients/(17).jpg",
  "/storage/image/gradients/(18).jpg",
  "/storage/image/gradients/(19).jpg",
  "/storage/image/gradients/(20).jpg",
  "/storage/image/gradients/(21).jpg",
  "/storage/image/gradients/(22).jpg",
]

export const Background = () => {
  const { pageArr, selPageId, setSelPage } = useZustand()
  const selPage = pageArr.find((v) => v.id === selPageId)
  const bgColor =
    selPage?.background?.substring(0, 1) === "#" ? selPage.background : ""
  const [isHexColorPickerVisible, setIsHexColorPickerVisible] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <div
          className="w-12 h-12 rounded-full cursor-pointer border border-gray-500"
          style={{ backgroundColor: bgColor }}
          onClick={() => setIsHexColorPickerVisible(!isHexColorPickerVisible)}
        />
        {isHexColorPickerVisible && (
          <HexColorPicker
            color={bgColor}
            onChange={(v) => {
              if (selPage) {
                selPage.background = v
                axios.post("/savePage", selPage)
                setSelPage(selPage)
              }
            }}
          />
        )}
      </div>
      <div className="flex gap-2 flex-wrap">
        {gradientsArr.map((v, i) => (
          <img
            className={classNames("w-32 h-20 border rounded cursor-pointer", {
              "border-gray-500": selPage?.background !== v,
              "border-red-500": selPage?.background === v,
            })}
            key={i}
            src={v}
            onClick={() => {
              if (selPage) {
                selPage.background = v
                axios.post("/savePage", selPage)
                setSelPage(selPage)
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}
