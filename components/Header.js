import Image from "next/image";
import  {HomeIcon, SearchIcon, PlusIcon, StarIcon } from '@heroicons/react/solid';
import { signIn } from 'next-auth/react';



function Header() {
  return (
    <div className="sticky bg-[#040714] top-0 flex h-[72px] items-center px-10 md:px-12">
      <Image
        className="cursor-pointer"
        src="/images/logo.svg"
        width={80}
        height={80}
      />
      <div className="hidden ml-10 md:flex items-center space-x-6">
      <a className="header-link group">
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="movie-icon" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" alt="series-icon" className="h-5" />
            <span className="span">Series</span>
          </a>
      </div>
      <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200" onClick={signIn}>Login</button>
    </div>
  );
}

export default Header;
