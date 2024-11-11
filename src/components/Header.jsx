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
    <header className="py-2 px-10 flex justify-between border-b-2 border-gray-500">
      <h1 className="font-semibold text-lg">Company name</h1>
      <nav>
        <ul className="flex gap-5">
          <li>
            <a href="#" className="text-lg underline underline-offset-4">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="text-lg underline underline-offset-4">
              Enterprise
            </a>
          </li>
          <li>
            <a href="#" className="text-lg underline underline-offset-4">
              Support
            </a>
          </li>
          <li>
            <a href="#" className="text-lg underline underline-offset-4">
              Home
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
