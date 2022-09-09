import Image from "next/image";

const Design2 = () => {
    return (
        <div className="my-5 mx-3">
            <div className="bg-white rounded-md overflow-hidden md:rounded-3xl md:flex md:w-full lg:w-3/4 md:mx-auto ">
                <div className="w-full h-56 relative md:hidden">
                    <Image priority src="/design2/images/image-product-mobile.jpg" layout="fill"   objectFit="cover" objectPosition="top"  />
                </div>
                <div className="hidden md:block md:relative md:w-1/2 md:h-auto">
                    <Image priority src="/design2/images/image-product-desktop.jpg" layout="fill"   objectFit="cover" objectPosition="center"  />
                </div>

                <div className="flex flex-col bg-white px-3 md:w-1/2 md:px-5 py-5">
                    <p className="mt-4 tracking-widest uppercase font-montserrat text-design2-Dark-grayish-blue font-semibold">Perfume</p>
                    <p className="mt-2 text-4xl font-montserrat font-bold">Gabrielle Essence Eau De Parfum</p>
                    <p className="mt-3 text-design2-Dark-grayish-blue font-montserrat font-medium">A floral, solar and voluptuous interpretation composed by Oliver Pomde, Perfumer-creator for the house of CHANEL</p>
                    <div className="mt-3 flex items-center">
                        <span className="text-4xl font-fraunces font-bold text-design2-dark-cyan">$149.99</span>
                        <span className="ml-3 text-1xl font-fraunces line-through font-normal text-design2-very-dark-blue">$169.99</span>
                    </div>
                    <button>
                        <div className="flex justify-center space-x-3 items-center my-4 bg-design2-dark-cyan py-3 rounded-md">
                            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/></svg>
                            <span className="text-white font-montserrat font-semibold">Add to cart</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Design2