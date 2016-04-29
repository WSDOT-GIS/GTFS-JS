GTFS-JS
=======

JavaScript library for working with [GTFS] data.

[![bitHound Score](https://www.bithound.io/github/WSDOT-GIS/GTFS-JS/badges/score.svg?)](https://www.bithound.io/github/WSDOT-GIS/GTFS-JS)

## Modules

<dl>
<dt><a href="#module_conversionUtils">conversionUtils</a></dt>
<dd><p>Module converting between object types.</p>
</dd>
<dt><a href="#module_transitfeeds/TransitFeedsClient">transitfeeds/TransitFeedsClient</a></dt>
<dd></dd>
<dt><del><a href="#module_Agency">Agency</a></del></dt>
<dd></dd>
<dt><del><a href="#module_Datafile">Datafile</a></del></dt>
<dd></dd>
<dt><del><a href="#module_gtfsx">gtfsx</a></del></dt>
<dd></dd>
</dl>

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

<a name="module_transitfeeds/TransitFeedsClient"></a>

## transitfeeds/TransitFeedsClient
**Requires**: <code>[conversionUtils](#module_conversionUtils)</code>  

* [transitfeeds/TransitFeedsClient](#module_transitfeeds/TransitFeedsClient)
    * [TransitFeedsClient](#exp_module_transitfeeds/TransitFeedsClient--TransitFeedsClient) ⏏
        * [new TransitFeedsClient(apiKey, [proxyUrl], [apiRoot])](#new_module_transitfeeds/TransitFeedsClient--TransitFeedsClient_new)
        * _instance_
            * [.getFeeds(locationId, [descendants], [page], [limit])](#module_transitfeeds/TransitFeedsClient--TransitFeedsClient+getFeeds) ⇒ <code>Promise</code>
        * _inner_
            * [~apiKey](#module_transitfeeds/TransitFeedsClient--TransitFeedsClient..apiKey) : <code>string</code>
            * [~proxyUrl](#module_transitfeeds/TransitFeedsClient--TransitFeedsClient..proxyUrl) : <code>string</code>
            * [~apiRoot](#module_transitfeeds/TransitFeedsClient--TransitFeedsClient..apiRoot) : <code>string</code>

<a name="exp_module_transitfeeds/TransitFeedsClient--TransitFeedsClient"></a>

### TransitFeedsClient ⏏
**Kind**: Exported class  
<a name="new_module_transitfeeds/TransitFeedsClient--TransitFeedsClient_new"></a>

#### new TransitFeedsClient(apiKey, [proxyUrl], [apiRoot])
transitfeeds.com API client.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| apiKey | <code>string</code> |  | API key. |
| [proxyUrl] | <code>string</code> | <code>null</code> | URL for the proxy to get around CORS non-support. This can be omitted if the API later supports CORS. |
| [apiRoot] | <code>string</code> | <code>&quot;\&quot;http://api.transitfeeds.com/v1/\&quot;&quot;</code> | Root URL for the API. |

<a name="module_transitfeeds/TransitFeedsClient--TransitFeedsClient+getFeeds"></a>

#### transitFeedsClient.getFeeds(locationId, [descendants], [page], [limit]) ⇒ <code>Promise</code>
Gets the feeds for the given location.

**Kind**: instance method of <code>[TransitFeedsClient](#exp_module_transitfeeds/TransitFeedsClient--TransitFeedsClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| locationId | <code>number</code> | The numerical location ID. E.g., 65 for WA, USA. |
| [descendants] | <code>Boolean</code> &#124; <code>number</code> | Set to true to search the location's children for feeds, false otherwise. Also accepts 0 or 1 to represent false or true, respectively. For a state you'll want this set to true. For something smaller like a city, false should work. |
| [page] | <code>number</code> | The "page" of results to return (if there are more results than can be returned at once due to the limit). |
| [limit] | <code>number</code> | The maximum number of results to return. |

<a name="module_transitfeeds/TransitFeedsClient--TransitFeedsClient..apiKey"></a>

#### TransitFeedsClient~apiKey : <code>string</code>
The transitfeeds.com API key.

**Kind**: inner property of <code>[TransitFeedsClient](#exp_module_transitfeeds/TransitFeedsClient--TransitFeedsClient)</code>  
<a name="module_transitfeeds/TransitFeedsClient--TransitFeedsClient..proxyUrl"></a>

#### TransitFeedsClient~proxyUrl : <code>string</code>
The proxy to get around API's non-support of CORS.

**Kind**: inner property of <code>[TransitFeedsClient](#exp_module_transitfeeds/TransitFeedsClient--TransitFeedsClient)</code>  
<a name="module_transitfeeds/TransitFeedsClient--TransitFeedsClient..apiRoot"></a>

#### TransitFeedsClient~apiRoot : <code>string</code>
The transitfeeds.com API root URL.

**Kind**: inner property of <code>[TransitFeedsClient](#exp_module_transitfeeds/TransitFeedsClient--TransitFeedsClient)</code>  
<a name="module_Agency"></a>

## ~~Agency~~
***Deprecated***


* ~~[Agency](#module_Agency)~~
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
<a name="module_Datafile"></a>

## ~~Datafile~~
***Deprecated***


* ~~[Datafile](#module_Datafile)~~
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
<a name="module_gtfsx"></a>

## ~~gtfsx~~
***Deprecated***


* ~~[gtfsx](#module_gtfsx)~~
    * [output](#exp_module_gtfsx--output) ⏏
        * [.parseAgencyResponse(json)](#module_gtfsx--output.parseAgencyResponse) ⇒ <code>Object</code>
        * [.getAgencies([url])](#module_gtfsx--output.getAgencies) ⇒ <code>Promise.&lt;Array.&lt;Agency&gt;&gt;</code>

<a name="exp_module_gtfsx--output"></a>

### output ⏏
**Kind**: Exported member  
<a name="module_gtfsx--output.parseAgencyResponse"></a>

#### output.parseAgencyResponse(json) ⇒ <code>Object</code>
Parses a JSON string into an object.

**Kind**: static method of <code>[output](#exp_module_gtfsx--output)</code>  
**Returns**: <code>Object</code> - - Object representation of input string.  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>string</code> | JSON string. |

<a name="module_gtfsx--output.getAgencies"></a>

#### output.getAgencies([url]) ⇒ <code>Promise.&lt;Array.&lt;Agency&gt;&gt;</code>
Gets a list of [Agnecy](Agnecy) objects.

**Kind**: static method of <code>[output](#exp_module_gtfsx--output)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Agency&gt;&gt;</code> - - Response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [url] | <code>string</code> | <code>&quot;\&quot;http://www.gtfs-data-exchange.com/api/agencies\&quot;&quot;</code> | A URL |


[GTFS]:https://developers.google.com/transit/gtfs/reference