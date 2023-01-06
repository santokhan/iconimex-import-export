export default function PHeader({ children }) {
  return <div className="text-center flex flex-col gap-4 px-4">{children}</div>;
}
export function PIcon({ children }) {
  return <div className="flex justify-center">{children}</div>;
}
export function PTitle({ children }) {
  return <div className="text-2xl font-bold uppercase">{children}</div>;
}
export function PDes({ children }) {
  return <div className="text-textgray">{children}</div>;
}
