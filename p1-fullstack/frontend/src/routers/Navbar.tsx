import { Link } from "react-router-dom";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";


const routes = [
    {element:"Home", path:"/"},
    {element:"Post",path:"/post"},
    {element:"Admin",path:"/admin"},
    {element:"Debounce",path:"/debounce"},
    {element:"Throtling",path:"/throtling"}
]

const Navbar = () => {
  const Navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : {email:"Loged Out"};
  const {isDark, toggleTheme} = useTheme()

    return <div className="flex justify-between items-center w-full h-20 bg-gray-100">
        <div className="w-1/4 h-full flex justify-center items-center">
          <p className="text-2xl font-bold">Logo</p>
        </div>
        <div className="w-1/2 h-full flex justify-center gap-8 items-center">
          {
            routes.map((nav,i)=>{
                return <Link to={nav.path} key={i}><p className="text-xl font-semibold">{nav.element}</p></Link>
            })
          }
        </div>
        <div className="w-1/4 flex gap-8 justify-end px-5 items-center h-full">
        <p>{user.email}</p>
          {isDark ? <IoSunny size={40} onClick={toggleTheme} className="hover:text-orange-300 hover:cursor-pointer" />
          :<FaMoon size={30} onClick={toggleTheme} className="hover:text-orange-300 hover:cursor-pointer"/>}
          <RiAccountPinCircleFill
            size={40}
            onClick={()=>Navigate("/login")}
            className="hover:text-blue-500 hover:cursor-pointer"
          />
        </div>
    </div>
}

export default Navbar