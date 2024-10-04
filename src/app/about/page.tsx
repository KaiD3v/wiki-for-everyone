import { SubMenu } from "./components";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <SubMenu />

      {/* Seção sobre */}
      <section className="py-16 px-8 bg-gray-800 text-center">
        <h1 id="sobre" className="text-4xl font-bold mb-6 text-gray-100">Sobre</h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          <strong>Wiki for Everyone</strong> é uma plataforma que oferece todo o
          conteúdo da Wikipedia, mas com funcionalidades adicionais focadas em
          acessibilidade, tornando a experiência mais inclusiva para pessoas com
          deficiência.
        </p>
        <p className="text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          O projeto teve início como parte de um trabalho universitário na
          disciplina de Análise e Desenvolvimento de Sistemas da Uninter.
          Totalmente open source, o código está disponível no <a className="text-blue-300 hover:text-blue-400 hover:underline transition-all" href="https://github.com/KaiD3v/wiki-for-everyone">GitHub</a>, permitindo
          que desenvolvedores e colaboradores contribuam com novas ideias,
          relatem problemas ou até implementem melhorias.
        </p>
      </section>

      {/* Seção funcionalidades */}
      <section className="py-16 px-8">
        <h2 id="funcionalidades" className="text-3xl font-semibold mb-12 text-center text-gray-100">
          Funcionalidades
        </h2>

        {/* Função de pesquisa por voz */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-100 mb-4">
            Pesquisa por Voz
          </h3>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            A plataforma oferece uma funcionalidade de pesquisa por voz,
            facilitando o acesso a informações, especialmente para pessoas com
            mobilidade reduzida ou dificuldades motoras. Para usar essa função,
            basta clicar no ícone de microfone na barra de pesquisa e falar o
            termo desejado.
          </p>
        </div>

        {/* Função de Libras */}
        <div className="mb-16">
          <h3 id="libras" className="text-2xl font-bold text-gray-100 mb-4">
            Libras (Língua Brasileira de Sinais)
          </h3>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Com a integração da LibrasAPI, o site permite a tradução de textos
            para Libras, ampliando a acessibilidade para usuários com
            deficiência auditiva. Para ativar essa função:
          </p>
          <ol className="list-decimal list-inside text-lg max-w-2xl mx-auto mt-4">
            <li>Acesse a barra de ferramentas à direita da página.</li>
            <li>Clique no ícone "Libras".</li>
            <li>
              Um novo ícone aparecerá no canto inferior direito da página.
            </li>
            <li>Selecione o texto desejado clicando nele.</li>
          </ol>
        </div>

        {/* Leitura em voz alta */}
        <div className="mb-16">
          <h3 id="leitura-em-voz-alta" className="text-2xl font-bold text-gray-100 mb-4">
            Leitura em Voz Alta
          </h3>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Essa funcionalidade ajuda usuários com dificuldades visuais ou de
            leitura ao transformar o texto em áudio. Para usá-la:
          </p>
          <ol className="list-decimal list-inside text-lg max-w-2xl mx-auto mt-4">
            <li>Navegue até a barra de ferramentas à direita da página.</li>
            <li>Clique no ícone "Leitura em Voz Alta".</li>
            <li>Selecione o texto que deseja ouvir.</li>
            <li>Clique no ícone de "play" no pop-up à direita da página.</li>
          </ol>
          <p className="text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Você pode pausar, retomar ou parar a leitura a qualquer momento.
          </p>
        </div>

        {/* Modo Daltonismo */}
        <div className="mb-16">
          <h3 id="modo-daltonismo" className="text-2xl font-bold text-gray-100 mb-4">
            Modo Daltonismo
          </h3>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            O site oferece filtros personalizados para os diferentes tipos de
            daltonismo (protanopia, deuteranopia e tritanopia), facilitando a
            navegação. Para ativar:
          </p>
          <ol className="list-decimal list-inside text-lg max-w-2xl mx-auto mt-4">
            <li>Acesse a barra de ferramentas à direita da página.</li>
            <li>Clique no ícone "Modo Daltonismo".</li>
            <li>Escolha o filtro desejado na barra lateral.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
