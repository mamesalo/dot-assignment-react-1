const Footer = () => {
  return (
    <footer className="flex gap-4 text-center justify-evenly border-t-2 border-gray-500 pt-2">
      <div>
        <p className="font-semibold text-lg mb-2">Features</p>
        <ul className="underline">
          <li>
            <a href="#" className="text-blue-800">
              Cool Stuff
            </a>
          </li>
          <li>
            <a href="#">Random Feature</a>
          </li>
          <li>
            <a href="#">Team Feature</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="font-semibold text-lg mb-2">Resources</p>
        <ul className="underline">
          <li>
            <a href="#">Resource</a>
          </li>
          <li>
            <a href="#">Resource Name</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="font-semibold text-lg mb-2">About</p>
        <ul className="underline">
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
