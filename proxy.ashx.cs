using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Web;

namespace GtfsJs
{
	/// <summary>
	/// Summary description for proxy
	/// </summary>
	public class proxy : IHttpHandler
	{
		static readonly Regex allowedRe = new Regex(@"^www\.gtfs-data-exchange\.com$", RegexOptions.IgnoreCase);

		public void ProcessRequest(HttpContext context)
		{
			// Get the URL from the query string.
			var url = context.Request.Url.Query.TrimStart('?');
			if (Uri.IsWellFormedUriString(url, UriKind.Absolute))
			{
				var uri = new Uri(url);

				if (!allowedRe.IsMatch(uri.Host))
				{
					context.Response.ContentType = "text/plain";
					context.Response.StatusCode = 403;
					context.Response.Write("The specified host is not permitted by this proxy.");
				}
				else
				{
					var req = (HttpWebRequest)HttpWebRequest.Create(uri);
					using (var resp = (HttpWebResponse)req.GetResponse())
					{
						context.Response.StatusCode = (int)resp.StatusCode;
						context.Response.ContentType = resp.ContentType;
						using (var stream = resp.GetResponseStream())
						{
							stream.CopyTo(context.Response.OutputStream);
						}
					}
				}
			}
			else
			{
				context.Response.StatusCode = 400;
				context.Response.ContentType = "text/plain";
				context.Response.Write("No URI was specified for the proxy.");
			}
		}

		public bool IsReusable
		{
			get
			{
				return false;
			}
		}
	}
}