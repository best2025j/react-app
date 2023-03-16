import React from "react";

export const Header = () => {
  return (
    <div className="h-16 bg-slate-100 w-full">
      <div className="px-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold ">LOGO</h1>
          </div>
          <div className="space-x-4 capitalize flex">
            <ul>
              <li>drops</li>
            </ul>
            <ul>
              <li>rewards</li>
            </ul>
            <ul>
              <li>creators</li>
            </ul>
            <ul>
              <li>community</li>
            </ul>
            <ul>
              <li>roadmap</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
