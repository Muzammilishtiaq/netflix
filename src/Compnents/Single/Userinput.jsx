export const Message = ({ lable, placeholder }) => {
  return (
    <div className="text-sm w-full">
      <lable className="text-border font-semibold mt-3">{lable}</lable>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        className="w-full h-40 mt-4 p-6 border border-border bg-main  rounded focus:border-primary"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export const Select = ({ lable, options, onChange }) => {
  return (
    <>
      <lable className="text-order font-semibold">{lable}</lable>
      <select
        name=""
        id=""
        className="w-full px-6 py-4 bg-main border border-border rounded placeholder:text-text text-black"
        onChange={onChange}
      >
        {options.map((o, i) => (
          <option value={o.value} key={i}>
            {o.title}
          </option>
        ))}
      </select>
    </>
  );
};

export const Input = ({ lable,placeholder,type,bg }) => {
  return (
    <div className="text-sm w-full">
    
      <lable className="text-md font-bold text-border">{lable}</lable>
      <input type={type} placeholder={placeholder} className={`w-full text-sm mt-2 p-5 border border-border rounded text-white ${bg?"bg-main":"bg-dry"}`} />
    </div>
  );
};