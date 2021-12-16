import { Deserializable } from '../../../shared/interfaces/deserializable.interface';

export class Article implements Deserializable {
  url: string;
  title: string;
  subtitle: string;
  content: string;
  description: string;
  coverImageUrl: string;


  constructor(article: any = {}) {
    this.url = article.url || ''
    this.subtitle = article.subtitle || ''
    this.title = article.title || ''
    this.content = article.content || ''
    this.description = article.description  || ''
    this.coverImageUrl = article.coverImageUrl || ''
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
