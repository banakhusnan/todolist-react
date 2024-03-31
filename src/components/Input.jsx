export default function Input({ type, name, id, ...props }) {
  return (
    <input
      {...props}
      type={type}
      name={name}
      id={id}
      className="border rounded py-2 px-1 w-full"
    />
  );
}
