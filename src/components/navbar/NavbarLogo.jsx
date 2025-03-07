import nameIcon from "../../assets/name-logo.svg";

const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      <img src={nameIcon} alt="Aryan Logo" className="w-20 h-16" />
    </div>
  );
};

export default NavbarLogo;
