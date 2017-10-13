import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
	{body: 'It\'s over 9000!', author: 'Vegeta', rating: 9001},
	{body: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.', author: 'Buddha', rating: 50},
	{body: 'There is nothing permanent except change.', author: 'Heraclitus', rating: 37},
	{body: 'All that we see or seem is but a dream within a dream. ', author: 'Edgar Allan Poe', rating: 14},
	{body: 'Hey ya\'ll, watch this!', author: 'Unknown', rating: -5},
  ];

  createQuote(quote) {
    console.log(quote);
    this.quotes.push(quote);
  }

  deleteQuote(quote) {
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }

}
