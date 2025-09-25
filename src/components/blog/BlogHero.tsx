import { BlogPost } from '@/data/blog';
import { Heading, Text, Badge, Button } from '@/components/ui';

interface BlogHeroProps {
  post: BlogPost;
  locale: string;
}

export default function BlogHero({ post, locale }: BlogHeroProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="primary" size="lg">
              {post.category}
            </Badge>
            <Badge variant="outline" size="lg">
              {post.readTime} min de leitura
            </Badge>
          </div>

          <Heading level={1} size="4xl" className="mb-6" color="primary">
            {post.title}
          </Heading>

          <Text size="xl" color="secondary" className="mb-8 max-w-3xl mx-auto">
            {post.excerpt}
          </Text>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
            <span>Por {post.author}</span>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <div className="flex gap-1">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="ghost" size="xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
