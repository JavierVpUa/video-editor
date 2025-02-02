import {useApi} from "@/hooks/useApi"
import {IModelInfo} from "@/types"

const modelArr: IModelInfo[] = [
  {
    imageSrc: "/storage/model/arrow.png",
    modelSrc: "/storage/model/arrow_o.glb",
    rotation: [Math.PI * 0.5, 0, 0],
    scale: [5, 5, 5],
  },
  {
    imageSrc: "/storage/model/bathroom.png",
    modelSrc: "/storage/model/bathroom_o.glb",
    scale: [10, 10, 10],
    offset: [0, -1.5, 0],
  },
  {
    imageSrc: "/storage/model/boot.png",
    modelSrc: "/storage/model/boot_o.glb",
    scale: [30, 30, 30],
    offset: [0.04, 1.8, 0],
  },
  {
    imageSrc: "/storage/model/canon.png",
    modelSrc: "/storage/model/canon_o.glb",
    scale: [5, 5, 5],
  },
  {
    imageSrc: "/storage/model/car.png",
    modelSrc: "/storage/model/car_o.glb",
    scale: [1, 1, 1],
    offset: [0, -6, 0],
  },
  {
    imageSrc: "/storage/model/casual_christ.png",
    modelSrc: "/storage/model/casual_christ_o.glb",
    scale: [10, 10, 10],
    offset: [0, -1, 0],
  },
  {
    imageSrc: "/storage/model/chick.png",
    modelSrc: "/storage/model/chick_o.glb",
    scale: [1, 1, 1],
    offset: [0, -10, 0],
  },
  {
    imageSrc: "/storage/model/coin_race.png",
    modelSrc: "/storage/model/coin_race_o.glb",
    scale: [3, 3, 3],
    offset: [0, -2.5, 0],
  },
  {
    imageSrc: "/storage/model/colosseum.png",
    modelSrc: "/storage/model/colosseum_o.glb",
    scale: [1, 1, 1],
    offset: [0, -10, 0],
  },
  {
    imageSrc: "/storage/model/cottage.png",
    modelSrc: "/storage/model/cottage_o.glb",
    scale: [10, 10, 10],
    offset: [0, -0.5, 0],
  },
  {
    imageSrc: "/storage/model/crushed_chicken.png",
    modelSrc: "/storage/model/crushed_chicken_o.glb",
    scale: [5, 5, 5],
    offset: [0, -1.5, 0],
  },
  {
    imageSrc: "/storage/model/cup.png",
    modelSrc: "/storage/model/cup_o.glb",
    scale: [5, 5, 5],
    offset: [0, -2, 0],
  },
  {
    imageSrc: "/storage/model/hamburger.png",
    modelSrc: "/storage/model/hamburger_o.glb",
    scale: [5, 5, 5],
    offset: [0, -1, 0],
  },
  {
    imageSrc: "/storage/model/hands.png",
    modelSrc: "/storage/model/hands_o.glb",
    scale: [5, 5, 5],
    offset: [-0.5, -2, 0],
  },
  {
    imageSrc: "/storage/model/helmet.png",
    modelSrc: "/storage/model/helmet_o.glb",
    scale: [50, 50, 50],
    offset: [0, -1.8, 0],
  },
  {
    imageSrc: "/storage/model/hologram.png",
    modelSrc: "/storage/model/hologram_o.glb",
    scale: [3, 3, 3],
    offset: [0, -1, 0],
  },
  {
    imageSrc: "/storage/model/hydrant.png",
    modelSrc: "/storage/model/hydrant_o.glb",
    scale: [3, 3, 3],
    offset: [0, -1, 0],
  },
  {
    imageSrc: "/storage/model/industrial_arm.png",
    modelSrc: "/storage/model/industrial_arm_o.glb",
    scale: [1, 1, 1],
    offset: [0, -19, 0],
  },
  {
    imageSrc: "/storage/model/industrial_worker.png",
    modelSrc: "/storage/model/industrial_worker_o.glb",
    scale: [10, 10, 10],
    offset: [0, -1, 0],
  },
  {
    imageSrc: "/storage/model/mouth.png",
    modelSrc: "/storage/model/mouth_o.glb",
    scale: [0.1, 0.1, 0.1],
    offset: [0, -5, 25],
  },
  {
    imageSrc: "/storage/model/park.png",
    modelSrc: "/storage/model/park_o.glb",
    scale: [1, 1, 1],
  },
  {
    imageSrc: "/storage/model/real_hammer.png",
    modelSrc: "/storage/model/real_hammer_o.glb",
    scale: [1, 1, 1],
    offset: [0, -5, 0],
  },
  {
    imageSrc: "/storage/model/revive.png",
    modelSrc: "/storage/model/revive_o.glb",
    scale: [3, 3, 3],
    offset: [0, -1, 0],
  },
  {
    imageSrc: "/storage/model/teddy.png",
    modelSrc: "/storage/model/teddy_o.glb",
    scale: [3, 3, 3],
    offset: [0, -1, 0],
  },
  {
    imageSrc: "/storage/model/tentacles.png",
    modelSrc: "/storage/model/tentacles_o.glb",
    scale: [3, 3, 3],
  },
  {
    imageSrc: "/storage/model/triceratops.png",
    modelSrc: "/storage/model/triceratops_o.glb",
    scale: [2, 2, 2],
  },
  {
    imageSrc: "/storage/model/vest.png",
    modelSrc: "/storage/model/vest_o.glb",
    scale: [30, 30, 30],
    offset: [0, -1.3, 0],
  },
]

export const Model = () => {
  const { createNewModelToSelPage } = useApi()

  return (
    <div className="flex gap-2 flex-wrap">
      {modelArr.map((v, i) => (
        <img
          className="w-32 h-20 border rounded cursor-pointer border-gray-500"
          key={i}
          src={v.imageSrc}
          onClick={() => createNewModelToSelPage(v)}
        />
      ))}
    </div>
  )
}
