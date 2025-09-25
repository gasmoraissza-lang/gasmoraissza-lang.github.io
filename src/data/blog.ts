export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  featured: boolean;
  image: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Direito Civil',
    slug: 'direito-civil',
    description: 'Artigos sobre direito civil, contratos e responsabilidade civil',
    count: 12
  },
  {
    id: '2',
    name: 'Direito Trabalhista',
    slug: 'direito-trabalhista',
    description: 'Direitos trabalhistas, rescisões e acordos coletivos',
    count: 8
  },
  {
    id: '3',
    name: 'Direito Empresarial',
    slug: 'direito-empresarial',
    description: 'Constituição de empresas e direito societário',
    count: 6
  },
  {
    id: '4',
    name: 'Direito de Família',
    slug: 'direito-familia',
    description: 'Divórcio, guarda de filhos e direito sucessório',
    count: 10
  },
  {
    id: '5',
    name: 'Jurisprudência',
    slug: 'jurisprudencia',
    description: 'Decisões importantes dos tribunais',
    count: 15
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'novas-regras-trabalho-remoto-2024',
    title: 'Novas Regras do Trabalho Remoto em 2024',
    excerpt: 'Entenda as principais mudanças na legislação trabalhista para o trabalho remoto e híbrido que entraram em vigor este ano.',
    content: `
      <h2>Introdução</h2>
      <p>O trabalho remoto se tornou uma realidade permanente para muitas empresas após a pandemia. Em 2024, novas regulamentações foram estabelecidas para garantir os direitos dos trabalhadores e definir as obrigações dos empregadores.</p>
      
      <h2>Principais Mudanças</h2>
      <h3>1. Controle de Horário</h3>
      <p>As novas regras estabelecem que o controle de jornada deve ser feito de forma digital, com registro automático das horas trabalhadas.</p>
      
      <h3>2. Equipamentos de Trabalho</h3>
      <p>O empregador é obrigado a fornecer todos os equipamentos necessários para o trabalho remoto, incluindo computador, internet e mobiliário adequado.</p>
      
      <h3>3. Direito à Desconexão</h3>
      <p>Os trabalhadores têm o direito de não responder mensagens ou e-mails fora do horário de trabalho.</p>
      
      <h2>Conclusão</h2>
      <p>Essas mudanças visam proteger os direitos dos trabalhadores e estabelecer um equilíbrio entre a flexibilidade do trabalho remoto e a proteção laboral.</p>
    `,
    category: 'Direito Trabalhista',
    tags: ['trabalho remoto', 'direitos trabalhistas', 'home office'],
    author: 'Marina Cabo',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    readTime: 5,
    featured: true,
    image: '💼'
  },
  {
    id: '2',
    slug: 'direitos-consumidor-compras-online',
    title: 'Direitos do Consumidor em Compras Online',
    excerpt: 'Saiba como se proteger e exercer seus direitos em compras pela internet, incluindo arrependimento e devoluções.',
    content: `
      <h2>Introdução</h2>
      <p>Com o crescimento do e-commerce, é fundamental conhecer os direitos do consumidor nas compras online para evitar problemas e garantir uma experiência segura.</p>
      
      <h2>Principais Direitos</h2>
      <h3>1. Direito ao Arrependimento</h3>
      <p>Você tem 7 dias para desistir da compra, contados a partir da entrega do produto.</p>
      
      <h3>2. Informações Claras</h3>
      <p>O vendedor deve fornecer informações completas sobre o produto, preço e condições de pagamento.</p>
      
      <h3>3. Segurança nos Pagamentos</h3>
      <p>Os dados pessoais e financeiros devem ser protegidos conforme a LGPD.</p>
      
      <h2>Como Reclamar</h2>
      <p>Em caso de problemas, você pode recorrer ao PROCON ou aos órgãos de defesa do consumidor.</p>
    `,
    category: 'Direito Civil',
    tags: ['direito do consumidor', 'compras online', 'e-commerce'],
    author: 'Marina Cabo',
    publishedAt: '2024-01-10',
    updatedAt: '2024-01-10',
    readTime: 4,
    featured: false,
    image: '🛒'
  },
  {
    id: '3',
    slug: 'como-constituir-empresa-brasil',
    title: 'Como Constituir uma Empresa no Brasil',
    excerpt: 'Guia completo sobre os tipos societários e processo de abertura de empresas no Brasil.',
    content: `
      <h2>Tipos de Empresa</h2>
      <p>No Brasil, existem várias formas de constituir uma empresa, cada uma com suas particularidades e vantagens.</p>
      
      <h3>1. MEI (Microempreendedor Individual)</h3>
      <p>Ideal para atividades de baixo risco e faturamento limitado.</p>
      
      <h3>2. EIRELI</h3>
      <p>Empresa Individual de Responsabilidade Limitada, com capital social mínimo.</p>
      
      <h3>3. Sociedade Limitada (LTDA)</h3>
      <p>Para empresas com mais de um sócio, com responsabilidade limitada ao capital social.</p>
      
      <h2>Processo de Abertura</h2>
      <p>O processo envolve várias etapas, desde a escolha do tipo societário até o registro na Junta Comercial.</p>
    `,
    category: 'Direito Empresarial',
    tags: ['abertura de empresa', 'tipos societários', 'MEI'],
    author: 'Marina Cabo',
    publishedAt: '2024-01-05',
    updatedAt: '2024-01-05',
    readTime: 7,
    featured: true,
    image: '🏢'
  },
  {
    id: '4',
    slug: 'divorcio-consensual-passo-a-passo',
    title: 'Divórcio Consensual: Passo a Passo',
    excerpt: 'Entenda o processo de divórcio consensual e os documentos necessários para a separação amigável.',
    content: `
      <h2>O que é Divórcio Consensual</h2>
      <p>É quando ambos os cônjuges concordam com a separação e conseguem chegar a um acordo sobre os termos do divórcio.</p>
      
      <h2>Vantagens</h2>
      <ul>
        <li>Processo mais rápido</li>
        <li>Menor custo</li>
        <li>Menos desgaste emocional</li>
        <li>Maior controle sobre os termos</li>
      </ul>
      
      <h2>Documentos Necessários</h2>
      <ul>
        <li>Certidão de casamento</li>
        <li>RG e CPF de ambos</li>
        <li>Comprovante de residência</li>
        <li>Certidão de nascimento dos filhos (se houver)</li>
      </ul>
      
      <h2>Processo</h2>
      <p>O divórcio consensual pode ser feito via cartório ou processo judicial, dependendo da complexidade do acordo.</p>
    `,
    category: 'Direito de Família',
    tags: ['divórcio', 'direito de família', 'separação'],
    author: 'Marina Cabo',
    publishedAt: '2024-01-01',
    updatedAt: '2024-01-01',
    readTime: 6,
    featured: false,
    image: '💔'
  },
  {
    id: '5',
    slug: 'nova-lei-geral-protecao-dados',
    title: 'Nova Lei Geral de Proteção de Dados: O que Mudou',
    excerpt: 'Entenda as principais mudanças na LGPD e como elas afetam empresas e consumidores.',
    content: `
      <h2>Principais Mudanças</h2>
      <p>A LGPD sofreu algumas alterações importantes que impactam diretamente o tratamento de dados pessoais.</p>
      
      <h3>1. Bases Legais</h3>
      <p>Novas bases legais foram estabelecidas para o tratamento de dados pessoais.</p>
      
      <h3>2. Direitos dos Titulares</h3>
      <p>Os direitos dos titulares de dados foram ampliados e fortalecidos.</p>
      
      <h3>3. Sanções</h3>
      <p>As sanções por descumprimento da lei foram detalhadas e especificadas.</p>
    `,
    category: 'Jurisprudência',
    tags: ['LGPD', 'proteção de dados', 'privacidade'],
    author: 'Marina Cabo',
    publishedAt: '2023-12-28',
    updatedAt: '2023-12-28',
    readTime: 8,
    featured: true,
    image: '🔒'
  }
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured).slice(0, 3);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}
