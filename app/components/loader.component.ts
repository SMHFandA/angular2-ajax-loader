import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'loader-component',
  templateUrl: './app/components/loader.component.html',
  styleUrls: [
    './app/components/styles.css'
  ]
})
export class LoaderComponent implements OnInit {

  @Input()
  id: string = 'default';

  private loader: any;

  ngOnInit() {

  }

  hide() {
    this.loader = $(`#${this.id} .overlay-pane`);
    this.loader.hide();
  }

  show() {
    this.loader = $(`#${this.id} .overlay-pane`);
    this.loader.show();
  }

}
