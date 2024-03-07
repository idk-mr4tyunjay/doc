import { motion } from "framer-motion"

function Marquee() {
  return (
    <div className="w-full py-20 rounded-3xl bg-[#004D43]">

        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden gap-10">

            <h1 className="text-[15vw] leading-none font-[Founders_Grotesk_x_condensed] uppercase -mb-20 pt-10">we are osm</h1>

            <h1 className="text-[15vw] leading-none font-[Founders_Grotesk_x_condensed] uppercase -mb-20 pt-10">we are osm</h1>

        </div>
    </div>
  )
}

export default Marquee