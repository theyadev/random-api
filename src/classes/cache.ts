import axios from 'axios';
import { Category, Entry, Response } from '../types/types';

const API_URL = 'https://api.publicapis.org/entries';

export default class Cache {
  count: number;
  apis: Entry[];
  categories: Category[];
  date?: Date;

  constructor() {
    this.count = 0;
    this.apis = [];
    this.categories = [];
  }

  isRecent() {
    return this.date ? this.date >= new Date(new Date().getTime() - 10 * 60000) : false;
  }

  async fetchApis() {
    if (this.isRecent()) return;

    const res: Response = await (
      await axios.get(API_URL).catch(() => {
        throw new Error(`Connection to the API (${API_URL}) failed.`);
      })
    ).data;

    this.apis = res.entries;
    this.count = res.count;
    this.date = new Date();
  }

  async fetchCategories() {
    await this.fetchApis();

    const categories: Category[] = [];

    for (const api of this.apis) {
      if (categories.includes(api.Category)) continue;

      categories.push(api.Category);
    }

    this.categories = categories;
  }
}
