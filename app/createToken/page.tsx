"use client";
type TokenDecimal = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export default function createTokenPage() {
  return (
    <div
      className="m-5 p-6 rounded-lg shadow-lg bg-zinc-200 max-auto border-gray-200 min-h-screen"
      id="总块"
    >
      <div className="" id="表单">
        <div id="title" className="text-center text-3xl ">
          Create Your Own Token
        </div>
        <div className="pt-8 flex" id="表单上部">
          <div className="w-4/10" id="表单上左部">
            <div className="" id="上传LOGO"></div>
            <div className="" id="外部链接"></div>
          </div>
          <div className="flex flex-col space-y-4 w-6/10" id="表单上右部">
            <div className="ml-1 text-lg">Your Token Name:</div>
            <input
              type="text"
              className="input-basic"
              id="TokenName"
              placeholder="TokenName"
            />

            <div className="ml-1 text-lg">Your Token Symbol:</div>
            <input
              type="text"
              maxLength={8}
              className="input-basic"
              id="TokenSymbol"
              placeholder="TokenSymbol"
              onChange={(e) => {
                const input = e.target as HTMLInputElement;
                input.value = input.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
              }}
            />

            <div className="ml-1 text-lg">Your Token Decimal:</div>
            <input
              type="number"
              min={0}
              max={9}
              step={1}
              onChange={(e) => {
                const input = e.target as HTMLInputElement;
                if (input.value === "") return;
                const value = parseInt(input.value);
                if (!Number.isInteger(value) || value < 0 || value > 9) {
                  input.value = "9";
                }
              }}
              className="input-basic"
              id="TokenDecimal"
              placeholder="TokenDecimal"
            />

            <div className="ml-1 text-lg">Your Total Supply:</div>
            <input
              type="number"
              min={0}
              className="input-basic"
              id="TokenSupply"
              placeholder="TokenSupply"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
