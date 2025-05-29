import { Component } from '@angular/core';
import { ListingDataFormComponent } from "../listing-data-form/listing-data-form.component";
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listings-page',
  imports: [ListingDataFormComponent],
  templateUrl: './new-listings-page.component.html',
  styleUrl: './new-listings-page.component.css'
})
export class NewListingsPageComponent {
  constructor(
    private router: Router,
    private listingsService: ListingsService
  ) {

  }

  onSubmit({ name, description, price }: { name: string; description: string; price: number }) {
    this.listingsService.createListing(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl("/my-listings");
      });
  }
}
