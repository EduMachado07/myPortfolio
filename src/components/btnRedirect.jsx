import { Link } from "react-router-dom";

const BtnRedirect = ({ link, content }) => {
  return (
    <Link
      to={link}
      className="group flex items-center justify-center gap-2 inter-regular"
    >
      {content}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-5 max-w-0 opacity-0 translate-x-[-4px] overflow-hidden transition-all duration-300 group-hover:max-w-[20px] group-hover:opacity-100 group-hover:translate-x-0"
      >
        <path
          fillRule="evenodd"
          d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
};

export default BtnRedirect;
