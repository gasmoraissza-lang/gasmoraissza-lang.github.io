import { getAllPosts } from '@/lib/mdx';
import { Header, Footer } from '@/components/sections';
import { Container, Grid, Heading, Text, Badge, Button } from '@/components/ui';
import BlogCard from '@/components/blog/BlogCard';

interface BlogPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale = 'pt' } = await params;
  const allPosts = getAllPosts();
  const posts = allPosts?.filter(post => post.matter.locale === locale) || [];

  const categories = Array.from(new Set(posts.map(post => post.matter.category)));

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <Container size="lg" className="text-center">
          <Heading level={1} size="4xl" className="mb-6" color="primary">
            Blog Jurídico
          </Heading>
          <Text size="xl" color="secondary" className="max-w-3xl mx-auto">
            Artigos e publicações sobre direito civil, trabalhista e empresarial. 
            Mantenha-se informado sobre as principais questões jurídicas.
          </Text>
        </Container>
      </section>

      <section className="py-12 bg-white dark:bg-gray-800">
        <Container size="lg">
          <div className="text-center mb-8">
            <Heading level={2} size="2xl" className="mb-4">
              Categorias
            </Heading>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  size="lg"
                  className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container size="lg">
          <div className="text-center mb-16">
            <Heading level={2} size="3xl" className="mb-4">
              Artigos em Destaque
            </Heading>
            <Text size="lg" color="secondary">
              Nossos artigos mais populares e relevantes
            </Text>
          </div>

          <Grid cols={3} gap="lg" className="mb-12">
            {posts.filter(post => post.matter.featured).slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} locale={locale} />
            ))}
          </Grid>
        </Container>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <Container size="lg">
          <div className="text-center mb-16">
            <Heading level={2} size="3xl" className="mb-4">
              Todos os Artigos
            </Heading>
            <Text size="lg" color="secondary">
              Explore nossa biblioteca completa de artigos jurídicos
            </Text>
          </div>

          <Grid cols={3} gap="lg">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} locale={locale} />
            ))}
          </Grid>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <Text size="lg" color="secondary">
                Nenhum artigo encontrado para este idioma.
              </Text>
            </div>
          )}
        </Container>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
