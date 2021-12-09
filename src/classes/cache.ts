import axios from 'axios';
import { Entry, Response } from '../types/types';

const API_URL = 'https://api.publicapis.org/entries';

export default class Cache {
  apis: Entry[];
  date?: Date;

  constructor() {
    this.apis = [];
  }

  isRecent() {
    return this.date ? this.date >= new Date(new Date().getTime() - 10 * 60000) : false;
  }

  async update() {
    if (this.isRecent()) return;
    const res: Response = await (await axios.get(API_URL)).data;

    this.apis = res.entries;
    this.date = new Date();
  }
}
