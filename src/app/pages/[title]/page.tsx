import { Container } from "../../../components/Container";
import { PageProps } from "../../../utils/types/PagesTypes";

async function getPageData(title: string) {
  try {
    const response = await fetch(
      `${process.env.WIKI_API_URL}/page/${title}/with_html`
    );

    return response.json();
  } catch (error) {
    console.log("houve um erro ao tentar buscas os dados da página:" + error);
    return null;
  }
}

export default async function WikiPage({
  params: { title }
}: {
  params: { title: string };
}) {
  const pageData: PageProps = await getPageData(title);

  console.log(pageData);
  return (
    <div className="flex items-center text-center justify-center w-full h-screen">
      <main className="hidden sm:flex flex-col justify-center items-center w-full sm:p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {pageData.title}
        </h1>
        <div className="w-full sm:max-w-6xl bg-white p-6 rounded-lg shadow-md">
          <iframe
            srcDoc={pageData.html}
            className="w-full min-h-[500px] rounded-lg"
            sandbox="allow-scripts allow-same-origin"
            style={{ height: "75vh" }}
          />
        </div>
      </main>
      <iframe
        srcDoc={pageData.html}
        className="block sm:hidden w-screen h-full bg-white rounded-lg shadow-md"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}
