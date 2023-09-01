
export default function Home(){
    return (
        <>
            <div className="flex flex-col sm:flex-col-reverse">
                <div className="w-full flex justify-center mb-4">
                    <img className="rounded-full" src="./public/foto.png" alt="profile" />
                </div>
                <div className="text-center">
                    <h1 className="text-slate-800">Zaenal Abidin Syah</h1>
                    <p className="text-slate-500">Mahasiswa | Web Developer | Pengangguran</p>
                </div>
            </div>
        </>
    )
}