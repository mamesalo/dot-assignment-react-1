import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    {
      label: "Features",
      to: "features",
    },
    {
      label: "Enterprise",
      to: "enterprise",
    },
    {
      label: "Support",
      to: "support",
    },
    {
      label: "Home",
      to: "home",
    },
  ];
  return (
    <header className="py-2 px-10 flex justify-between border-b-2 ">
      <h1 className="font-semibold text-lg">Company name</h1>
      <nav>
        <ul className="flex gap-5">
          {navLinks.map((item, index) => (
            <Link
              to={item.to}
              key={index}
              className="text-lg underline underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
