export interface Destino {
  id: string;
  nome: string;
  pais: string;
  continente: string;
  descricao: string;
  descricaoLonga: string;
  imagem: string;
  imagemFull: string;
  temperatura: string;
  melhorEpoca: string;
  moeda: string;
  idioma: string;
  destaques: string[];
  cor: string;
}

export const destinos: Destino[] = [
  {
    id: "kyoto",
    nome: "Kyoto",
    pais: "Japão",
    continente: "Ásia",
    descricao: "Santuários milenares, cerejeiras e a essência da alma japonesa.",
    descricaoLonga:
      "Kyoto foi a capital imperial do Japão por mais de mil anos e guarda em seus templos, jardins zen e gueixas a memória viva de uma civilização única. Caminhe pelas ruas de Gion ao entardecer, medite nos jardins de musgo do Saihō-ji e observe o reflexo das lanternas nos canais de Fushimi.",
    imagem: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80",
    imagemFull: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1400&q=90",
    temperatura: "5°C – 34°C",
    melhorEpoca: "Mar – Mai / Set – Nov",
    moeda: "Iene (¥)",
    idioma: "Japonês",
    destaques: ["Floresta de bambu de Arashiyama", "Santuário Fushimi Inari", "Templo Kinkaku-ji", "Distrito de Gion"],
    cor: "#c0392b",
  },
  {
    id: "patagonia",
    nome: "Patagônia",
    pais: "Argentina / Chile",
    continente: "América do Sul",
    descricao: "Glaciares imensos, montanhas afiadas e o vento que dobra o tempo.",
    descricaoLonga:
      "A Patagônia é o último grande vazio habitado da Terra. Geleiras azul-cobalto avançam sobre lagos de água gelada, e o Fitz Roy rasga as nuvens como uma lâmina de granito. É um lugar que exige respeito e recompensa com silêncio absoluto e horizontes que não terminam.",
    imagem: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    imagemFull: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=90",
    temperatura: "-2°C – 18°C",
    melhorEpoca: "Nov – Mar",
    moeda: "Peso / Sol chileno",
    idioma: "Espanhol",
    destaques: ["Glaciar Perito Moreno", "Torres del Paine", "Monte Fitz Roy", "Lago Argentino"],
    cor: "#2980b9",
  },
  {
    id: "marrakech",
    nome: "Marrakech",
    pais: "Marrocos",
    continente: "África",
    descricao: "Medinas labirínticas, especiarias e uma luz que pinta tudo de ouro.",
    descricaoLonga:
      "Marrakech é uma cidade que envolve todos os sentidos ao mesmo tempo. O cheiro de cominho e menta na Jemaa el-Fna, o azul intenso dos azulejos da Madrasa Ben Youssef, o couro curtido nas tenerarias. Uma cidade onde o tempo funciona em outra frequência e cada viela esconde um riad secreto.",
    imagem: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80",
    imagemFull: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1400&q=90",
    temperatura: "8°C – 38°C",
    melhorEpoca: "Mar – Mai / Set – Nov",
    moeda: "Dirham (MAD)",
    idioma: "Árabe / Francês",
    destaques: ["Jemaa el-Fna", "Souks da Medina", "Jardim Majorelle", "Palácio Bahia"],
    cor: "#e67e22",
  },
  {
    id: "islandia",
    nome: "Islândia",
    pais: "Islândia",
    continente: "Europa",
    descricao: "Auroras boreais, gêiseres e uma ilha que parece recém-criada pelo planeta.",
    descricaoLonga:
      "A Islândia é uma terra de contrastes extremos: fogo e gelo, luz perpétua no verão e noites de aurora no inverno. Gêiseres explodem a cada minuto, cascatas brancas despencam de planaltos negros de basalto, e o silêncio dos lençóis de lava resfriada parece o fim e o começo do mundo ao mesmo tempo.",
    imagem: "https://images.unsplash.com/photo-1520769945061-0a448c463865?w=600&q=80",
    imagemFull: "https://images.unsplash.com/photo-1520769945061-0a448c463865?w=1400&q=90",
    temperatura: "-10°C – 13°C",
    melhorEpoca: "Jun – Ago / Dez – Mar",
    moeda: "Coroa Islandesa (ISK)",
    idioma: "Islandês",
    destaques: ["Aurora Boreal", "Geysir & Strokkur", "Cachoeira Skógafoss", "Lagoa Glacial Jökulsárlón"],
    cor: "#1abc9c",
  },
  {
    id: "rajastao",
    nome: "Rajastão",
    pais: "Índia",
    continente: "Ásia",
    descricao: "Palácios de maharajas, deserto dourado e a cor de mil festivais.",
    descricaoLonga:
      "O Rajastão é a Índia em estado puro. Fortes de arenito rosa erguem-se sobre dunas do deserto de Thar, palácios flutuam sobre lagos de Udaipur e os mercados de Jaipur transbordam de turbantes coloridos e especiarias. É uma terra de histórias épicas escritas em pedra e seda.",
    imagem: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
    imagemFull: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1400&q=90",
    temperatura: "5°C – 42°C",
    melhorEpoca: "Out – Mar",
    moeda: "Rupia Indiana (INR)",
    idioma: "Hindi / Rajasthani",
    destaques: ["Forte Amber, Jaipur", "City Palace, Udaipur", "Deserto de Thar", "Jodhpur — Cidade Azul"],
    cor: "#8e44ad",
  },
  {
    id: "noruega",
    nome: "Noruega",
    pais: "Noruega",
    continente: "Europa",
    descricao: "Fiordes que cortam montanhas como espelhos entre pedra e céu.",
    descricaoLonga:
      "A Noruega redefine o conceito de natureza monumental. Os fiordes de Geiranger e Nærøy são muralhas de pedra de 1.400 metros que mergulham direto no Atlântico. Pequenas aldeias de madeira pintada se acomodam nas margens, e o silêncio só é quebrado pelo som de cascatas que despencam centenas de metros.",
    imagem: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=600&q=80",
    imagemFull: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=1400&q=90",
    temperatura: "-5°C – 22°C",
    melhorEpoca: "Mai – Set",
    moeda: "Coroa Norueguesa (NOK)",
    idioma: "Norueguês",
    destaques: ["Fiordes de Geiranger", "Trampolim Preikestolen", "Bergen e o Bryggen", "Cabo Norte"],
    cor: "#2c3e50",
  },
];

export function getDestinoById(id: string): Destino | undefined {
  return destinos.find((d) => d.id === id);
}
