import{
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    CalendarIcon,
    SearchIcon,
    UserIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
function Header () {
    return(
        <header className='flex flex-col sm:flex-row m-3 justify-between
        items-center h-auto'>
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title = 'Home' Icon={HomeIcon} />
                <HeaderItem title = 'Agenda' Icon={CalendarIcon} /> 
                <HeaderItem title = 'Turmas' Icon={UserGroupIcon} /> 
                <HeaderItem title = 'Feed' Icon={CollectionIcon} /> 
                <HeaderItem title = 'Busca' Icon={BadgeCheckIcon} /> 
                <HeaderItem title = 'User' Icon={UserIcon} /> 
                 
               
            </div>
            
                <Image 
                className="object-contain"
                src= "/public/favicon.ico"
                width={200} 
                height={100}
                />
            
        </header>
    )
}

export default Header; 