import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  Batsman="Virat Kohli";
  Average=130.78;
  Height=6.0;
  BaseSalary=10000000;
  lastMatch= Date.now();
  winPercentage= 20/100;
  About="A spunky, chubby teenager with gelled hair shot to fame after leading India to glory in the Under-19 World Cup at Kuala Lumpur in early 2008. In an Indian team filled with saint-like icons worthy of their own hagiographies, Virat Kohli, with his most un-Indian, 'bad-boy' intensity, would clearly be an outcast."


  constructor() { }

  ngOnInit(): void {
  }

}
