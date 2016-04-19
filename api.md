## Modules

<dl>
<dt><a href="#module_gtfsx">gtfsx</a></dt>
<dd></dd>
<dt><a href="#module_conversionUtils">conversionUtils</a></dt>
<dd><p>Module for working with GTFS Exchange data.</p>
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
Module for working with GTFS Exchange data.

<a name="module_conversionUtils.convertDateToDateObject"></a>

### conversionUtils.convertDateToDateObject(n) ⇒ <code>Date</code>
Converts a number representing a date returned from GTFS-Exchange into a Date object.

**Kind**: static method of <code>[conversionUtils](#module_conversionUtils)</code>  
**Returns**: <code>Date</code> - - The date equivalent of the input number.  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | A number representing a date. |

<a name="module_Datafile"></a>

## Datafile

* [Datafile](#module_Datafile)
    * [Datafile](#exp_module_Datafile--Datafile) ⏏
        * [new Datafile(data)](#new_module_Datafile--Datafile_new)
        * _instance_
            * [.description](#module_Datafile--Datafile+description) : <code>string</code>
            * [.md5sum](#module_Datafile--Datafile+md5sum) : <code>string</code>
            * [.file_url](#module_Datafile--Datafile+file_url) : <code>string</code>
            * [.agencies](#module_Datafile--Datafile+agencies) : <code>string</code>
            * [.filename](#module_Datafile--Datafile+filename) : <code>string</code>
            * [.date_added](#module_Datafile--Datafile+date_added) : <code>Date</code>
            * [.uploaded_by_user](#module_Datafile--Datafile+uploaded_by_user) : <code>string</code>
            * [.size](#module_Datafile--Datafile+size) : <code>number</code>
        * _inner_
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

<a name="module_Datafile--Datafile+description"></a>

#### datafile.description : <code>string</code>
**Kind**: instance property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
<a name="module_Datafile--Datafile+md5sum"></a>

#### datafile.md5sum : <code>string</code>
**Kind**: instance property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
<a name="module_Datafile--Datafile+file_url"></a>

#### datafile.file_url : <code>string</code>
**Kind**: instance property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
<a name="module_Datafile--Datafile+agencies"></a>

#### datafile.agencies : <code>string</code>
**Kind**: instance property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
<a name="module_Datafile--Datafile+filename"></a>

#### datafile.filename : <code>string</code>
**Kind**: instance property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
<a name="module_Datafile--Datafile+date_added"></a>

#### datafile.date_added : <code>Date</code>
**Kind**: instance property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
<a name="module_Datafile--Datafile+uploaded_by_user"></a>

#### datafile.uploaded_by_user : <code>string</code>
**Kind**: instance property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
<a name="module_Datafile--Datafile+size"></a>

#### datafile.size : <code>number</code>
**Kind**: instance property of <code>[Datafile](#exp_module_Datafile--Datafile)</code>  
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
        * _instance_
            * [.dataexchange_id](#module_Agency--Agency+dataexchange_id) : <code>string</code>
            * [.feed_baseurl](#module_Agency--Agency+feed_baseurl) : <code>string</code>
            * [.name](#module_Agency--Agency+name) : <code>string</code>
            * [.area](#module_Agency--Agency+area) : <code>string</code>
            * [.url](#module_Agency--Agency+url) : <code>string</code>
            * [.country](#module_Agency--Agency+country) : <code>string</code>
            * [.state](#module_Agency--Agency+state) : <code>string</code>
            * [.license_url](#module_Agency--Agency+license_url) : <code>string</code>
            * [.dataexchange_url](#module_Agency--Agency+dataexchange_url) : <code>string</code>
            * [.date_added](#module_Agency--Agency+date_added) : <code>Date</code>
            * [.date_last_updated](#module_Agency--Agency+date_last_updated) : <code>Date</code>
            * [.is_official](#module_Agency--Agency+is_official) : <code>boolean</code>
            * [.datafiles](#module_Agency--Agency+datafiles) : <code>Array.&lt;DataFile&gt;</code>
            * [.latestFeedUrl](#module_Agency--Agency+latestFeedUrl) : <code>string</code>
        * _static_
            * [.groupByArea(agencies)](#module_Agency--Agency.groupByArea) ⇒ <code>Object.&lt;string, Array.&lt;Agency&gt;&gt;</code>

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

<a name="module_Agency--Agency+dataexchange_id"></a>

#### agency.dataexchange_id : <code>string</code>
**Kind**: instance property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency+feed_baseurl"></a>

#### agency.feed_baseurl : <code>string</code>
**Kind**: instance property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency+name"></a>

#### agency.name : <code>string</code>
**Kind**: instance property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency+area"></a>

#### agency.area : <code>string</code>
**Kind**: instance property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency+url"></a>

#### agency.url : <code>string</code>
**Kind**: instance property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency+country"></a>

#### agency.country : <code>string</code>
**Kind**: instance property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency+state"></a>

#### agency.state : <code>string</code>
**Kind**: instance property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency+license_url"></a>

#### agency.license_url : <code>string</code>
**Kind**: instance property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency+dataexchange_url"></a>

#### agency.dataexchange_url : <code>string</code>
**Kind**: instance property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency+date_added"></a>

#### agency.date_added : <code>Date</code>
**Kind**: instance property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency+date_last_updated"></a>

#### agency.date_last_updated : <code>Date</code>
**Kind**: instance property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency+is_official"></a>

#### agency.is_official : <code>boolean</code>
**Kind**: instance property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency+datafiles"></a>

#### agency.datafiles : <code>Array.&lt;DataFile&gt;</code>
**Kind**: instance property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency+latestFeedUrl"></a>

#### agency.latestFeedUrl : <code>string</code>
URL for the most current GTFS ZIP file

**Kind**: instance property of <code>[Agency](#exp_module_Agency--Agency)</code>  
<a name="module_Agency--Agency.groupByArea"></a>

#### Agency.groupByArea(agencies) ⇒ <code>Object.&lt;string, Array.&lt;Agency&gt;&gt;</code>
Group an array of agencies by area.

**Kind**: static method of <code>[Agency](#exp_module_Agency--Agency)</code>  
**Returns**: <code>Object.&lt;string, Array.&lt;Agency&gt;&gt;</code> - - Arrays of agencies grouped by area.  

| Param | Type | Description |
| --- | --- | --- |
| agencies | <code>Array.&lt;Agency&gt;</code> | An array of agencies. |

