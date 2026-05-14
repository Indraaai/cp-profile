"use client";

import SearchOffIcon from "@mui/icons-material/SearchOff";

interface ProductEmptyProps {
  onReset: () => void;
}

export default function ProductEmpty({ onReset }: ProductEmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <SearchOffIcon className="!text-6xl text-slate-400 mb-4" />
      <p className="text-slate-500 text-lg mb-6">
        Tidak ada produk yang sesuai dengan filter yang dipilih.
      </p>
      <button
        onClick={onReset}
        className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
      >
        Reset Filter
      </button>
    </div>
  );
}
