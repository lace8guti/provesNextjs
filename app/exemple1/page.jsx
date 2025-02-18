import Profile from "../../components/ui/Profile.jsx";
import Boto from "./Boto.jsx"
export default function Page() {

    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
      };

    return (
        <>
        <div>
            Hola!!
        </div>
        <Boto text={"Hola"}/>
        <Boto text={"que"}/>
        <Boto text={"tal"}/>
        <Profile user={user}></Profile>
        </>
    )
    
}





  