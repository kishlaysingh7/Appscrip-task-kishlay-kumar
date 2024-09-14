import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  products: any[] = [];
  filteredProducts: any[] = [];

  // Declare an @Input() to accept the filters from the parent component
  @Input() filters: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products').subscribe((data: any) => {
      this.products = data;
      this.filteredProducts = data; // Initialize with all products
    });
  }

  // This lifecycle hook will detect when the filters change and reapply the filtering logic
  ngOnChanges(): void {
    this.applyFilters();  // Reapply the filters when there's a change
  }

  applyFilters(): void {
    this.filteredProducts = this.products.filter(product => {
      // Apply filter logic
      if (this.filters.idealFor !== 'all' && product.idealFor !== this.filters.idealFor) return false;
      if (this.filters.occasion !== 'all' && product.occasion !== this.filters.occasion) return false;
      if (this.filters.work !== 'all' && product.work !== this.filters.work) return false;
      if (this.filters.fabric !== 'all' && product.fabric !== this.filters.fabric) return false;
      if (this.filters.segment !== 'all' && product.segment !== this.filters.segment) return false;
      if (this.filters.suitableFor !== 'all' && product.suitableFor !== this.filters.suitableFor) return false;
      if (this.filters.rawMaterials !== 'all' && product.rawMaterials !== this.filters.rawMaterials) return false;
      if (this.filters.pattern !== 'all' && product.pattern !== this.filters.pattern) return false;

      return true; // Return true if the product passes all filters
    });
  }
}
