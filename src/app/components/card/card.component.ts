import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: Card;

  isShowAnswer = false;

  toggleAnswer() {
    this.isShowAnswer = !this.isShowAnswer
  }

  ngOnChanges() {
   this.isShowAnswer = false;
  }
}
