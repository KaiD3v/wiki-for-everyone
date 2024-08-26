import { Container } from "../../../components/Container";
import { Search } from "../../../components/Search";

async function getPages(title: string) {
  try {
    const response = await fetch(
      `${process.env.WIKI_API_URL}/page?q=${title}&limit=10`
    );

    console.log(title);

    return response.json();
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
  const data = await getPages(title);

  console.log(data);
  return (
    <Container>
      <Search />
      <div className="text-black">
        <h1>
          {title}
        </h1>
      </div>
    </Container>
  );
}
