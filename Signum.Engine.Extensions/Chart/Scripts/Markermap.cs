
using Signum.Logic.Chart;
using Signum.Entities.Chart;
using Signum.Engine.Chart;
using System.Collections.Generic;

namespace Signum.Logic.Chart.Scripts 
{
    public class MarkermapChartScript : ChartScript                
    {
        public MarkermapChartScript(): base(GoogleMapsCharScript.Markermap)
        {
            this.Icon = ChartScriptLogic.LoadIcon("markermap.png");
            this.GroupBy = GroupByChart.Optional;
            this.Columns = new List<ChartScriptColumn>
            {
                new ChartScriptColumn("Latitude", ChartColumnType.Magnitude) { IsGroupKey = true } ,
                new ChartScriptColumn("Longitude", ChartColumnType.Magnitude) { IsGroupKey = true } ,
                new ChartScriptColumn("Label", ChartColumnType.String) { IsOptional = true },
                new ChartScriptColumn("Icon", ChartColumnType.String) { IsOptional = true },
                new ChartScriptColumn("Title", ChartColumnType.String) { IsOptional = true },
                new ChartScriptColumn("Info", ChartColumnType.String) { IsOptional = true },
                new ChartScriptColumn("Color Scale", ChartColumnType.Real) { IsOptional = true },
                new ChartScriptColumn("Color Scheme", ChartColumnType.Groupable) { IsOptional = true }
            };
            this.Parameters = new List<ChartScriptParameter>
            {
                new ChartScriptParameter("MapType", ChartParameterType.Enum) {  ValueDefinition = EnumValueList.Parse("Roadmap|Satellite") },
                new ChartScriptParameter("MapStyle", ChartParameterType.Enum) {  ValueDefinition = EnumValueList.Parse("Standard|Silver|Retro|Dark|Night|Aubergine") },
                new ChartScriptParameter("AnimateDrop", ChartParameterType.Enum) {  ValueDefinition = EnumValueList.Parse("No|Yes") },
                new ChartScriptParameter("AnimateOnClick", ChartParameterType.Enum) {  ValueDefinition = EnumValueList.Parse("No|Yes") },
                new ChartScriptParameter("InfoLinkPosition", ChartParameterType.Enum) {  ValueDefinition = EnumValueList.Parse("Inline|Below") },
                new ChartScriptParameter("ClusterMap", ChartParameterType.Enum) {  ValueDefinition = EnumValueList.Parse("Yes|No") },
                new ChartScriptParameter("ColorScale", ChartParameterType.Enum) {  ValueDefinition = EnumValueList.Parse("ZeroMax|MinMax|Sqrt|Log") },
                new ChartScriptParameter("ColorSet", ChartParameterType.Enum) {  ValueDefinition = EnumValueList.Parse("YlGn|YlGnBu|GnBu|BuGn|PuBuGn|PuBu|BuPu|RdPu|PuRd|OrRd|YlOrRd|YlOrBr|Purples|Blues|Greens|Oranges|Reds|Greys|PuOr|BrBG|PRGn|PiYG|RdBu|RdGy|RdYlBu|Spectral|RdYlGn") },
                new ChartScriptParameter("ColorCategory", ChartParameterType.Enum) {  ValueDefinition = EnumValueList.Parse("category10|category20|category20b|category20c|accent|paired|pastel1|pastel2|set1|set2|set3") }
            };
        }      
    }                
}
