﻿#pragma warning disable 1591
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.34209
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Signum.Web.Mailing.Views
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Net;
    using System.Text;
    using System.Web;
    using System.Web.Helpers;
    using System.Web.Mvc;
    using System.Web.Mvc.Ajax;
    using System.Web.Mvc.Html;
    using System.Web.Routing;
    using System.Web.Security;
    using System.Web.UI;
    using System.Web.WebPages;
    
    #line 3 "..\..\Mailing\Views\EmailTemplate.cshtml"
    using Signum.Engine.Basics;
    
    #line default
    #line hidden
    
    #line 2 "..\..\Mailing\Views\EmailTemplate.cshtml"
    using Signum.Engine.DynamicQuery;
    
    #line default
    #line hidden
    using Signum.Entities;
    
    #line 1 "..\..\Mailing\Views\EmailTemplate.cshtml"
    using Signum.Entities.Mailing;
    
    #line default
    #line hidden
    using Signum.Utilities;
    using Signum.Web;
    
    #line 4 "..\..\Mailing\Views\EmailTemplate.cshtml"
    using Signum.Web.Mailing;
    
    #line default
    #line hidden
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("RazorGenerator", "2.0.0.0")]
    [System.Web.WebPages.PageVirtualPathAttribute("~/Mailing/Views/EmailTemplate.cshtml")]
    public partial class EmailTemplate : System.Web.Mvc.WebViewPage<dynamic>
    {
        public EmailTemplate()
        {
        }
        public override void Execute()
        {
WriteLiteral("\r\n");

            
            #line 6 "..\..\Mailing\Views\EmailTemplate.cshtml"
Write(Html.ScriptCss("~/Mailing/Content/Mailing.css"));

            
            #line default
            #line hidden
WriteLiteral("\r\n\r\n");

            
            #line 8 "..\..\Mailing\Views\EmailTemplate.cshtml"
 using (var ec = Html.TypeContext<EmailTemplateEntity>())
{
    ec.LabelColumns = new BsColumn(3);

            
            #line default
            #line hidden
WriteLiteral("    <div");

WriteLiteral(" class=\"col-sm-8\"");

WriteLiteral(">\r\n");

WriteLiteral("        ");

            
            #line 12 "..\..\Mailing\Views\EmailTemplate.cshtml"
   Write(Html.ValueLine(ec, e => e.Name));

            
            #line default
            #line hidden
WriteLiteral("\r\n");

WriteLiteral("        ");

            
            #line 13 "..\..\Mailing\Views\EmailTemplate.cshtml"
   Write(Html.EntityCombo(ec, e => e.SystemEmail));

            
            #line default
            #line hidden
WriteLiteral("\r\n");

WriteLiteral("        ");

            
            #line 14 "..\..\Mailing\Views\EmailTemplate.cshtml"
   Write(Html.EntityLine(ec, e => e.Query));

            
            #line default
            #line hidden
WriteLiteral("\r\n        <div");

WriteLiteral(" class=\"row\"");

WriteLiteral(">\r\n            <div");

WriteLiteral(" class=\"col-sm-4\"");

WriteLiteral(">\r\n");

WriteLiteral("                ");

            
            #line 17 "..\..\Mailing\Views\EmailTemplate.cshtml"
           Write(Html.ValueLine(ec, e => e.EditableMessage, vl => vl.InlineCheckbox = true));

            
            #line default
            #line hidden
WriteLiteral("\r\n            </div>\r\n            <div");

WriteLiteral(" class=\"col-sm-4\"");

WriteLiteral(">\r\n");

WriteLiteral("                ");

            
            #line 20 "..\..\Mailing\Views\EmailTemplate.cshtml"
           Write(Html.ValueLine(ec, e => e.DisableAuthorization, vl => vl.InlineCheckbox = true));

            
            #line default
            #line hidden
WriteLiteral("\r\n            </div>\r\n            <div");

WriteLiteral(" class=\"col-sm-4\"");

WriteLiteral(">\r\n");

WriteLiteral("                ");

            
            #line 23 "..\..\Mailing\Views\EmailTemplate.cshtml"
           Write(Html.ValueLine(ec, e => e.SendDifferentMessages, vl => vl.InlineCheckbox = true));

            
            #line default
            #line hidden
WriteLiteral("\r\n            </div>\r\n        </div>\r\n    </div>\r\n");

            
            #line 27 "..\..\Mailing\Views\EmailTemplate.cshtml"
    
    if (!ec.Value.IsNew)
    {

        using (var sc = ec.SubContext())
        {
            sc.FormGroupStyle = FormGroupStyle.Basic;

            
            #line default
            #line hidden
WriteLiteral("    <div");

WriteLiteral(" class=\"col-sm-4 form-vertical\"");

WriteLiteral(" style=\"margin-top:-12px\"");

WriteLiteral(">\r\n        <fieldset>\r\n            <legend>Active</legend>\r\n");

WriteLiteral("            ");

            
            #line 37 "..\..\Mailing\Views\EmailTemplate.cshtml"
       Write(Html.ValueLine(sc, e => e.Active, vl => vl.InlineCheckbox = true));

            
            #line default
            #line hidden
WriteLiteral("\r\n");

WriteLiteral("            ");

            
            #line 38 "..\..\Mailing\Views\EmailTemplate.cshtml"
       Write(Html.ValueLine(sc, e => e.StartDate));

            
            #line default
            #line hidden
WriteLiteral("\r\n");

WriteLiteral("            ");

            
            #line 39 "..\..\Mailing\Views\EmailTemplate.cshtml"
       Write(Html.ValueLine(sc, e => e.EndDate));

            
            #line default
            #line hidden
WriteLiteral("\r\n        </fieldset>\r\n    </div>\r\n");

            
            #line 42 "..\..\Mailing\Views\EmailTemplate.cshtml"
        }
    }
    ec.LabelColumns = new BsColumn(2);
    if (ec.Value.Query != null)
    {
        object queryName = QueryLogic.ToQueryName(ec.Value.Query.Key);
        ViewData[ViewDataKeys.QueryDescription] = DynamicQueryManager.Current.QueryDescription(queryName); //To be use inside query token controls
        

            
            #line default
            #line hidden
WriteLiteral("        <div");

WriteLiteral(" style=\"clear:both\"");

WriteLiteral("></div>\r\n");

            
            #line 51 "..\..\Mailing\Views\EmailTemplate.cshtml"
    
            
            #line default
            #line hidden
            
            #line 51 "..\..\Mailing\Views\EmailTemplate.cshtml"
Write(Html.EntityDetail(ec, e => e.From, el => el.PreserveViewData = true));

            
            #line default
            #line hidden
            
            #line 51 "..\..\Mailing\Views\EmailTemplate.cshtml"
                                                                         

            
            #line default
            #line hidden
WriteLiteral("    <div");

WriteLiteral(" class=\"repeater-inline\"");

WriteLiteral(">\r\n");

WriteLiteral("        ");

            
            #line 53 "..\..\Mailing\Views\EmailTemplate.cshtml"
   Write(Html.EntityRepeater(ec, e => e.Recipients, el => el.PreserveViewData = true));

            
            #line default
            #line hidden
WriteLiteral("\r\n    </div>\r\n");

            
            #line 55 "..\..\Mailing\Views\EmailTemplate.cshtml"
    
            
            #line default
            #line hidden
            
            #line 55 "..\..\Mailing\Views\EmailTemplate.cshtml"
Write(Html.EntityLine(ec, e => e.MasterTemplate));

            
            #line default
            #line hidden
            
            #line 55 "..\..\Mailing\Views\EmailTemplate.cshtml"
                                               
    
            
            #line default
            #line hidden
            
            #line 56 "..\..\Mailing\Views\EmailTemplate.cshtml"
Write(Html.ValueLine(ec, e => e.IsBodyHtml));

            
            #line default
            #line hidden
            
            #line 56 "..\..\Mailing\Views\EmailTemplate.cshtml"
                                          


            
            #line default
            #line hidden
WriteLiteral("    <div");

WriteLiteral(" class=\"sf-email-replacements-container\"");

WriteLiteral(">\r\n");

WriteLiteral("        ");

            
            #line 59 "..\..\Mailing\Views\EmailTemplate.cshtml"
   Write(Html.EntityTabRepeater(ec, e => e.Messages, er =>
       {
           er.PreserveViewData = true;
       }));

            
            #line default
            #line hidden
WriteLiteral("\r\n\r\n    </div>\r\n");

            
            #line 65 "..\..\Mailing\Views\EmailTemplate.cshtml"
    }
}

            
            #line default
            #line hidden
WriteLiteral("\r\n<script>\r\n    $(function () {\r\n");

WriteLiteral("        ");

            
            #line 70 "..\..\Mailing\Views\EmailTemplate.cshtml"
    Write(MailingClient.Module["initReplacements"]());

            
            #line default
            #line hidden
WriteLiteral("\r\n    });\r\n</script>\r\n");

        }
    }
}
#pragma warning restore 1591
