import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";

const Header = () => {
  const location = useLocation();
  return (
    <div className="bg-n-8/90 fixed left-0 top-0 z-50 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdropbackdrop-blur-sm w-full">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 py-2">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img
            src={brainwave}
            alt="brainwave"
            width={190}
            height={40}
          />
        </a>
        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative flex flex-col justify-center items-center z-2 m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${
                  location.hash === item.url
                    ? "z-2 lg:text-n-1"
                    : "text-n-1/50"
                } leading-5 lg:hover:text-n-1 xl:px-12`}
                key={item.id}
                href={item.url}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <a
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          href="#signup"
        >
          New Account
        </a>
        <Button className="hidden lg:flex">Sign in</Button>
      </div>
    </div>
  );
};

export default Header;
