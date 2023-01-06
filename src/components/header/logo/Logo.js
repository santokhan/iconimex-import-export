import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img
        src="/images/logo.png"
        alt="logo"
        className="h-8 lg:h-10 object-contain"
      />
    </Link>
  );
}
