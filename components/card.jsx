import Image from "next/image"

function Card({ title, body, color, icon }) {
    return (
        <div className={`bg-${color} p-12 flex flex-col items-start justify-between`}>

            <div className="space-y-10">
                <Image src={`/images/${icon}`} width={64} height={40} alt="icon" className="" />
                <h1 className="font-bigShoulderDisplay text-4xl font-bold text-veryLightGray ">{title}</h1>
                <p className="text-15px font-lexendDeca text-transparentWhite">{body}</p>
            </div>


            <button className={`text-${color} bg-veryLightGray py-3 px-8 rounded-full font-lexendDeca text-15px mt-12 md:mt-0 hover:bg-transparent hover:text-veryLightGray border-2 hover:border-veryLightGray `}>Learn More</button>
        </div>
    )
}

export default Card