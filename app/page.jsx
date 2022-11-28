import Image from 'next/image'
import Card from '../components/card'
import { cars } from '../constant/cars'

export default function Home() {

  return (
    <div className="bg-very-light-gray md:h-screen flex justify-center md:items-center ">
      <div className="w-11/12 md:w-4/5 lg:w-cardContainer md:h-3/4 flex flex-col md:flex-row rounded-lg overflow-hidden ">
        {cars.map((car, index) =>
          <Card key={index} title={car.title} body={car.body} color={car.color} icon={car.icon} />
        )}
      </div>
    </div>
  )
}
