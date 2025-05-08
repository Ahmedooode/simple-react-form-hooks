export default function MyInput({ value, handelChange, inputName }) {
  return (
    <>
      <label className="label">{inputName}</label>
      <input
        value={value}
        onChange={(event) => {
          handelChange(event.target.value);
        }}
        className="input"
        type="text"
      />
    </>
  );
}
