function Newsletter() {
  return (
    <div className='w-full text-white px-4'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h1 className='sm:text-2xl md:text-3xl font-bold py-2'>Want trick & tips to optimizing</h1>
          <p>Sign up to our newsletter and up to date</p>
        </div>
        <div className="py-4">
          <div className="flex flex-col sm:flex-row gap-2 place-items-center w-full">
            <input type="email" className="p-3 flex w-full rounded-md text-slate-900" placeholder="Enter email.." />
            <button className="bg-primary text-slate-900 rounded-md font-medium w-[200px]  my-3 py-2 px-3">Notify Me</button>
          </div>
          <p>We care About the protecten of your data Read Our <span className="text-primary">Privacy Policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter 