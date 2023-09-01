export default function Hero(){
    return (
        <section id="home" className="pt-36">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 px-4">
                        <h1 className="text-base font-semibold text-primary">Halo, Saya<span className="block font-bold text-dark text-4xl mt-1">Zaenal Abidin Syah</span></h1>
                        <h2 className="font-medium text-slate-500 text-lg mb-5">Mahasiswa & <span className="text-dark">Programmer</span></h2>
                        <p className="font-medium text-slate-400 mb-10  leading-relaxed">Belajar web programming itu mudah dan menyenangkan bukan, <span className="text-dark">bukan!</span></p>
                        <a href="" className="text-base font-semibold bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration ease-in-out">Hubungi Saya</a>
                    </div>

                    <div className="w-full sm:w-1/2 self-end px-4">
                        <div className="relative mt-1 p-5 bg-red-400">
                            <img src="./1.png" alt="profile" className="min-w-full mx-auto"/>
                            <span className="absolute border -bottom-20 -left-20 translate-x-4 -z-10 ">
                            <svg width='400' height='400' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#8b5cf6" d="M52.5,-34C63.2,-11.8,63.6,12.6,53.2,26.5C42.8,40.3,21.4,43.6,1.2,43C-19,42.3,-38,37.6,-45.3,25.5C-52.7,13.4,-48.3,-6,-38.9,-27.5C-29.4,-49.1,-14.7,-72.7,3.1,-74.5C20.9,-76.3,41.8,-56.2,52.5,-34Z" transform="translate(100 100) scale(1.3)" />
                            </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}