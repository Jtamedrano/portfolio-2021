import { RichText } from "../components/RichTextRenderer/RichTextRenderer";

export interface CMSResponse<T> {
  data: T;
}

export type BaseCMSModel<T> = {
  id: string;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
} & T;

export type Blog = BaseCMSModel<{
  title: string;
  slug: string;
  author: string;
  excerpt: string;
  tags: string[];
  body: RichText;
  metaKeywords: string[];
  metaDescription: string;
}>;
