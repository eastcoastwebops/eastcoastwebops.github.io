var ConfigurableSwatchesList={swatchesByProduct:{},init:function(){var a=this;$j(".configurable-swatch-list li").each(function(){a.initSwatch(this);var b=$j(this);b.hasClass("filter-match")&&a.handleSwatchSelect(b)})},initSwatch:function(a){var d,b=this,c=$j(a);(d=c.data("product-id"))&&("undefined"==typeof this.swatchesByProduct[d]&&(this.swatchesByProduct[d]=[]),this.swatchesByProduct[d].push(c),c.find("a").on("click",function(){return b.handleSwatchSelect(c),!1}))},handleSwatchSelect:function(a){var c,b=a.data("product-id");(c=a.data("option-label"))&&ConfigurableMediaImages.swapListImageByOption(b,c),$j.each(this.swatchesByProduct[b],function(a,b){b.removeClass("selected")}),a.addClass("selected")}};$j(document).on("configurable-media-images-init",function(){ConfigurableSwatchesList.init()});