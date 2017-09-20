import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { UiSelectComponent } from './ui-select/ui-select.component';
import { ZoomControlComponent } from './zoom-control/zoom-control.component';
import { MapTooltipComponent } from './map-tooltip/map-tooltip.component';
import { PredictiveSearchComponent } from './predictive-search/predictive-search.component';

@NgModule({
  exports: [
    UiSelectComponent,
    ZoomControlComponent,
    MapTooltipComponent,
    PredictiveSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule,
  ],
  declarations: [
    UiSelectComponent,
    ZoomControlComponent,
    MapTooltipComponent,
    PredictiveSearchComponent
  ]
})
export class MapUiModule { }
