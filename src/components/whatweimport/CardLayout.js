export function Row({ children }) {
  return (
    <div className="h-full flex flex-wrap bg-white rounded-[2rem] p-3 shadow-2xl shadow-gray-100 hover:-translate-y-1 transition-all ease-out duration-200">
      {children}
    </div>
  );
}
export function Col({ children, order }) {
  return (
    <div
      className={
        order === 1 ? "w-full lg:w-1/2 order-1" : "w-full lg:w-1/2 order-2"
      }
    >
      {children}
    </div>
  );
}
export function Box({ children }) {
  return <div className="p-5 flex flex-col gap-3">{children}</div>;
}
export function Title({ children }) {
  return <div className="text-xl font-bold">{children}</div>;
}
