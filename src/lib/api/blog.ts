import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  where, 
  limit, 
  orderBy 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { BlogPost } from '@/lib/blog-data';

/**
 * Fetch all published blog posts
 */
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const q = query(collection(db, 'blogs'), orderBy('date', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      ...doc.data(),
      slug: doc.id // Using document ID as slug
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

/**
 * Fetch a single blog post by slug (document ID)
 */
export const fetchPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const docRef = doc(db, 'blogs', slug);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return {
        ...snapshot.data(),
        slug: snapshot.id
      } as BlogPost;
    }
    return null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};

/**
 * Fetch featured posts for homepage
 */
export const fetchFeaturedPosts = async (count: number = 3): Promise<BlogPost[]> => {
  try {
    const q = query(collection(db, 'blogs'), limit(count), orderBy('date', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      ...doc.data(),
      slug: doc.id
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
};
