import TextCursor from "./TextCursor.jsx";

const Navbar = () => {
    const navLinks=[{id:1,name:"HOME"},{id:2,name:"Project"},  {id:3,name:"ABOUT"},{id:4,name:"CONTACT"}]

    return(
        <div className={`bg-white rounded-sm w-1/2 flex justify-around text-gray-900`}>


            {navLinks.map((link)=>(
                <a href={`#${link.name}`} className={`p-1`} key={link.id}>{link.name}</a>
            ))}



        </div>
    )
}


export default Navbar