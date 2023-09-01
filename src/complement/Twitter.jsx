function Twitter() {
  return (
    <div className="mb-96 bg-lime-100 py-5 px-10 ">
        <div className="max-w-sm dark:bg-slate-400 relative mx-auto px-5 py-10 rounded-xl shadow-xl flex items-center justify-evenly overflow-visible">
        <span className="absolute w-6 text-center text-white font-semibold -right-0.5 -top-0.5 bg-red-500 rounded-full hover:bg-red-700 shadow-sm">x</span>
        <img className="h-20 " src="/img/image.png" alt="twitter"/>
        <div className="font-bold text-6xl bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            twitter
        </div>
        </div>
    </div>
  )
}

export default Twitter