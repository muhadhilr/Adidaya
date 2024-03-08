const Input = ({ children, placeholder, type, onChange = () => {} }) => {
  return (
    <div className="my-3">
      <label htmlFor={children} className="text-purple font-bold">
        {children}
      </label>
      <input
        type={type}
        className="bg-white w-full rounded-3xl p-2.5 pl-5 focus:outline-none placeholder-purple-ph mt-2"
        placeholder={placeholder}
        id={children}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
