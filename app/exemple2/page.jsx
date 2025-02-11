import Profile from "@/components/ui/Profile"
import Boto from "../exemple1/Boto"

export default function Page(){

    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
      };

    return (
     <Card title={"hola"} footer={"adeuuu"}>
        <Profile user={user}></Profile>
        <Boto text={"Enviar email"}></Boto>
     </Card>
    )
}

function Card({title, footer, children}){
    return(
        <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
        {/*Header*/}
        <div className="text-lg font-semibold border-b pb-2">{title}</div>
        {/*Contingut*/}
        <div className="flex flex-col items-center py-4">
            {children}
        </div>
        
            {/*Footer*/}
            <div className="border-t pt-2 text-sm text-gray-500">{footer}</div>
        </div>
    )
};

