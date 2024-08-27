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
    <Container>
      <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {pageData.title}
        </h1>
        <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-md">
          <iframe
            srcDoc={pageData.html}
            style={{ width: "100vh", height: "75vh", border: "none" }}
            className="min-h-[500px] rounded-lg"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </main>
    </Container>
  );
}
