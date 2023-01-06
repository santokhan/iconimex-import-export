import { useContext } from "react";
import { AgriculturalContext } from "../../../context/tabs/AgriculturalContext";

export default function PTabs({ children }) {
  return (
    <div className="flex justify-center border-b pt-12 w-full overflow-x-auto overflow-y-hidden">
      {children}
    </div>
  );
}

export function Tab({ children, id }) {
  const { tab, handleTab } = useContext(AgriculturalContext);

  return (
    <button
      type="button"
      onClick={() => {
        handleTab(id);
      }}
      className={
        id === tab
          ? "text-blue-500 font-medium lg:text-lg mx-4 py-2 border-b-2 border-blue-500 -mb-[1px]"
          : "text-textgray font-medium lg:text-lg mx-4 py-2 border-b-2 border-transparent -mb-[1px]"
      }
    >
      {children}
    </button>
  );
}
