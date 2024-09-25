import { FaBookAtlas, FaGithub } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="flex flex-col bottom-0 justify-center items-center text-white bg-gradient-to-r h-full max-h-32 from-gray-900 to-gray-800 shadow-lg border-t-2 border-gray-500">
      <main className="flex flex-col w-full mx-auto justify-center items-center">
        <h1 className="flex mx-auto  gap-2 items-center font-extralight sm:text-xl text-center text-indigo-300 tracking-widest">
          <FaBookAtlas size={22} /> Wiki
          <span className="text-indigo-500">ForEveryone &copy;</span>
        </h1>
        <p className="text-indigo-300"> 
            Conhecimento para todos!
        </p>
      </main>
      <section>
        <ul className="mt-3">
            <li><a href="https://github.com/KaiD3v/wiki-for-everyone"><FaGithub size={22}/></a></li>
        </ul>
      </section>
    </footer>
  );
}
