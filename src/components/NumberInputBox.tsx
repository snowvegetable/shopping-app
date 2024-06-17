export default function NumberInputBox({
  min,
  max,
  value,
  setValue,
  className = 'h-10',
}: {
  min: number;
  max: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
}) {
  //新增商品數量
  const productIncrement = () => {
    setValue((prev) => (prev < max ? prev + 1 : max));
  };

  //刪除商品數量
  const productDecrement = () => {
    setValue((prev) => (prev > min ? prev - 1 : min));
  };

  //輸入商品數量
  const changeProductInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(() => {
      if (newValue > max) {
        return max;
      }

      if (newValue < min) {
        return min;
      }

      return newValue;
    });
  };

  return (
    <div className={`flex items-center ${className}`}>
      <span className="mr-5 text-xl align-middle">數量</span>
      <button
        className="w-10 h-full border-2 rounded-l-md"
        onClick={productDecrement}
      >
        -
      </button>
      <input
        className="text-center h-full border-y-2 outline-none"
        type="number"
        min={1}
        value={value}
        onChange={changeProductInput}
      />
      <button
        className="w-10 h-full border-2 rounded-r-md"
        onClick={productIncrement}
      >
        +
      </button>
    </div>
  );
}
