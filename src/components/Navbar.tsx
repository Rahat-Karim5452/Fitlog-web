import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import NavbarCounters from "./NavbarCounters";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <div className="flex items-center gap-2">
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-(--background)] text-(--foreground)] border border-white/10 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="FitLog Logo" width={30} height={30} />
            <span className="text-xl font-bold tracking-wide">FITLOG</span>
          </Link>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-2 list-none">
            <NavLinks />
          </div>
        </div>
        {/* Count er Jnno:  */}
        <NavbarCounters />
      </div>
    </nav>
  );
};

export default Navbar;
