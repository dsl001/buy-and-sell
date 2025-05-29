import { Component, type OnInit } from '@angular/core';
import { ListingDataFormComponent } from "../listing-data-form/listing-data-form.component";
import { ActivatedRoute, Router } from '@angular/router';
import type { Listing } from '../types';
import { ListingsService } from '../listings.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-listings-page',
  imports: [CommonModule, ListingDataFormComponent],
  templateUrl: './edit-listings-page.component.html',
  styleUrl: './edit-listings-page.component.css'
})
export class EditListingsPageComponent implements OnInit {
  listing: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if (id) {
      this.listingsService.getListingById(id).subscribe(listing => this.listing = listing);
    }
  }

  onSubmit({ name, description, price }: { name: string; description: string; price: number }) {
    if (this.listing) {
      this.listingsService.editListing(this.listing.id, name, description, price)
        .subscribe(() => {
          this.router.navigateByUrl("/my-listings");
        });
    }
  }
}
