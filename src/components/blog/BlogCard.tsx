import Link from 'next/link';
import { Card, CardContent, CardHeader, Heading, Text, Badge } from '@/components/ui';

interface BlogPost {
  slug: string;
  matter: {
    title: string;
    excerpt: string;
    category: string;
    publishedAt: string;
    readTime: number;
    image: string;
    locale: string;
  };
}

interface BlogCardProps {
  post: BlogPost;
  locale: string;
}

export default function BlogCard({ post, locale }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link href={`/${locale}/blog/${post.slug}`}>
      <Card hover className="h-full">
        <CardHeader padding="none">
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
            <span className="text-6xl">{post.matter.image}</span>
          </div>
        </CardHeader>
        
        <CardContent padding="lg">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" size="sm">
              {post.matter.category}
            </Badge>
            <Text size="xs" color="muted">
              {post.matter.readTime} min
            </Text>
          </div>

          <Heading level={3} size="lg" className="mb-3 line-clamp-2">
            {post.matter.title}
          </Heading>

          <Text color="secondary" className="mb-4 line-clamp-3">
            {post.matter.excerpt}
          </Text>

          <div className="flex items-center justify-between">
            <Text size="sm" color="muted">
              {formatDate(post.matter.publishedAt)}
            </Text>
            <Text size="sm" color="primary" weight="medium">
              Ler mais →
            </Text>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
