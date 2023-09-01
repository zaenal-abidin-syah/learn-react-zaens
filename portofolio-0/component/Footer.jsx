import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare, FaDribbbleSquare } from 'react-icons/fa'
function Footer() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-slate-200'>
      <div>
        <h1 className='text-primary text-3xl font-bold w-full'>React</h1>
        <p className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate sed porro nam laudantium eaque minima earum voluptates magnam exercitationem quidem labore doloremque molestiae iste, quia ab. Est, unde? Corporis, pariatur?</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 mt-6 flex justify-between'>
        <div>
          <h1 className='font-medium text-slate-400'>Solution</h1>
          <ul>
            <li className='py-2 text-sm'>Analylics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insight</li>
          </ul>
        </div>
        <div>
          <h1 className='font-medium text-slate-400'>Support</h1>
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>GUides</li>
            <li className='py-2 text-sm'>API Status</li>
          </ul>
        </div>

        <div>
          <h1 className='font-medium text-slate-400'>Company</h1>
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Carrer</li>
          </ul>
        </div>
        <div>
          <h1 className='font-medium text-slate-400'>Legal</h1>
          <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer