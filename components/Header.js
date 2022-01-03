import Image from "next/image";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Header() {
  const { session } = useSession();
  const router = useRouter();

  return (
    <header className="sticky bg-[#040714] top-0 flex h-[72px] items-center px-10 md:px-6 lg:px-10 z-10">
      <Image
        className="cursor-pointer"
        src="/images/logo.svg"
        width={80}
        height={80}
        onClick={() => router.push('/')}
      />
      {!session && (
        <nav className="hidden lg:ml-10 md:flex items-center lg:space-x-6 md:space-x-3 md:ml-3">
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
            <img
              src="/images/movie-icon.svg"
              alt="movie-icon"
              className="h-5"
            />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img
              src="/images/series-icon.svg"
              alt="series-icon"
              className="h-5"
            />
            <span className="span">Series</span>
          </a>
        </nav>
      )}

      {!session ? (

      <button
        className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200 md:px-2 lg:px-6"
        onClick={signIn}
      >
        Login
      </button>
      ) : <img src={session.user.image} alt="avatar" className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer" onClick={signOut} />}
    </header>
  );
}

export default Header;

