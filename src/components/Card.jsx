export default function Card({ children }) {
  return <div className="border bg-white rounded w-1/2">{children}</div>;
}

function Title({ children }) {
  return (
    <h3 className="text-lg font-semibold p-3 border-b text-center">
      {children}
    </h3>
  );
}

function Body({ children }) {
  return <div className="p-3">{children}</div>;
}

function Footer({ children }) {
  return <div className="p-3 border-t text-center">{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;
