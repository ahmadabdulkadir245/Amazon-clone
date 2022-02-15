import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue  p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/amazon-logo.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400  hover:bg-yellow-500 ">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow  flex-shrink rounded-l-md focus:outline-none"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/*  Right*/}
        <div className="flex text-white text-xs items-center space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Ahmad Abdulkadir</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& orders</p>
          </div>
          <div className="link flex items-center relative ">
            <span className="absolute top-0 right-0 md:right-10 h-4 text-xs w-4 bg-yellow-400 rounded-full  text-center text-black items-center">
              0
            </span>
            <ShoppingCartIcon className="h-10 " />
            <p className="hidden sm:inline font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex items-center p-2 pl-2 bg-amazon_blue-light space-x-5 text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video </p>
        <p className="link">Amazon Business </p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Person Care</p>
      </div>
    </header>
  );
}

export default Header;
