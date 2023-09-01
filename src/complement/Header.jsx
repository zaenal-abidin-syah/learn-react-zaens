import Darkmode from "./Darkmode";

function Header() {
  return (
    <>
    <header className="dark:bg-slate-800 dark:text-slate-200 text-slate-700 shadow-sm dark:shadow-slate-500">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold hover:text-slate-600 dark:hover:text-slate-50">Zaens</h1>
        <nav>
          <ul className="flex gap-x-2 bg">
            <li><a className="hover:text-slate-500 dark:hover:text-slate-50 text-semibold" href="#home">Home</a></li>
            <li><a className="hover:text-slate-500 dark:hover:text-slate-50 text-semibold" href="#about">About</a></li>
            <li><a className="hover:text-slate-500 dark:hover:text-slate-50 text-semibold" href="#project">Projects</a></li>
            <li><a className="hover:text-slate-500 dark:hover:text-slate-50 text-semibold" href="#contact">Contact</a></li> 
            <Darkmode/> 
          </ul>
        </nav>
      </div>
    </header>
  </>
  );
}
export default Header;