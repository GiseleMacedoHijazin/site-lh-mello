const services = [
  {
    name:'Consumíveis de solda',
    description: 'Eletrodos revestidos, arames tubulares, arames Mig e varetas Tig, arco submerso.',
    img:'./img/supplies/consumiveis_solda.avif',
    site: 'https://www.nicrosol.com.br/',
  },
  {
    name:'Resinas de alta performance',
    description: 'Resinas PU, Epóxi e Graute Químico, Impermeabilizante. Adesivos Industriais. Soluções para Britagem',
    img:'./img/supplies/resinas.avif',
    site: 'https://aplipox.com.br/',
  },
  {
    name:'Cerâmica técnica de alta alumina',
    description: 'Revestimentos antiabrasivos com cerâmica de alta alumina. Tubulações, hextiles, tijolos para moinhos e chapas de desgaste.',
    img:'./img/supplies/ceramica_tecnica.avif',
    site: 'https://solcera.com.br/',
  },
  {
    name:'INNOVA do Brasil',
    description: 'Soluções em aços especiais e peças de desgaste.',
    img:'./img/supplies/innova.avif',
    site: 'https://innovadobrasil.com.br/',
  },
  {
    name:'Placas e tubulações revestidas',
    description: 'Chapas, tubos e peças bimetálicas revestidas com arames tubulares',
    img:'./img/supplies/placas_tubulacoes.avif',
    site: 'http://www.maxweld.com.br/',
  },
  {
    name:'Consultorias técnicas sobre soldagem ',
    description: 'Consultoria técnica e motivacional em processos de soldagem.',
    img:'./img/supplies/palestras.avif',
  },
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
  // {
  //   name: 'Adilson Moreno, Diretor Geral da GMW Welding',
  //   feedback: 'Parabéns Mello, são essas trocas de conhecimento e experiências que fazem a empresa crescer cada vez mais.',
  //   mobile: 'Parabéns Mello, são essas trocas de conhecimento e experiências que fazem a empresa crescer cada vez mais.'
  // },
];

const applicationsUnsorted = [
  { 
    name: 'Forjaria',
    content: [
      { text: 'Trincas no martelo', img: './img/applications/forjaria/trincas_martelo.avif' },
      { text: 'Camisa do martelo', img: './img/applications/forjaria/camisa_martelo.avif' },
      { text: 'Matriz de forjaria', img: './img/applications/forjaria/matriz_forjaria.avif' },
      { text: 'Rebarbador', img: './img/applications/forjaria/rebarbador.avif' },
      { text: 'Rebarbador - segmentos', img: './img/applications/forjaria/rebarbador_segmentos.avif' },
    ],
  },
  { 
    name: 'Fundição',
    content: [
      { text: 'Destorrador', img: './img/applications/fundicao/destorrador.avif' },
      { text: 'Lateral e fundo do misturador de areia', img: './img/applications/fundicao/misturador_areia.avif' },
      { text: 'Pá do misturador', img: './img/applications/fundicao/pa_misturador.avif' },
      { text: 'Recuperação de falha de fundição', img: './img/applications/fundicao/falha_fundicao.avif' },
      { text: 'Tubulações e curvas: recuperação e revestimento', img: './img/applications/fundicao/tubulacoes_curvas.avif' },
      { text: 'Revestimento do transporte pneumático de areia', img: './img/applications/fundicao/transporte_areia.avif' },
    ],
  },
  { 
    name: 'Cimento',
    content: [
      { text: 'Discos do britador', img: './img/applications/cimento/discos_britador.avif' },
      { text: 'Recuperação do rolo de moagem', img: './img/applications/cimento/rolo_moagem.avif' },
      { text: 'Recuperação da mesa do moinho', img: './img/applications/cimento/mesa_moinho.avif' },
      { text: 'Curvas e tubulações revestidas', img: './img/applications/cimento/curvas_tubulacoes.avif' },
      { text: 'Placas no moinho de Cru', img: './img/applications/cimento/placas_moinho.avif' },
      { text: 'Testeira de moinho', img: './img/applications/cimento/testeira_moinho.avif' },
      { text: 'Rotor de despoeiramento', img: './img/applications/cimento/rotor.avif' },
      { text: 'Munhão', img: './img/applications/cimento/munhao.avif' },
    ],
  },
  { 
    name: 'Fertilizantes',
    content: [
      { text: 'Ataque químico/oxidação', img: './img/applications/fertilizantes/ataque_quimico.avif' },
      { text: 'Recuperação/revestimento', img: './img/applications/fertilizantes/recuperacao.avif' },
      { text: 'Rosca transportadora', img: './img/applications/fertilizantes/rosca_transportadora.avif' },
      { text: 'Recuperação estrutural e revestimento no depósito de enxofre', img: './img/applications/fertilizantes/deposito_enxofre.avif' },
      { text: 'Tubulações revestidas, abrasão/corrosão', img: './img/applications/fertilizantes/tubulacoes_revestidas.avif' },
      { text: 'Martelos', img: './img/applications/fertilizantes/martelos.avif' },
    ],
  },
  { 
    name: 'Celulose e papel',
    content: [
      { text: 'Bomba de vácuo', img: './img/applications/celulose_papel/bomba_vacuo.avif' },
      { text: 'Faca e contrafaca do picador', img: './img/applications/celulose_papel/faca_picador.avif' },
      { text: 'Recuperações estruturais', img: './img/applications/celulose_papel/recuperacoes.avif' },
      { text: 'Roscas transportadoras', img: './img/applications/celulose_papel/roscas_transportadoras.avif' },
      { text: 'Curvas e tubulações revestidas', img: './img/applications/celulose_papel/curvas_tubulacoes.avif' },
      { text: 'Peças revestidas conforme projeto e desenho', img: './img/applications/celulose_papel/pecas_revestidas.avif' },
    ],
  },
  {
    name: 'Agronegócio e biocombustíveis',
    content: [
      { text: 'Recuperação em tubulações', img: './img/applications/agronegocio/tubulacoes.avif' },
      { text: 'Recuperação/revestimento ataque químico', img: './img/applications/agronegocio/ataque_quimico.avif' },
      { text: 'Sapata de colheitadeira', img: './img/applications/agronegocio/sapata.avif' },
      { text: 'Cabeça e caneca de elevador', img: './img/applications/agronegocio/elevador.avif' },
      { text: 'Carregamento e descarregamento de grãos', img: './img/applications/agronegocio/graos.avif' },
      { text: 'Revestimento de silos', img: './img/applications/agronegocio/revestimento_silos.avif' },
      { text: 'Chapas revestidas', img: './img/applications/agronegocio/chapas_revestidas.avif' },
    ],
  },
  {
    name: 'Siderurgia',
    content: [
      { text: 'Peneiras', img: './img/applications/siderurgia/peneiras.avif' },
      { text: 'Curvas e tubulações', img: './img/applications/siderurgia/curvas_tubulacoes.avif' },
      { text: 'Rolo de laminação', img: './img/applications/siderurgia/rolo_laminacao.avif' },
      { text: 'Rosca transportadora', img: './img/applications/siderurgia/rosca_transportadora.avif' },
      { text: 'Calhas', img: './img/applications/siderurgia/calhas.avif' },
      { text: 'Rotor', img: './img/applications/siderurgia/rotor.avif' },
      { text: 'Calha aciaria', img: './img/applications/siderurgia/calha_aciaria.avif' },
      { text: 'Martelo, quebrador de sínter, barras', img: './img/applications/siderurgia/martelos.avif' },
    ],
  },
  {
    name: 'Cerâmicas e telhas',
    content: [
      { text: 'Réguas', img: './img/applications/ceramicas_telhas/reguas.avif' },
      { text: 'Rosca transportadora de argila', img: './img/applications/ceramicas_telhas/rosca_argila.avif' },
      { text: 'Boquilha', img: './img/applications/ceramicas_telhas/boquilha.avif' },
      { text: 'Pá misturadora de argila', img: './img/applications/ceramicas_telhas/pa_argila.avif' },
    ],
  },
  {
    name: 'Mineração',
    content: [
      { text: 'Bombas: recuperação e revestimento', img: './img/applications/mineracao/bombas.avif' },
      { text: 'Silos e chutes', img: './img/applications/mineracao/silos.avif' },
      { text: 'Proteção do cone britador', img: './img/applications/mineracao/cone_britador.avif' },
      { text: 'Revestimento de calhas', img: './img/applications/mineracao/revestimento_calhas.avif' },
      { text: 'Rolo britador', img: './img/applications/mineracao/rolo_britador.avif' },
      { text: 'Britador de mamicas', img: './img/applications/mineracao/britador_mamicas.avif' },
      { text: 'Alimentador', img: './img/applications/mineracao/alimentador.avif' },
      { text: 'Redução', img: './img/applications/mineracao/reducao.avif' },
      { text: 'Tubulação - meio denso', img: './img/applications/mineracao/tubulacao_denso.avif' },
      { text: 'Revestimento do lavador', img: './img/applications/mineracao/lavador.avif' },
    ],
  },
  {
    name: 'Soldagem e revestimentos',
    content: [
      { text: 'Roscas transportadoras', img: './img/applications/soldagem/roscas_transportadoras.avif' },
      { text: 'Arame tubular união', img: './img/applications/soldagem/arame_tubular.avif' },
      { text: 'Facas p/ madeira e plástico', img: './img/applications/soldagem/facas.avif' },
      { text: 'Alumínio', img: './img/applications/soldagem/aluminio.avif' },
      { text: 'Arame tubular Metal Cored', img: './img/applications/soldagem/metal_cored.avif' },
      { text: 'Martelos', img: './img/applications/soldagem/martelo.avif' },
    ],
  },
  {
    name: 'Manutenção e reparo',
    content: [
      { text: 'Fixação de barras', img: './img/applications/manutencao/fixacao.avif' },
      { text: 'Tubulação', img: './img/applications/manutencao/tubulacoes.avif' },
      { text: 'Dimensional', img: './img/applications/manutencao/dimensional.avif' },
      { text: 'Bombas, dimensional e revestimento', img: './img/applications/manutencao/bombas_dim_rev.avif' },
      { text: 'Mineração de areia', img: './img/applications/manutencao/mineracao_areia.avif' },
      { text: 'Eixos', img: './img/applications/manutencao/eixos.avif' },
    ],
  },
];

const applications = applicationsUnsorted.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});
