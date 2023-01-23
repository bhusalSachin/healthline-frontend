//Error component to show below the input field when we catch error
const Error = ({ error }) => {
  if (!error) return null;
  return (
    <div className="w-full text-left">
      <span className="text-red-600 text-[0.5rem] sm:text-sm font-serif font-light">
        {error}
      </span>
    </div>
  );
};

export default Error;
