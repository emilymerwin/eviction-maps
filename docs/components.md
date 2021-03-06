# Technical Documentation

## Deep Linking

The following options can be set through app routes or URL parameters:

  - Locations
  - Map Bounds
  - Eviction Type
  - Choropleth Highlight
  - Geography Layer

## Routes

Routes for the app are as follows:

http://{{BASE_URL}}/:locations/:year/:geography/:type/:choropleth/:bounds

With the following options

  - `:locations`: a list of locations separated by `+`.  Each location is formatted as `{{layerId}},{{lon}},{{lat}}`.  Set to `none` for no active locations.
    - e.g. `states,-92.285,38.41+states,-93.34,42.163` would activate Missouri and Iowa
  - `:year`: a year anywhere from 1990 to 2016
  - `:geography`: `states`, `counties`, `cities`, `zip-codes`, `tracts`, or `block-groups`. 
  - `:type`: an ID for the corresponding `BubbleAttribute` (`er` or `efr`)
  - `:choropleth`: an ID for the corresponding choropleth `DataAttribute` (`p` or `pr`, more to come)
  - `:bounds` a comma separated bounding box for the map to zoom to `{{west}},{{south}},{{east}},{{north}}`

Data must be set through routes in this order `:locations/:year/:geography/:type/:choropleth/:bounds`.  If you want to set only one of these parameters, use the URL Parameters.

## URL Parameters

Map settings can also be set through URL parameters instead of routes, with the following format:

http://{{BASE_URL}}/link;locations={{locations}};year={{year}};geography={{geography}};type={{type}};choropleth={{choropleth}};bounds={{bounds}}

All settings are optional, so you could set only the year, eviction rate bubbles, and bounds with:

http://{{BASE_URL}}/link;year=2015;type=er;bounds=-92.52,38.25,-86.53,41.76

### Getting the Current URL Parameters / Route Array

A string of the URL parameters based on the current view is available using `DataService.getUrlParameters()`, which returns a string of parameters based on the current view.  (e.g. `year=2015;type=er;bounds=-92.52,38.25,-86.53,41.76`).

An array containing all of the route parameter values is also available with `DataService.getRouteArray()`

# App Components 

## `app-map`

### Inputs

    - boundingBox: used to set the location displayed in the map
    - autoSwitch: determines if the data levels should auto switch based on zoom level

### Outputs

    - yearChange: emits the year when it is changed
    - evictionTypeChange: emits the eviction type string when changed
    - featureClick: emits a feature when on is clicked on the map
    - featureHover: emits a feature when one is hovered in the map
    - bboxChange: emits the bounding box anytime the map finished moving

### Methods

    - enableZoom(): enables scroll to zoom on map
    - disableZoom(): disables scroll to zoom on map


## `app-location-cards`

### Inputs

    - features: an array of features to display cards form
    - year: the year to display data for in the card
    - cardProperties: an object containing the property names to show, and the corresponding label.  e.g. `{ 'e': 'Eviction Rate' }`

### Outputs

    - viewMore: emits when the "View More" button is clicked
    - dismissCard: emits the feature when the close button is clicked


## `app-data-panel`

### Inputs

    - locations: an array of features representing different locations
    - year: the year to display data for
    
### Outputs

    - locationAdded: TODO
    - locationRemoved: emits the feature that remove was triggered for

# UI Components 

## `app-ui-slider`

## `app-ui-toggle`

## `app-ui-select`

### Inputs
  - `values`: an aray of values or objects to select from
  - `selectedValue`: an optional value to select by default
  - `labelProperty`: an optional property to use for the item label if an object array is passed to `values`
  - `label`: label the input field

### Outputs
  - `change`: emits the selected value on change

## `app-ui-hint`

## `app-ui-dialog`

## `app-progress-bar`

## `app-predictive-search`
