import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filters: any = {}; // Initialize the filters

  onFiltersChanged(newFilters: any) {
    this.filters = newFilters; // Update the filters when the sidebar changes
  }
}
