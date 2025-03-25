import React from "react";

const Token = ({ token, setToken, error }) => {
  return (
    <div className="py-[10px] px-[30px]">
      <div className="font-bold text-[#01427a] mt-[25px] mb-[15px]">
        <h1>Verified Token</h1>
      </div>
      <div className="grid grid-cols-3 gap-[15px] w-full">
        <div>
          <label
            htmlFor="Token"
            className="block font-bold text-[#808080] text-[16px] mb-[5px]"
          >
            Token
          </label>
          <input
            type="text"
            value={token}
            placeholder="Enter Copied Token"
            onChange={(e) => setToken(e.target.value)}
            required
            className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] text-[14px] bg-white outline-none placeholder:text-[#0b0a0a33]"
          />
          {error && (
            <p className="text-[12px] font-bold mt-[2px] text-[rgba(242,100,92,1)]">
              {error}
            </p>
          )}
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Token;
