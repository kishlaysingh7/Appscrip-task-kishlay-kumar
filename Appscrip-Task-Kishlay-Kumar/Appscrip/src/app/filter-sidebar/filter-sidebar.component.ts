import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.css']
})
export class FilterSidebarComponent {
  filters = {
    customizable: false,
    idealFor: 'all',
    occasion: 'all',
    work: 'all',
    fabric: 'all',
    segment: 'all',
    suitableFor: 'all',
    rawMaterials: 'all',
    pattern: 'all'
  };

  @Output() filtersChanged = new EventEmitter<any>();

  applyFilter(): void {
    this.filtersChanged.emit(this.filters);
  }
}
