const services = [
  {
    name:'Consumíveis de solda',
    description: 'Eletrodos revestidos, varetas tig, arames sólidos e tubulares.',
    img:'./img/supplies/consumiveis_solda.jpg',
    site: 'https://www.gmw.com.br/',
  },
  {
    name:'Resinas de alta performance',
    description: 'Aplicações na manutenção e reparo e revestimentos',
    img:'./img/supplies/resinas.png',
    site: 'https://aplipox.com.br/',
  },
  {
    name:'Cerâmica técnica de alta alumina',
    description: 'Ótima resistência ao desgaste',
    img:'./img/supplies/ceramica_tecnica.png',
    site: 'https://solcera.com.br/',
  },
  // {
  //   name:'Ferobide',
  //   description: 'Material soldável mais duro do mundo',
  //   img:'./img/supplies/material_soldavel.png',
  // },
  {
    name:'Placas e tubulações revestidas',
    description: 'Projetos sob desenho',
    img:'./img/supplies/placas_tubulacoes.png',
    site: 'http://www.maxweld.com.br/',
  },
  {
    name:'Palestras técnicas sobre soldagem ',
    description: 'Focadas em processos.',
    img:'./img/supplies/palestras.jpg',
  },
];

const partners = [
  './img/partners/gmw_invertida.png',
  './img/partners/aplipox.png',
  // './img/partners/ferobide.png',
  './img/partners/solcera.png',
  './img/partners/maxweld.png',
];

const customerFeedback = [
  {
    name: 'Daniel, Soldare Soldas Especiais',
    feedback: 'Luiz Mello é um profissional diferenciado no mercado de hoje. Sempre muito atencioso e comprometido. Busca sempre achar a melhor solução da qual necessitamos. Nós da Soldare Soldas Especiais indicamos os serviços prestados por esse profissional.',
    mobile: 'Luiz Mello é um profissional diferenciado no mercado de hoje. Sempre muito atencioso e comprometido.'
  },
  {
    name: 'Elcio, Rodan Com. de Máquinas e Soldas',
    feedback: 'O Luiz Mello tem nos atendido de forma diferenciada e profissional. Procuramos sempre aprender com sua experiência e conhecimentos na área de soldagem. Sempre disponível para nos atender e buscar soluções para nossos clientes. Obrigado Mello pela sua presteza e simplicidade no atendimento.',
    mobile: 'O Luiz Mello tem nos atendido de forma diferenciada e profissional. Sempre disponível para nos atender e buscar soluções para nossos clientes.'
  },
  {
    name: 'Márcio, Trombini Papéis e Embalagens S/A',
    feedback: 'Profissional qualificado com amplo conhecimento gerando confiabilidade no atendimento de nossas necessidades. Sempre pronto a nos atender, contribuindo com dicas e informações importantes, nos auxiliando a sanar uma demanda relacionada a revestimentos que tínhamos em nossa empresa. Agradeço pela dedicação e excelência no atendimento prestado.', 
    mobile: 'Profissional qualificado com amplo conhecimento gerando confiabilidade no atendimento de nossas necessidades.'
  },
  {
    name: 'Adilson Moreno, Diretor Geral da GMW Welding',
    feedback: 'Parabéns Mello, são essas trocas de conhecimento e experiências que fazem a empresa crescer cada vez mais.',
    mobile: 'Parabéns Mello, são essas trocas de conhecimento e experiências que fazem a empresa crescer cada vez mais.'
  },
];

const applicationsUnsorted = [
  { 
    name: 'Forjaria',
    content: [
      { text: 'Trincas no martelo', img: './img/applications/forjaria/trincas_martelo.png' },
      { text: 'Camisa do martelo', img: './img/applications/forjaria/camisa_martelo.png' },
      { text: 'Matriz de forjaria', img: './img/applications/forjaria/matriz_forjaria.png' },
      { text: 'Rebarbador', img: './img/applications/forjaria/rebarbador.png' },
      { text: 'Rebarbador - segmentos', img: './img/applications/forjaria/rebarbador_segmentos.jpg' },
    ],
  },
  { 
    name: 'Fundição',
    content: [
      { text: 'Destorrador', img: './img/applications/fundicao/destorrador.png' },
      { text: 'Lateral e fundo do misturador de areia', img: './img/applications/fundicao/misturador_areia.png' },
      { text: 'Pá do misturador', img: './img/applications/fundicao/pa_misturador.png' },
      { text: 'Recuperação de falha de fundição', img: './img/applications/fundicao/falha_fundicao.png' },
      { text: 'Tubulações e curvas: recuperação e revestimento', img: './img/applications/fundicao/tubulacoes_curvas.png' },
      { text: 'Revestimento do transporte pneumático de areia', img: './img/applications/fundicao/transporte_areia.jpeg' },
    ],
  },
  { 
    name: 'Cimento',
    content: [
      { text: 'Discos do britador', img: './img/applications/cimento/discos_britador.png' },
      { text: 'Recuperação do rolo de moagem', img: './img/applications/cimento/rolo_moagem.png' },
      { text: 'Recuperação da mesa do moinho', img: './img/applications/cimento/mesa_moinho.png' },
      { text: 'Curvas e tubulações revestidas', img: './img/applications/cimento/curvas_tubulacoes.png' },
      { text: 'Placas no moinho de Cru', img: './img/applications/cimento/placas_moinho.png' },
      { text: 'Testeira de moinho', img: './img/applications/cimento/testeira_moinho.png' },
      { text: 'Rotor de despoeiramento', img: './img/applications/cimento/rotor.png' },
      { text: 'Munhão', img: './img/applications/cimento/munhao.png' },
    ],
  },
  { 
    name: 'Fertilizantes',
    content: [
      { text: 'Ataque químico/oxidação', img: './img/applications/fertilizantes/ataque_quimico.png' },
      { text: 'Recuperação/revestimento', img: './img/applications/fertilizantes/recuperacao.png' },
      { text: 'Rosca transportadora', img: './img/applications/fertilizantes/rosca_transportadora.png' },
      { text: 'Recuperação estrutural e revestimento no depósito de enxofre', img: './img/applications/fertilizantes/deposito_enxofre.jpg' },
      { text: 'Tubulações revestidas, abrasão/corrosão', img: './img/applications/fertilizantes/tubulacoes_revestidas.png' },
      { text: 'Martelos', img: './img/applications/fertilizantes/martelos.png' },
    ],
  },
  { 
    name: 'Celulose e papel',
    content: [
      { text: 'Bomba de vácuo', img: './img/applications/celulose_papel/bomba_vacuo.png' },
      { text: 'Faca e contrafaca do picador', img: './img/applications/celulose_papel/faca_picador.png' },
      { text: 'Recuperações estruturais', img: './img/applications/celulose_papel/recuperacoes.png' },
      { text: 'Roscas transportadoras', img: './img/applications/celulose_papel/roscas_transportadoras.jpg' },
      { text: 'Curvas e tubulações revestidas', img: './img/applications/celulose_papel/curvas_tubulacoes.png' },
      { text: 'Peças revestidas conforme projeto e desenho', img: './img/applications/celulose_papel/pecas_revestidas.png' },
    ],
  },
  {
    name: 'Agronegócio e biocombustíveis',
    content: [
      { text: 'Recuperação em tubulações', img: './img/applications/agronegocio/tubulacoes.png' },
      { text: 'Recuperação/revestimento ataque químico', img: './img/applications/agronegocio/ataque_quimico.png' },
      { text: 'Sapata de colheitadeira', img: './img/applications/agronegocio/sapata.png' },
      { text: 'Cabeça e caneca de elevador', img: './img/applications/agronegocio/elevador.png' },
      { text: 'Carregamento e descarregamento de grãos', img: './img/applications/agronegocio/graos.png' },
      { text: 'Revestimento de silos', img: './img/applications/agronegocio/revestimento_silos.png' },
      { text: 'Chapas revestidas', img: './img/applications/agronegocio/chapas_revestidas.png' },
    ],
  },
  {
    name: 'Siderurgia',
    content: [
      { text: 'Peneiras', img: './img/applications/siderurgia/peneiras.png' },
      { text: 'Curvas e tubulações', img: './img/applications/siderurgia/curvas_tubulacoes.png' },
      { text: 'Rolo de laminação', img: './img/applications/siderurgia/rolo_laminacao.png' },
      { text: 'Rosca transportadora', img: './img/applications/siderurgia/rosca_transportadora.png' },
      { text: 'Calhas', img: './img/applications/siderurgia/calhas.png' },
      { text: 'Rotor', img: './img/applications/siderurgia/rotor.png' },
      { text: 'Calha aciaria', img: './img/applications/siderurgia/calha_aciaria.png' },
      { text: 'Martelo, quebrador de sínter, barras', img: './img/applications/siderurgia/martelos.png' },
    ],
  },
  {
    name: 'Cerâmicas e telhas',
    content: [
      { text: 'Réguas', img: './img/applications/ceramicas_telhas/reguas.png' },
      { text: 'Rosca transportadora de argila', img: './img/applications/ceramicas_telhas/rosca_argila.jpeg' },
      { text: 'Boquilha', img: './img/applications/ceramicas_telhas/boquilha.png' },
      { text: 'Pá misturadora de argila', img: './img/applications/ceramicas_telhas/pa_argila.jpeg' },
    ],
  },
  {
    name: 'Mineração',
    content: [
      { text: 'Bombas: recuperação e revestimento', img: './img/applications/mineracao/bombas.png' },
      { text: 'Silos e chutes', img: './img/applications/mineracao/silos.png' },
      { text: 'Proteção do cone britador', img: './img/applications/mineracao/cone_britador.png' },
      { text: 'Revestimento de calhas', img: './img/applications/mineracao/revestimento_calhas.png' },
      { text: 'Rolo britador', img: './img/applications/mineracao/rolo_britador.png' },
      { text: 'Britador de mamicas', img: './img/applications/mineracao/britador_mamicas.png' },
      { text: 'Alimentador', img: './img/applications/mineracao/alimentador.png' },
      { text: 'Redução', img: './img/applications/mineracao/reducao.png' },
      { text: 'Tubulação - meio denso', img: './img/applications/mineracao/tubulacao_denso.png' },
      { text: 'Revestimento do lavador', img: './img/applications/mineracao/lavador.jpeg' },
    ],
  },
  {
    name: 'Soldagem e revestimentos',
    content: [
      { text: 'Roscas transportadoras', img: './img/applications/soldagem/roscas_transportadoras.jpg' },
      { text: 'Arame tubular união', img: './img/applications/soldagem/arame_tubular.jpeg' },
      { text: 'Facas p/ madeira e plástico', img: './img/applications/soldagem/facas.jpeg' },
      { text: 'Alumínio', img: './img/applications/soldagem/aluminio.jpeg' },
      { text: 'Arame tubular Metal Cored', img: './img/applications/soldagem/metal_cored.jpeg' },
      { text: 'Martelos', img: './img/applications/soldagem/martelo.jpeg' },
    ],
  },
  {
    name: 'Manutenção e reparo',
    content: [
      { text: 'Fixação de barras', img: './img/applications/manutencao/fixacao.jpeg' },
      { text: 'Tubulação', img: './img/applications/manutencao/tubulacoes.png' },
      { text: 'Dimensional', img: './img/applications/manutencao/dimensional.jpg' },
      { text: 'Bombas, dimensional e revestimento', img: './img/applications/manutencao/bombas_dim_rev.jpg' },
      { text: 'Mineração de areia', img: './img/applications/manutencao/mineracao_areia.jpeg' },
      { text: 'Eixos', img: './img/applications/manutencao/eixos.jpg' },
    ],
  },
];

const applications = applicationsUnsorted.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});
