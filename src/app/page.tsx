import { Container } from "../components/Container";
import { Search } from "../components/Search";
import { VLibrasComponent } from "../components/VLibras";

export default function Home() {
  return (
    <Container>
      <VLibrasComponent />
      <Search />
    </Container>
  );
}
