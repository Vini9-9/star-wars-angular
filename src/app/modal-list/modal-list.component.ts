import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.css']
})
export class ModalListComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() films: string[] | undefined;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
