import Link from "next/link";



const NavLink = ({ category, isActive}) => {

  return (
    <>
          <Link href={`/${category}`} className={`text-base hover:underline hover:scale-110 transition-transform duration-200 
          decoration-[#3282AD] underline-offset-8
          ${isActive && "underline decoration-[#3282AD] underline-offset-8 font-bold text-lg"}`}>
            {category}
          </Link>
    </>
  )
}

export default NavLink