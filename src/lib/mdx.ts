import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export interface PostMatter {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  featured: boolean;
  image: string;
  locale: 'pt' | 'en';
}

export interface Post {
  slug: string;
  matter: PostMatter;
  content: string;
}

export function getPostSlugs(): string[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.warn(`Posts directory does not exist: ${postsDirectory}`);
      return [];
    }
    
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(name => name.endsWith('.mdx'))
      .map(name => name.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    matter: data as PostMatter,
    content,
  };
}

export function getAllPosts(): Post[] {
  try {
    const slugs = getPostSlugs();
    if (!slugs || slugs.length === 0) {
      return [];
    }
    
    const posts = slugs.map(slug => getPostBySlug(slug));
    return posts.sort((a, b) => {
      return new Date(b.matter.publishedAt).getTime() - new Date(a.matter.publishedAt).getTime();
    });
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts?.filter(post => 
    post.matter.category.toLowerCase() === category.toLowerCase()
  ) || [];
}

export function getFeaturedPosts(): Post[] {
  const allPosts = getAllPosts();
  return allPosts?.filter(post => post.matter.featured).slice(0, 3) || [];
}

export function getRelatedPosts(currentPost: Post, limit: number = 3): Post[] {
  const allPosts = getAllPosts();
  return allPosts
    ?.filter(post => 
      post.slug !== currentPost.slug && 
      (post.matter.category === currentPost.matter.category || 
       post.matter.tags.some(tag => currentPost.matter.tags.includes(tag)))
    )
    .slice(0, limit) || [];
}

export function searchPosts(query: string): Post[] {
  const allPosts = getAllPosts();
  const lowercaseQuery = query.toLowerCase();
  
  return allPosts?.filter(post => 
    post.matter.title.toLowerCase().includes(lowercaseQuery) ||
    post.matter.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.matter.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  ) || [];
}

export function getCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set(allPosts?.map(post => post.matter.category) || []);
  return Array.from(categories).sort();
}
