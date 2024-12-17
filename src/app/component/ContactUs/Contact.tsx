import Link from "next/link";
import Image from "next/image";
import Form from "../Form";
const Contact = () => {
  return (
    <div className="px-4">
      {/* About Us Section */}
      <div className="text-center py-10">
        <h1 className="text-3xl text-myheading font-semibold mb-6">Contact Us</h1>
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <li>
            <Link href="/home" className="hover:text-red-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/pages" className="hover:text-red-500">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:text-red-500 text-bcolour">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-heading2 mb-4 text-center md:text-4xl">
          Information About Us
        </h1>
        <p className="text-gray-600 text-base leading-relaxed md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
          amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
          quis bibendum quam.
        </p>
        <div>
    <h1 className="text-center text-heading2 justify-center">Contact Way</h1>
</div>
<div className="flex flex-wrap justify-center gap-4">
    
<div className="bg-blue-900 rounded-full h-10 w-10"></div><div className=" rounded-lg shadow-lg p-4 w-70">
        <p className="font-bold">Tel:</p>
        <p>877-67-88-99</p>
        <p className="font-bold">E-Mail:</p>
        <p>shop@store.com</p>
    </div>

    
    <div className="bg-yellow-800 rounded-full h-10 w-10"></div><div className=" rounded-lg shadow-lg p-4 w-70">
        <p className="font-bold">Address:</p>
        <p>20 Margaret st, London</p>
        <p>Great Britain, 3NM98-LK</p>
    </div>

    
    <div className="bg-bcolour rounded-full h-10 w-10"></div><div className=" rounded-lg shadow-lg p-4 w-70">
        <p className="font-bold">Support Forum:</p>
        <p>For over 24hr</p>
    </div>

    
    <div className="bg-green-700 rounded-full h-10 w-10"></div><div className="rounded-lg shadow-lg p-4 w-70">
        <p className="font-bold">Shipping:</p>
        <p>Free standard shipping</p>
        <p>on all orders.</p>
    </div>
</div>

   
    </div>


      </div>
      <div className="flex flex-wrap justify-center gap-4">
    <h1 className="text-xl">Get In Touch</h1>
    <p className="text-center justify-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, praesentium ea sed provident repellat aspernatur at delectus soluta repellendus eius tempore amet, earum non. Veritatis perferendis quia earum corrupti libero.</p>
    <div className="md:w-1/2 w-full flex justify-center"><Form/> 
        <Image
          src="/"
          alt="Image"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>



</div>
      </div>
      )
      }
      export default Contact