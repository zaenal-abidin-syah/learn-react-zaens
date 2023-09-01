function Class() {
  return (
    <div className="bg-slate-100 text-center py-10 px-2">
      <h1 className="text-primary text-3xl">Skill</h1>
      <div className="flex gap-2 flex-wrap justify-center">
        <div className="w-[30%] h-44 shadow-md rounded-md bg-slate-200 flex flex-col justify-evenly items-center gap-4">
          <h2 className="text-3xl bg-primary text-slate-50 py-1 w-full rounded-t-md">HTML</h2>
          <progress className="w-[80%] h-8 rounded-md" value="0.9"></progress>
        </div>
        <div className="w-[30%] h-44 shadow-md rounded-md bg-slate-200 flex flex-col justify-evenly items-center gap-4">
          <h2 className="text-3xl bg-primary text-slate-50 py-1 w-full rounded-t-md">CSS</h2>
          <progress className="w-[80%] h-8 rounded-md" value="0.6"></progress>
        </div>
        <div className="w-[30%] h-44 shadow-md rounded-md bg-slate-200 flex flex-col justify-evenly items-center gap-4">
          <h2 className="text-3xl bg-primary text-slate-50 py-1 w-full rounded-t-md">Javascript</h2>
          <progress className="w-[80%] h-8 rounded-md" value="0.8"></progress>
        </div>
      </div>
    </div>
  )
}

export default Class