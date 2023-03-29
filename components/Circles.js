import {motion} from 'framer-motion'

export default function Circles()  {
  return (
    <motion.div
    initial={{
      opacity: 0
    }}
    animate={{
      scale: [1,2,2,3,1],
      opacity: [0.1,0.2,0.8,0.1,1.0],
      borderRadius: ["20%","20%","50%","80%","20%"]
    }}
     className='hidden absolute md:flex justify-center items-center'>
        <div className='absolute border border-dotted border-[#62bdd9] border-spacing-52 rounded-full h-[100px] w-[100px] mt-52 animate-ping'></div>
        <div className='absolute border border-dotted border-[#62bdd9] border-spacing-52 rounded-full h-[200px] w-[200px] mt-52'></div>
        <div className='absolute border border-dotted border-[#62bdd9] border-spacing-52 rounded-full h-[300px] w-[300px] mt-52'></div>
        <div className='absolute border border-dotted border-[#62bdd9] border-spacing-52 rounded-full opacity-20 h-[400px] w-[400px] mt-52 animate-pulse'></div>
        <div className='absolute border border-dotted border-[#62bdd9] border-spacing-52 rounded-full h-[500px] w-[500px] mt-52'></div>
    </motion.div>
  )
}