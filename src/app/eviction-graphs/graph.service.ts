import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from '../../environments/environment';
import { PlatformService } from '../services/platform.service';
import { MapFeature } from '../map-tool/map/map-feature';
import { AnalyticsService } from '../services/analytics.service';

export class GraphItemData {
  [attr: string]: number;
}

export class GraphItem {
  name: string;
  prop: string;
  data: { [attr: string]: number; };
}

@Injectable()
export class GraphService {

  constructor() {}

  /**
   * Creates an array with number values from `start` to `end`
   */
  generateYearArray(start: number, end: number): Array<number> {
    const arr = [];
    for (let i = start; i <= end; i++) { arr.push(i); }
    if (arr.length === 0) { arr.push(end); }
    return arr;
  }

  /**
   * Genrates line graph data from the features in `locations`
   */
  createLineGraphData(items: Array<GraphItem>, startYear: number, endYear: number) {
    return items.map((item, i) => {
      return {
        id: item.prop['id'] + '-' + i,
        data: this.generateLineData(item, startYear, endYear)
      };
    });
  }

  /**
   * Generate bar graph data from the features in `locations
   */
  createBarGraphData(items: Array<GraphItem>, year: number) {
    return items.map((item, i) => {
      const yVal = (item.data[this.attrYear(item.prop['id'], year)]);
      return {
        id: 'item' + i,
        format: item.prop,
        data: [{
          x: item.name,
          y: yVal ? yVal : 0
        }]
      };
    });
  }

  getAxis(axisConfig) {
    const defaultAxis = {
      label: '',
      ticks: 5,
      tickSize: 5,
      tickFormat: '.0f',
      tickPadding: 10,
      minVal: null,
      maxVal: null
    };
    return Object.assign(defaultAxis, axisConfig);
  }

  /**
   * Get the provided attribute with the two digit year
   */
  private attrYear(attr: string, year: number) {
    return attr + '-' + year.toString().slice(-2);
  }

  /**
   * Generate points for the line
   */
  private generateLineData(item: GraphItem, startYear: number, endYear: number) {
    return this.generateYearArray(startYear, endYear)
      .map((year) => {
        const yVal = item.data[this.attrYear(item.prop['id'], year)];
        return {
          format: item.prop['format'],
          x: year,
          y: yVal !== -1 && yVal !== null ? yVal : undefined
        };
      });
  }

}
