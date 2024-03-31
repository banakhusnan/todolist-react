export default function Button({ type = "submit", children, ...props }) {
  return (
    <button
      {...props}
      type={type}
      className={"bg-slate-900 px-3 py-2 rounded text-white w-32"}
    >
      {children}
    </button>
  );
}
