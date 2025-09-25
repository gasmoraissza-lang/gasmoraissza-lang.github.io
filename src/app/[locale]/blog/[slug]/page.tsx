import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/lib/mdx';
import { Header, Footer } from '@/components/sections';
import { Container, Heading, Text, Badge, Button, Card, CardContent } from '@/components/ui';
import BlogHero from '@/components/blog/BlogHero';
import BlogCard from '@/components/blog/BlogCard';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale = 'pt', slug } = await params;
  
  try {
    const post = getPostBySlug(slug);
    
    if (!post || post.matter.locale !== locale) {
      notFound();
    }

    const relatedPosts = getRelatedPosts(post, 3);

    return (
      <div className="min-h-screen">
        <Header locale={locale} />
        
        <BlogHero post={post} locale={locale} />
        <article className="py-20 bg-white dark:bg-gray-800">
          <Container size="lg">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg mb-8">
                  <Text size="lg" color="secondary">
                    Conteúdo do post MDX seria renderizado aqui usando MDX components.
                    Por enquanto, mostrando o conteúdo como texto.
                  </Text>
                  <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border">
                    <pre className="whitespace-pre-wrap text-sm">
                      {post.content}
                    </pre>
                  </div>
                </div>
              </div>

              <Card className="my-12">
                <CardContent padding="lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👩‍💼</span>
                    </div>
                    <div>
                      <Heading level={3} size="lg">
                        {post.matter.author}
                      </Heading>
                      <Text color="secondary">
                        Advogada especializada em direito civil, trabalhista e empresarial
                      </Text>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {relatedPosts.length > 0 && (
                <div className="mt-20">
                  <Heading level={2} size="2xl" className="mb-8 text-center">
                    Artigos Relacionados
                  </Heading>
                  <div className="grid md:grid-cols-3 gap-8">
                    {relatedPosts.map((relatedPost) => (
                      <BlogCard key={relatedPost.slug} post={relatedPost} locale={locale} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Container>
        </article>

        <Footer locale={locale} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
