GTFS-JS
=======

JavaScript library for working with [GTFS] data.

[![bitHound Score](https://www.bithound.io/github/WSDOT-GIS/GTFS-JS/badges/score.svg?)](https://www.bithound.io/github/WSDOT-GIS/GTFS-JS)

## Modules

<dl>
<dt><a href="#module_gtfsx">gtfsx</a></dt>
<dd></dd>
<dt><a href="#module_conversionUtils">conversionUtils</a></dt>
<dd><p>Module converting between object types.</p>
</dd>
<dt><a href="#module_Datafile">Datafile</a></dt>
<dd></dd>
<dt><a href="#module_Agency">Agency</a></dt>
<dd></dd>
</dl>

<a name="module_gtfsx"></a>

## gtfsx
<a name="module_conversionUtils"></a>

## conversionUtils
Module converting between object types.

<a name="module_conversionUtils.convertDateToDateObject"></a>

### conversionUtils.convertDateToDateObject(n) ⇒ <code>Date</code>
Converts a number representing a date returned from GTFS-Exchange into a Date object.

**Kind**: static method of <code>[conversionUtils](#module_conversionUtils)</code>  
**Returns**: <code>Date</code> - - The date equivalent of the input number.  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> &#124; <code>Date</code> | A number representing a date. If a date is passed in, that same date is returned. |

<a name="module_Datafile"></a>

## Datafile

* [Datafile](#module_Datafile)
    * [Datafile](#exp_module_Datafile--Datafile) ⏏
        * [new Datafile(data)](#new_module_Datafile--Datafile_new)
        * [~description](#module_Datafile--Datafile..description) : <code>string</code>
        * [~md5sum](#module_Datafile--Datafile..md5sum) : <code>string</code>
        * [~file_url](#module_Datafile--Datafile..file_url) : <code>string</code>
        * [~agencies](#module_Datafile--Datafile..agencies) : <code>string</code>
        * [~filename](#module_Datafile--Datafile..filename) : <code>string</code>
        * [~date_added](#module_Datafile--Datafile..date_added) : <code>Date</code>
        * [~uploaded_by_user](#module_Datafile--Datafile..uploaded_by_user) : <code>string</code>
        * [~size](#module_Datafile--Datafile..size) : <code>number</code>

<a name="exp_module_Datafile--Datafile"></a>

### Datafile ⏏
**Kind**: Exported class  
<a name="new_module_Datafile--Datafile_new"></a>

#### new Datafile(data)
Represents an element of the datafile array returned from the API endpoint http://www.gtfs-data-exchange.com/api/agency?agency={dataexchange_id}.


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Values to populate this object's parameters. |

<a name="module_Datafile--Datafile..description"></a>

#### Datafile~description : <code>string</code>
**Kind**: inner property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
<a name="module_Datafile--Datafile..md5sum"></a>

#### Datafile~md5sum : <code>string</code>
**Kind**: inner property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
<a name="module_Datafile--Datafile..file_url"></a>

#### Datafile~file_url : <code>string</code>
**Kind**: inner property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
<a name="module_Datafile--Datafile..agencies"></a>

#### Datafile~agencies : <code>string</code>
**Kind**: inner property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
<a name="module_Datafile--Datafile..filename"></a>

#### Datafile~filename : <code>string</code>
**Kind**: inner property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
**Example**  
```js
"abq-ride_20120904_0303.zip"
```
<a name="module_Datafile--Datafile..date_added"></a>

#### Datafile~date_added : <code>Date</code>
**Kind**: inner property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
<a name="module_Datafile--Datafile..uploaded_by_user"></a>

#### Datafile~uploaded_by_user : <code>string</code>
**Kind**: inner property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
<a name="module_Datafile--Datafile..size"></a>

#### Datafile~size : <code>number</code>
**Kind**: inner property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
<a name="module_Agency"></a>

## Agency

* [Agency](#module_Agency)
    * [Agency](#exp_module_Agency--Agency) ⏏
        * [new Agency(data, datafiles)](#new_module_Agency--Agency_new)
        * _static_
            * [.groupByArea(agencies)](#module_Agency--Agency.groupByArea) ⇒ <code>Object.&lt;string, Array.&lt;Agency&gt;&gt;</code>
        * _inner_
            * [~dataexchange_id](#module_Agency--Agency..dataexchange_id) : <code>string</code>
            * [~feed_baseurl](#module_Agency--Agency..feed_baseurl) : <code>string</code>
            * [~name](#module_Agency--Agency..name) : <code>string</code>
            * [~area](#module_Agency--Agency..area) : <code>string</code>
            * [~url](#module_Agency--Agency..url) : <code>string</code>
            * [~country](#module_Agency--Agency..country) : <code>string</code>
            * [~state](#module_Agency--Agency..state) : <code>string</code>
            * [~license_url](#module_Agency--Agency..license_url) : <code>string</code>
            * [~dataexchange_url](#module_Agency--Agency..dataexchange_url) : <code>string</code>
            * [~date_added](#module_Agency--Agency..date_added) : <code>Date</code>
            * [~date_last_updated](#module_Agency--Agency..date_last_updated) : <code>Date</code>
            * [~is_official](#module_Agency--Agency..is_official) : <code>boolean</code>
            * [~datafiles](#module_Agency--Agency..datafiles) : <code>Array.&lt;DataFile&gt;</code>
            * [~latestFeedUrl](#module_Agency--Agency..latestFeedUrl) : <code>string</code>

<a name="exp_module_Agency--Agency"></a>

### Agency ⏏
**Kind**: Exported class  
<a name="new_module_Agency--Agency_new"></a>

#### new Agency(data, datafiles)
An object representing an agency that publishes GTFS data to GTFS-Exchange.


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data corresponding to class's properties. |
| datafiles | <code>Object.&lt;string, object&gt;</code> | An array of [DataFile](DataFile) objects. |

<a name="module_Agency--Agency.groupByArea"></a>

#### Agency.groupByArea(agencies) ⇒ <code>Object.&lt;string, Array.&lt;Agency&gt;&gt;</code>
Group an array of agencies by area.

**Kind**: static method of <code>[Agency](#exp_module_Agency--Agency)</code>  
**Returns**: <code>Object.&lt;string, Array.&lt;Agency&gt;&gt;</code> - - Arrays of agencies grouped by area.  

| Param | Type | Description |
| --- | --- | --- |
| agencies | <code>Array.&lt;Agency&gt;</code> | An array of agencies. |

<a name="module_Agency--Agency..dataexchange_id"></a>

#### Agency~dataexchange_id : <code>string</code>
**Kind**: inner property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency..feed_baseurl"></a>

#### Agency~feed_baseurl : <code>string</code>
**Kind**: inner property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency..name"></a>

#### Agency~name : <code>string</code>
**Kind**: inner property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency..area"></a>

#### Agency~area : <code>string</code>
**Kind**: inner property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency..url"></a>

#### Agency~url : <code>string</code>
**Kind**: inner property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency..country"></a>

#### Agency~country : <code>string</code>
**Kind**: inner property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency..state"></a>

#### Agency~state : <code>string</code>
**Kind**: inner property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency..license_url"></a>

#### Agency~license_url : <code>string</code>
**Kind**: inner property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency..dataexchange_url"></a>

#### Agency~dataexchange_url : <code>string</code>
**Kind**: inner property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency..date_added"></a>

#### Agency~date_added : <code>Date</code>
**Kind**: inner property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency..date_last_updated"></a>

#### Agency~date_last_updated : <code>Date</code>
**Kind**: inner property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency..is_official"></a>

#### Agency~is_official : <code>boolean</code>
**Kind**: inner property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency..datafiles"></a>

#### Agency~datafiles : <code>Array.&lt;DataFile&gt;</code>
**Kind**: inner property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency..latestFeedUrl"></a>

#### Agency~latestFeedUrl : <code>string</code>
URL for the most current GTFS ZIP file

**Kind**: inner property of <code>[Agency](#exp_module_Agency--Agency)</code>  

[GTFS]:https://developers.google.com/transit/gtfs/
