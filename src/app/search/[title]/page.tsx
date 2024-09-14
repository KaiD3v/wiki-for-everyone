import { Container } from "../../../components/Container";
import { Search } from "../../../components/Search";
import { PagesProps } from "../../../utils/types/PagesTypes";
import Link from "next/link";

async function getPages(title: string) {
  try {
    const uncodedUri = decodeURI(title);
    const response = await fetch(
      `${process.env.WIKI_API_URL}/search/page?q=${uncodedUri}&limit=12`
    )
      .then(res => res.json())
      .then(data => data.pages);

    console.log(response);

    return response;
  } catch (error) {
    console.log("Houve um erro ao buscar pela pesquisa:" + error);
    return null;
  }
}

export default async function SearchPage({
  params: { title }
}: {
  params: { title: string };
}) {
  const data: PagesProps[] = await getPages(title);

  console.log(data);
  return (
    <Container>
      <div className="search-container mb-8">
        <Search />
      </div>

      <div className="text-black mt-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Resultados da sua pesquisa para "{decodeURI(title)}"
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data && data.length > 0
            ? data.map(item =>
                <Link
                  className="bg-white min-h-30 max-h-30 cursor-pointer overflow-hidden rounded-lg shadow-md p-4 flex flex-col hover:bg-blue-200 transition-all duration-300"
                  key={item.id}
                  href={`/pages/${item.title}`}
                >
                  <header className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h2>
                  </header>
                  <main className="flex-1">
                    <p className="text-gray-600">
                      {item.description || "Sem descrição disponível."}
                    </p>
                  </main>
                </Link>
              )
            : <p className="text-center col-span-full text-gray-500">
                Nenhum resultado encontrado para "{decodeURI(title)}".
              </p>}
        </div>
      </div>
    </Container>
  );
}
