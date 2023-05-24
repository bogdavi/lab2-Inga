import { Component, Input } from "@angular/core";
import { News } from "../Classes/News";

@Component({
  selector: 'news-component',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent {
  @Input() newsObj: News = { title: "", date: "", description: "", photo: "" };
}