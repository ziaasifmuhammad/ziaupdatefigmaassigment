import Link from "next/link";
import Image from "next/image";
import Form from "../Form";
const FoundError = () => {
  return (
    <div className="px-4">
      {/* 404 not found */}
      <div className="text-center py-10">
        <h1 className="text-3xl text-myheading font-semibold mb-6">404 NOT FOUND</h1>
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
              404 Not Found
            </Link>
          </li>
        </ul>
      </div>
      <div className=" flex text-center justify-center">
          <Image
                src="/factory Image.jpg"
                alt="Image"
                width={500}
                height={500}
                className="rounded-lg"
              />
      </div>
      <div>
        <p className="text-center justify-center"> The page you requested was not found!</p>
      </div>
      <div>
      <div className="text-center justify-center">
                        <button
                            type="submit"
                            className="w-70 bg-bcolour text-center text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Send Mail
                        </button>
                    </div>
      </div>
      </div>
      )
      }
      export default FoundError