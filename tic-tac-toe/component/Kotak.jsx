function Kotak({ value, handleClick }) {
  return (
    <button onClick={handleClick} className="border border-slate-700 w-[100px] h-[100px]">{value ? value : ''}</button>
  )
}

export default Kotak