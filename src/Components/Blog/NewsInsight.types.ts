// Adjust the type definition based on your actual data
export interface NewsInsight {
    _id: string;
    title: string;
    excerpt: string;
    content?: string;
    image: string;
    dateCreated?: Date; // Updated to Date
  }
  