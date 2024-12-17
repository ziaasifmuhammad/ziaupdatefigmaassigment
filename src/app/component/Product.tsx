import Link from "next/link";
import Image from "next/image"

const Product = () => {
    return (
        <div>
<h1 className="text-center text-myheading justify-center text-5xl">Leatest Products</h1>
<ul className="flex  ml-11 pt-3 items-center justify-center  align-bottom space-x-10">
                  <li> <Link href="/" className="hover:text-bcolour">New Arrival</Link> </li>
                  <li> <Link href="">Best Seller</Link> </li>
                  <li> <Link href="">Featured</Link> </li>
                  <li> <Link href="">Special Offer</Link> </li>
                  </ul>

                  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/chair.png"
          alt="image"
          width={250}
          height={150}
          className="w-400 h-65 object-cover"
        />
        <div className="flex  gap-11 mt-11 pl-4">
          <h2 className="text-xs  text-center justify-center font-bold mb-2">Comfort Handy Craft</h2>
          <p className="text-gray-600 text-center justify-center">$ 42.00</p>
        </div>
      </div>

      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/chair 1.png" 
          alt="coin"
          width={400}
          height={350}
          className="w-400 h-65 object-cover"
        />
        <div className="flex  gap-11 mt-11 pl-4">
          <h2 className="text-xs  text-center text-heading2 justify-evenly font-bold mb-2">Comfort Handy Craft</h2>
          <p className="text-gray-600 text-center justify-center">$ 42.00</p>
        </div>
      </div>

      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/chair 2.png" 
          alt="image"
          width={400}
          height={350}
          className="w-400 h-65 object-cover"
        />
        <div className="flex  gap-11 mt-11 pl-4">
          <h2 className="text-xs text-center text-heading2 justify-center font-bold mb-2">Comfort Handy Craft</h2>
          <p className="text-gray-600 text-center justify-center">$ 42.00</p>
        </div>
      </div>

    
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/chair 3.png" 
          alt="image"
          width={400}
          height={350}
          className="w-400 h-65 object-cover"
        />
        <div className="flex  gap-11 mt-11 pl-4">
          <h2 className="text-xs  text-center text-heading2 justify-center font-bold mb-2">Comfort Handy Craft</h2>
          <p className="text-gray-600 text-center justify-center">$ 42.00</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/chair 4.png" 
          alt="image"
          width={400}
          height={350}
          className="w-400 h-65 object-cover"
        />
        <div className="flex  gap-11 mt-11 pl-4">
          <h2 className="text-xs  text-center text-heading2 justify-center font-bold mb-2">Comfort Handy Craft</h2>
          <p className="text-gray-600 text-center justify-center">$ 42.00</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/chair 5.png" 
          alt="image"
          width={400}
          height={350}
          className="w-400 h-65 object-cover"
        />
        <div className=" flex  gap-11 mt-11 pl-4">
          <h2 className="text-xs  text-center text-heading2 justify-center font-bold mb-2">Comfort Handy Craft</h2>
          <p className="text-gray-600 text-center justify-center">$42.00</p>
        </div>
      </div>
    </div>
  </div>
  </div>



    
        
    )
}
 export default Product