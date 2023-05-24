export class News {
  title: string;
  date: string;
  description: string;
  photo: string;

  constructor(title: string, date: string, description: string, photo: string) {
    this.title = title;
    this.date = date;
    this.description = description;
    this.photo = photo;
  }
}

