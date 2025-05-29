import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, type OnInit, Input, Output, EventEmitter } from '@angular/core';
import type { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  imports: [FormsModule],
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.css'
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText: string = "Create Listing";
  @Input() currentName: string = "";
  @Input() currentDescription: string = "";
  @Input() currentPrice: string = "";

  name: string = "";
  description: string = "";
  price: string = "";

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onBottonClicked(): void {
    this.onSubmit.emit({
      id: "",
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: 0,
    });
  }
}
