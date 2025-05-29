import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing-detail-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.css'
})
export class ListingDetailPageComponent implements OnInit {
  isLoading: boolean = true;
  listing: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if (id) {
      this.listingsService.getListingById(id)
        .subscribe(listing => {
          this.listing = listing;
          this.isLoading = false;
        });

      this.listingsService.addViewToListing(id)
        .subscribe(() => console.log(`Views updated for id = ${id}!`))
    }
  }

}
