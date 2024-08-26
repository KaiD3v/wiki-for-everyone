import { Container } from "../../../components/Container";
import { Search } from "../../../components/Search";

export default function SearchPage({
  params: { title }
}: {
  params: { title: string };
}) {
  console.log("Title prop:", title);
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
