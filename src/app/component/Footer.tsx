import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-background text-gray-400 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            {/* Logo Section */}
            <div className="w-full md:w-1/4 text-center md:text-left mb-8 md:mb-0">
              <Image
                src="/Hekto.png"
                alt="Logo"
                width={98}
                height={34}
                className="weight-700 size-[34px] line height-[34px] font-sans text-1x text-[#ODOE43] top-3px"
              />
              <p className="text-sm">© 2024 Company Name. All rights reserved.</p>
            </div>

            {/* Categories Section */}
            <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
              <h4 className="text-lg text-1heading font-semibold mb-4">Categories</h4>
              <ul>
                <li>
                  <Link href="#" className="text-sm hover:text-heading2">
                    Laptop & Computer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-heading2">
                    Camera & Photography
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-heading2">
                    Smart Phone & Tablet
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-heading2">
                    Waterproof Headphone
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Care Section */}
            <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
              <h4 className="text-lg text-heading2 font-semibold mb-4">Customer Care</h4>
              <ul>
                <li>
                  <Link href="#" className="text-sm hover:text-blue-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-blue-400">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-blue-400">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-blue-400">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>

            {/* Pages Section */}
            <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
              <h4 className="text-lg font-semibold mb-4">Pages</h4>
              <ul>
                <li>
                  <Link href="#" className="text-sm hover:text-blue-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-blue-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-blue-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-blue-400">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
