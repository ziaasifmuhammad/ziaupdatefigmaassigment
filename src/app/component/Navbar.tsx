
import Image from "next/image"
import { Link, Search } from 'lucide-react';

const Navbar = () => {
    return (
        <div>
            <nav className="w-full  py-3 px-4  text-[# 151875]text-inherit flex flex-wrap justify-between items-center">
                {/* Logo Section */}
                <div className="flex text- items-center space-x-3">
                    <Image 
                        src="/Hekto.png" 
                        alt="Logo" 
                        width={98} 
                        height={34} 
                        className="font-sans"
                    />
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex text-1heading md:space-x-8 text-sm">
                    <li><Link href="/" className="hover:text-[#FB2E86] opacity-5">Home</Link></li>
                    <li><Link href="/pages" className="hover:text-red-500">Pages</Link></li>
                    <li><Link href="/product" className="hover:text-red-500">Product</Link></li>
                    <li><Link href="/blog" className="hover:text-red-500">Blog</Link></li>
                    <li><Link href="/shop" className="hover:text-red-500">Shop</Link></li>
                    <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
                </ul>

                {/* Search Section */}
                <div className="flex items-center space-x-2">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="hidden md:block w-40 h-8 px-2 border rounded"
                    />
                    <button className="p-2 bg-white border rounded">
                        <Search size={20} />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden  bg-background flex items-center">
                    <button className="p-2">
                        {/* Replace with a hamburger menu icon */}
                        <Search size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            <div className="md:hidden bg-slate-300 w-full flex flex-col space-y-2 px-4 py-2">
                <Link href="/" className="hover:text-red-500">Home</Link>
                <Link href="" className="hover:text-red-500">Page</Link>
                <Link href="" className="hover:text-red-500">Product</Link>
                <Link href="" className="hover:text-red-500">Blog</Link>
                <Link href="" className="hover:text-red-500">Shop</Link>
                <Link href="" className="hover:text-red-500">Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;
