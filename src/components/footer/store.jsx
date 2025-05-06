const IconsConnect = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 stroke-slate-50"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
    text: (
      <a
        href="https://www.google.com/maps/place/São+José+dos+Campos,+SP"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-50 text-base font-normal hover:underline underline-offset-2"
      >
        São José dos Campos,
        <br /> <span className="font-bold">São Paulo - Brasil</span>
      </a>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 stroke-slate-50"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
        />
      </svg>
    ),
    text: (
      <a
        href="mailto:eduardo.silvamachado07@gmail.com"
        className="text-slate-50 text-base font-normal hover:underline underline-offset-2"
      >
        eduardo.silvamachado07@gmail.com
      </a>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 stroke-slate-50"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
        />
      </svg>
    ),
    text: (
      <a
        href="https://wa.me/5512992133716"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-50 text-base font-normal hover:underline underline-offset-2"
      >
        +55 (12) 99213-3716
      </a>
    ),
  },
];

import LinkedIn from "./svg/linkedin.png";
import Github from "./svg/github";
import Instagram from "./svg/insta";
import Discord from "./svg/discord";

const SocialMedia = [
  {
    href: "https://github.com/EduMachado07",
    content: <Github />,
  },
  {
    href: "https://www.linkedin.com/in/eduardo-machado-dev/",
    content: <img src={LinkedIn} alt="LinkedIn" />,
  },
  {
    href: "https://www.instagram.com/du_machdo/",
    content: <Instagram />,
  },
  {
    href: "https://discord.com/users/503552668304670730",
    content: <Discord />,
  },
];

export { IconsConnect, SocialMedia };
