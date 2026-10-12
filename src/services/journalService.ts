import { SAMPLE_ARTICLES } from '../data/articles';
import type { JournalArticle } from '../types/journal';

export const journalService = {
  async getArticles(): Promise<JournalArticle[]> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    return [...SAMPLE_ARTICLES];
  },

  async getArticleBySlug(slug: string): Promise<JournalArticle | null> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    const found = SAMPLE_ARTICLES.find((a) => a.slug === slug);
    return found || null;
  }
};
