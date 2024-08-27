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
    <main>
      <h1>
        {decodeURI(title)}
      </h1>
    </main>
  );
}
