import bigModLogo from "../../../public/logo.png";
const Header = () => {
  return (
    <div className="w-full   mx-auto bg-[#121212]">
      <div className="px-2 container h-[76px] lg:h-[86px]  mx-auto flex justify-between items-center">
        <div className="max-w-[120px] lg:max-w-[170px]">
          <a href="https://bigmodtech.com/" target="_blank">
            <img
              src={bigModLogo}
              className="w-full"
              alt="BigMod Technologies Logo"
            />
          </a>
        </div>
        <div className="cmn-btn">
          <a href="#addMember">
            <span className="text-xl"> + </span> Add Member
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
