import Link from "next/link";
import Form from "../Form";
import Image from "next/image";
const FaqInn = () => {
    return (
        <div className="px-4">
            {/* Header Section */}
            <div className="text-center py-10">
                <h1 className="text-3xl  text-myheading font-semibold mb-6">FAQ</h1>
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
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>

            {/* FAQ and Form Section */}
            <div className="lg:flex lg:items-start lg:gap-8">
                {/* FAQ Section */}
                <div className="flex-1 space-y-8">
                    {/* FAQ Item 1 */}
                    <div className="faq-item flex flex-col lg:flex-row lg:items-start lg:gap-8">
                        <div className="flex-1">
                            <h2 className="text-lg text-heading2 font-semibold mb-2">Eu dictumst cum at sed euismood condimentum?</h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita, <br /> tempore culpa optio, nobis repellendus quisquam facere quo, amet blanditiis atque sit.
                            </p>
                        </div>
                    </div>

                    {/* FAQ Item 2 */}
                    <div className="faq-item flex flex-col lg:flex-row lg:items-start lg:gap-8">
                        <div className="flex-1">
                            <h2 className="text-lg text-heading2 font-semibold mb-2">Magna bibendum est fermentum eros.</h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita, <br /> tempore culpa optio, nobis repellendus quisquam facere quo, amet blanditiis atque sit.
                            </p>
                        </div>
                    </div>

                    {/* FAQ Item 3 */}
                    <div className="faq-item flex flex-col lg:flex-row lg:items-start lg:gap-8">
                        <div className="flex-1">
                            <h2 className="text-lg text-heading2 font-semibold mb-2">Odio muskana hak eris conseekin sceleton?</h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita, <br /> tempore culpa optio, nobis repellendus quisquam facere quo, amet blanditiis atque sit.
                            </p>
                        </div>
                    </div>

                    {/* FAQ Item 4 */}
                    <div className="faq-item flex flex-col lg:flex-row lg:items-start lg:gap-8">
                        <div className="flex-1">
                            <h2 className="text-lg text-heading2 font-semibold mb-2">Elit id blandit sabara boi velit gua mara?</h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita, <br /> tempore culpa optio, nobis repellendus quisquam facere quo, amet blanditiis atque sit.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="mt-10 lg:mt-0 lg:w-1/3">
                    <Form />
                </div>
            </div>
            <div className=" flex m-4 p-10 text-center justify-center">
                      <Image
                            src="/Background.png"
                            alt="Image"
                            width={500}
                            height={300}
                            className="rounded-lg"
                          />
                  </div>
        </div>

    );
};

export default FaqInn;
