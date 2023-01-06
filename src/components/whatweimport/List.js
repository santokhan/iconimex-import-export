export default function List({ children }) {
  return <ul className="flex flex-col gap-3">{children}</ul>;
}
export function Item({ children }) {
  return (
    <li className="flex items-center gap-3 text-textgray group">
      <div className="h-3 w-3 bg-purple-500 rounded-full shadow-md shadow-purple-400/75 group-hover:bg-purple-700"></div>
      <div>{children}</div>
    </li>
  );
}
