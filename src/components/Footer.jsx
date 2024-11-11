const Footer = () => {
  return (
    <footer className="flex gap-4 text-center justify-evenly ">
      <div>
        <p className="font-semibold text-lg mb-2">Features</p>
        <ul className="underline">
          <li>Cool Stuff</li>
          <li>Random Feature</li>
          <li>Team Feature</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold text-lg mb-2">Resources</p>
        <ul className="underline">
          <li>Resource</li>
          <li>Resource Name</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold text-lg mb-2">About</p>
        <ul className="underline">
          <li>Team</li>
          <li>Location</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
