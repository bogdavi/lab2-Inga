import { News } from "../Classes/News";
import { MockDataNewsList } from "../Data/news-mock-data";

export class NewsDataService {
  private newsList: News[] = MockDataNewsList;

  getData(): News[] {
    return this.newsList;
  }
}