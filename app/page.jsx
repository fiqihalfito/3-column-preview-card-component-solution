import Image from 'next/image'
import Card from '../components/card'
import { cars } from '../constant/cars'

export default function Home() {

  return (
    <div className="bg-very-light-gray h-screen flex justify-center items-center ">
      <div className="w-cardContainer h-3/4 flex rounded-lg overflow-hidden">
        {cars.map((car, index) =>
          <Card key={index} title={car.title} body={car.body} color={car.color} icon={car.icon} />
        )}
      </div>
    </div>
  )
}
