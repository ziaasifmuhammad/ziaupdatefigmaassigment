
import Image from "next/image"
const Shopex = () =>  {
    return (
        <div>
            <h1 className="text-5xl text-myheading text-center justify-center">What Shopex Offer!</h1>
            
            

        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
          <div className="bg-background shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/van.jpg"
              alt="van"
              width={250}
              height={150}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl  text-center text-heading2 justify-center font-bold mb-2">24/7 Support</h2>
              <p className="text-gray-600 text-center justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>

          
          <div className="bg-background shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/coin.jpg" 
              alt="coin"
              width={400}
              height={350}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl text-center text-heading2 justify-center font-bold mb-2">24/7 Support</h2>
              <p className="text-gray-600 text-center justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
  
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/bit.jpg" 
              alt="image"
              width={400}
              height={350}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl text-center text-heading2 justify-center font-bold mb-2">24/7 Support</h2>
              <p className="text-gray-600 text-center justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
  
        
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/seven.png" 
              alt="image"
              width={400}
              height={350}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl  text-center  text-heading2 justify-center font-bold mb-2">24/7 Support</h2>
              <p className="text-gray-600 text-center justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
        
    )
    }

    export default Shopex
