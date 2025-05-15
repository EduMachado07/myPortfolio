const Title = ({ font, title }) => {
  return (
    <h1
      className={`inter-extrabold ${font} text-pretty bg-gradient-to-l from-[#4da6ff] via-[#0077ff] to-[#005fcc] bg-clip-text text-transparent`}
    >
      {title}
    </h1>
  );
};
export default Title;
