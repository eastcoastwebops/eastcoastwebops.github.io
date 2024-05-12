if("undefined"==typeof Effect)throw"controls.js requires including script.aculo.us' effects.js library";var Autocompleter={};Autocompleter.Base=Class.create({baseInitialize:function(a,b,c){a=$(a),this.element=a,this.update=$(b),this.hasFocus=!1,this.changed=!1,this.active=!1,this.index=0,this.entryCount=0,this.oldElementValue=this.element.value,this.setOptions?this.setOptions(c):this.options=c||{},this.options.paramName=this.options.paramName||this.element.name,this.options.tokens=this.options.tokens||[],this.options.frequency=this.options.frequency||.4,this.options.minChars=this.options.minChars||1,this.options.onShow=this.options.onShow||function(a,b){b.style.position&&"absolute"!=b.style.position||(b.style.position="absolute",Position.clone(a,b,{setHeight:!1,offsetTop:a.offsetHeight})),Effect.Appear(b,{duration:.15})},this.options.onHide=this.options.onHide||function(a,b){new Effect.Fade(b,{duration:.15})},"string"==typeof this.options.tokens&&(this.options.tokens=new Array(this.options.tokens)),this.options.tokens.include("\n")||this.options.tokens.push("\n"),this.observer=null,this.element.setAttribute("autocomplete","off"),Element.hide(this.update),Event.observe(this.element,"blur",this.onBlur.bindAsEventListener(this)),Event.observe(this.element,"keydown",this.onKeyPress.bindAsEventListener(this))},show:function(){"none"==Element.getStyle(this.update,"display")&&this.options.onShow(this.element,this.update),!this.iefix&&Prototype.Browser.IE&&"absolute"==Element.getStyle(this.update,"position")&&(new Insertion.After(this.update,'<iframe id="'+this.update.id+'_iefix" style="display:none;position:absolute;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);" src="javascript:false;" frameborder="0" scrolling="no"></iframe>'),this.iefix=$(this.update.id+"_iefix")),this.iefix&&setTimeout(this.fixIEOverlapping.bind(this),50)},fixIEOverlapping:function(){Position.clone(this.update,this.iefix,{setTop:!this.update.style.height}),this.iefix.style.zIndex=1,this.update.style.zIndex=2,Element.show(this.iefix)},hide:function(){this.stopIndicator(),"none"!=Element.getStyle(this.update,"display")&&this.options.onHide(this.element,this.update),this.iefix&&Element.hide(this.iefix)},startIndicator:function(){this.options.indicator&&Element.show(this.options.indicator)},stopIndicator:function(){this.options.indicator&&Element.hide(this.options.indicator)},onKeyPress:function(a){if(this.active)switch(a.keyCode){case Event.KEY_TAB:case Event.KEY_RETURN:this.selectEntry(),Event.stop(a);case Event.KEY_ESC:return this.hide(),this.active=!1,void Event.stop(a);case Event.KEY_LEFT:case Event.KEY_RIGHT:return;case Event.KEY_UP:return this.markPrevious(),this.render(),void Event.stop(a);case Event.KEY_DOWN:return this.markNext(),this.render(),void Event.stop(a)}else if(a.keyCode==Event.KEY_TAB||a.keyCode==Event.KEY_RETURN||Prototype.Browser.WebKit>0&&0==a.keyCode)return;this.changed=!0,this.hasFocus=!0,this.observer&&clearTimeout(this.observer),this.observer=setTimeout(this.onObserverEvent.bind(this),1e3*this.options.frequency)},activate:function(){this.changed=!1,this.hasFocus=!0,this.getUpdatedChoices()},onHover:function(a){var b=Event.findElement(a,"LI");this.index!=b.autocompleteIndex&&(this.index=b.autocompleteIndex,this.render()),Event.stop(a)},onClick:function(a){var b=Event.findElement(a,"LI");this.index=b.autocompleteIndex,this.selectEntry(),this.hide()},onBlur:function(a){setTimeout(this.hide.bind(this),250),this.hasFocus=!1,this.active=!1},render:function(){if(this.entryCount>0){for(var a=0;a<this.entryCount;a++)this.index==a?Element.addClassName(this.getEntry(a),"selected"):Element.removeClassName(this.getEntry(a),"selected");this.hasFocus&&(this.show(),this.active=!0)}else this.active=!1,this.hide()},markPrevious:function(){this.index>0?this.index--:this.index=this.entryCount-1},markNext:function(){this.index<this.entryCount-1?this.index++:this.index=0,this.getEntry(this.index).scrollIntoView(!1)},getEntry:function(a){return this.update.firstChild.childNodes[a]},getCurrentEntry:function(){return this.getEntry(this.index)},selectEntry:function(){this.active=!1,this.updateElement(this.getCurrentEntry())},updateElement:function(a){if(this.options.updateElement)return void this.options.updateElement(a);var b="";if(this.options.select){var c=$(a).select("."+this.options.select)||[];c.length>0&&(b=Element.collectTextNodes(c[0],this.options.select))}else b=Element.collectTextNodesIgnoreClass(a,"informal");var d=this.getTokenBounds();if(d[0]!=-1){var e=this.element.value.substr(0,d[0]),f=this.element.value.substr(d[0]).match(/^\s+/);f&&(e+=f[0]),this.element.value=e+b+this.element.value.substr(d[1])}else this.element.value=b;this.oldElementValue=this.element.value,this.element.focus(),this.options.afterUpdateElement&&this.options.afterUpdateElement(this.element,a)},updateChoices:function(a){if(!this.changed&&this.hasFocus){if(this.update.innerHTML=a,Element.cleanWhitespace(this.update),Element.cleanWhitespace(this.update.down()),this.update.firstChild&&this.update.down().childNodes){this.entryCount=this.update.down().childNodes.length;for(var b=0;b<this.entryCount;b++){var c=this.getEntry(b);c.autocompleteIndex=b,this.addObservers(c)}}else this.entryCount=0;this.stopIndicator(),this.index=0,1==this.entryCount&&this.options.autoSelect?(this.selectEntry(),this.hide()):this.render()}},addObservers:function(a){Event.observe(a,"mouseover",this.onHover.bindAsEventListener(this)),Event.observe(a,"click",this.onClick.bindAsEventListener(this))},onObserverEvent:function(){this.changed=!1,this.tokenBounds=null,this.getToken().length>=this.options.minChars?this.getUpdatedChoices():(this.active=!1,this.hide()),this.oldElementValue=this.element.value},getToken:function(){var a=this.getTokenBounds();return this.element.value.substring(a[0],a[1]).strip()},getTokenBounds:function(){if(null!=this.tokenBounds)return this.tokenBounds;var a=this.element.value;if(a.strip().empty())return[-1,0];for(var f,b=arguments.callee.getFirstDifferencePos(a,this.oldElementValue),c=b==this.oldElementValue.length?1:0,d=-1,e=a.length,g=0,h=this.options.tokens.length;g<h;++g)f=a.lastIndexOf(this.options.tokens[g],b+c-1),f>d&&(d=f),f=a.indexOf(this.options.tokens[g],b+c),-1!=f&&f<e&&(e=f);return this.tokenBounds=[d+1,e]}}),Autocompleter.Base.prototype.getTokenBounds.getFirstDifferencePos=function(a,b){for(var c=Math.min(a.length,b.length),d=0;d<c;++d)if(a[d]!=b[d])return d;return c},Ajax.Autocompleter=Class.create(Autocompleter.Base,{initialize:function(a,b,c,d){this.baseInitialize(a,b,d),this.options.asynchronous=!0,this.options.onComplete=this.onComplete.bind(this),this.options.defaultParams=this.options.parameters||null,this.url=c},getUpdatedChoices:function(){this.startIndicator();var a=encodeURIComponent(this.options.paramName)+"="+encodeURIComponent(this.getToken());this.options.parameters=this.options.callback?this.options.callback(this.element,a):a,this.options.defaultParams&&(this.options.parameters+="&"+this.options.defaultParams),new Ajax.Request(this.url,this.options)},onComplete:function(a){this.updateChoices(a.responseText)}}),Autocompleter.Local=Class.create(Autocompleter.Base,{initialize:function(a,b,c,d){this.baseInitialize(a,b,d),this.options.array=c},getUpdatedChoices:function(){this.updateChoices(this.options.selector(this))},setOptions:function(a){this.options=Object.extend({choices:10,partialSearch:!0,partialChars:2,ignoreCase:!0,fullSearch:!1,selector:function(a){for(var b=[],c=[],d=a.getToken(),f=0;f<a.options.array.length&&b.length<a.options.choices;f++)for(var g=a.options.array[f],h=a.options.ignoreCase?g.toLowerCase().indexOf(d.toLowerCase()):g.indexOf(d);h!=-1;){if(0==h&&g.length!=d.length){b.push("<li><strong>"+g.substr(0,d.length)+"</strong>"+g.substr(d.length)+"</li>");break}if(d.length>=a.options.partialChars&&a.options.partialSearch&&h!=-1&&(a.options.fullSearch||/\s/.test(g.substr(h-1,1)))){c.push("<li>"+g.substr(0,h)+"<strong>"+g.substr(h,d.length)+"</strong>"+g.substr(h+d.length)+"</li>");break}h=a.options.ignoreCase?g.toLowerCase().indexOf(d.toLowerCase(),h+1):g.indexOf(d,h+1)}return c.length&&(b=b.concat(c.slice(0,a.options.choices-b.length))),"<ul>"+b.join("")+"</ul>"}},a||{})}}),Field.scrollFreeActivate=function(a){setTimeout(function(){Field.activate(a)},1)},Ajax.InPlaceEditor=Class.create({initialize:function(a,b,c){this.url=b,this.element=a=$(a),this.prepareOptions(),this._controls={},arguments.callee.dealWithDeprecatedOptions(c),Object.extend(this.options,c||{}),!this.options.formId&&this.element.id&&(this.options.formId=this.element.id+"-inplaceeditor",$(this.options.formId)&&(this.options.formId="")),this.options.externalControl&&(this.options.externalControl=$(this.options.externalControl)),this.options.externalControl||(this.options.externalControlOnly=!1),this._originalBackground=this.element.getStyle("background-color")||"transparent",this.element.title=this.options.clickToEditText,this._boundCancelHandler=this.handleFormCancellation.bind(this),this._boundComplete=(this.options.onComplete||Prototype.emptyFunction).bind(this),this._boundFailureHandler=this.handleAJAXFailure.bind(this),this._boundSubmitHandler=this.handleFormSubmission.bind(this),this._boundWrapperHandler=this.wrapUp.bind(this),this.registerListeners()},checkForEscapeOrReturn:function(a){!this._editing||a.ctrlKey||a.altKey||a.shiftKey||(Event.KEY_ESC==a.keyCode?this.handleFormCancellation(a):Event.KEY_RETURN==a.keyCode&&this.handleFormSubmission(a))},createControl:function(a,b,c){var d=this.options[a+"Control"],e=this.options[a+"Text"];if("button"==d){var f=document.createElement("input");f.type="submit",f.value=e,f.className="editor_"+a+"_button","cancel"==a&&(f.onclick=this._boundCancelHandler),this._form.appendChild(f),this._controls[a]=f}else if("link"==d){var g=document.createElement("a");g.href="#",g.appendChild(document.createTextNode(e)),g.onclick="cancel"==a?this._boundCancelHandler:this._boundSubmitHandler,g.className="editor_"+a+"_link",c&&(g.className+=" "+c),this._form.appendChild(g),this._controls[a]=g}},createEditField:function(){var b,a=this.options.loadTextURL?this.options.loadingText:this.getText();if(1>=this.options.rows&&!/\r|\n/.test(this.getText())){b=document.createElement("input"),b.type="text";var c=this.options.size||this.options.cols||0;0<c&&(b.size=c)}else b=document.createElement("textarea"),b.rows=1>=this.options.rows?this.options.autoRows:this.options.rows,b.cols=this.options.cols||40;b.name=this.options.paramName,b.value=a,b.className="editor_field",this.options.submitOnBlur&&(b.onblur=this._boundSubmitHandler),this._controls.editor=b,this.options.loadTextURL&&this.loadExternalText(),this._form.appendChild(this._controls.editor)},createForm:function(){function b(b,c){var d=a.options["text"+b+"Controls"];d&&c!==!1&&a._form.appendChild(document.createTextNode(d))}var a=this;this._form=$(document.createElement("form")),this._form.id=this.options.formId,this._form.addClassName(this.options.formClassName),this._form.onsubmit=this._boundSubmitHandler,this.createEditField(),"textarea"==this._controls.editor.tagName.toLowerCase()&&this._form.appendChild(document.createElement("br")),this.options.onFormCustomization&&this.options.onFormCustomization(this,this._form),b("Before",this.options.okControl||this.options.cancelControl),this.createControl("ok",this._boundSubmitHandler),b("Between",this.options.okControl&&this.options.cancelControl),this.createControl("cancel",this._boundCancelHandler,"editor_cancel"),b("After",this.options.okControl||this.options.cancelControl)},destroy:function(){this._oldInnerHTML&&(this.element.innerHTML=this._oldInnerHTML),this.leaveEditMode(),this.unregisterListeners()},enterEditMode:function(a){this._saving||this._editing||(this._editing=!0,this.triggerCallback("onEnterEditMode"),this.options.externalControl&&this.options.externalControl.hide(),this.element.hide(),this.createForm(),this.element.parentNode.insertBefore(this._form,this.element),this.options.loadTextURL||this.postProcessEditField(),a&&Event.stop(a))},enterHover:function(a){this.options.hoverClassName&&this.element.addClassName(this.options.hoverClassName),this._saving||this.triggerCallback("onEnterHover")},getText:function(){return this.element.innerHTML.unescapeHTML()},handleAJAXFailure:function(a){this.triggerCallback("onFailure",a),this._oldInnerHTML&&(this.element.innerHTML=this._oldInnerHTML,this._oldInnerHTML=null)},handleFormCancellation:function(a){this.wrapUp(),a&&Event.stop(a)},handleFormSubmission:function(a){var b=this._form,c=$F(this._controls.editor);this.prepareSubmission();var d=this.options.callback(b,c)||"";if(Object.isString(d)&&(d=d.toQueryParams()),d.editorId=this.element.id,this.options.htmlResponse){var e=Object.extend({evalScripts:!0},this.options.ajaxOptions);Object.extend(e,{parameters:d,onComplete:this._boundWrapperHandler,onFailure:this._boundFailureHandler}),new Ajax.Updater({success:this.element},this.url,e)}else{var e=Object.extend({method:"get"},this.options.ajaxOptions);Object.extend(e,{parameters:d,onComplete:this._boundWrapperHandler,onFailure:this._boundFailureHandler}),new Ajax.Request(this.url,e)}a&&Event.stop(a)},leaveEditMode:function(){this.element.removeClassName(this.options.savingClassName),this.removeForm(),this.leaveHover(),this.element.style.backgroundColor=this._originalBackground,this.element.show(),this.options.externalControl&&this.options.externalControl.show(),this._saving=!1,this._editing=!1,this._oldInnerHTML=null,this.triggerCallback("onLeaveEditMode")},leaveHover:function(a){this.options.hoverClassName&&this.element.removeClassName(this.options.hoverClassName),this._saving||this.triggerCallback("onLeaveHover")},loadExternalText:function(){this._form.addClassName(this.options.loadingClassName),this._controls.editor.disabled=!0;var a=Object.extend({method:"get"},this.options.ajaxOptions);Object.extend(a,{parameters:"editorId="+encodeURIComponent(this.element.id),onComplete:Prototype.emptyFunction,onSuccess:function(a){this._form.removeClassName(this.options.loadingClassName);var b=a.responseText;this.options.stripLoadedTextTags&&(b=b.stripTags()),this._controls.editor.value=b,this._controls.editor.disabled=!1,this.postProcessEditField()}.bind(this),onFailure:this._boundFailureHandler}),new Ajax.Request(this.options.loadTextURL,a)},postProcessEditField:function(){var a=this.options.fieldPostCreation;a&&$(this._controls.editor)["focus"==a?"focus":"activate"]()},prepareOptions:function(){this.options=Object.clone(Ajax.InPlaceEditor.DefaultOptions),Object.extend(this.options,Ajax.InPlaceEditor.DefaultCallbacks),[this._extraDefaultOptions].flatten().compact().each(function(a){Object.extend(this.options,a)}.bind(this))},prepareSubmission:function(){this._saving=!0,this.removeForm(),this.leaveHover(),this.showSaving()},registerListeners:function(){this._listeners={};var a;$H(Ajax.InPlaceEditor.Listeners).each(function(b){a=this[b.value].bind(this),this._listeners[b.key]=a,this.options.externalControlOnly||this.element.observe(b.key,a),this.options.externalControl&&this.options.externalControl.observe(b.key,a)}.bind(this))},removeForm:function(){this._form&&(this._form.remove(),this._form=null,this._controls={})},showSaving:function(){this._oldInnerHTML=this.element.innerHTML,this.element.innerHTML=this.options.savingText,this.element.addClassName(this.options.savingClassName),this.element.style.backgroundColor=this._originalBackground,this.element.show()},triggerCallback:function(a,b){"function"==typeof this.options[a]&&this.options[a](this,b)},unregisterListeners:function(){$H(this._listeners).each(function(a){this.options.externalControlOnly||this.element.stopObserving(a.key,a.value),this.options.externalControl&&this.options.externalControl.stopObserving(a.key,a.value)}.bind(this))},wrapUp:function(a){this.leaveEditMode(),this._boundComplete(a,this.element)}}),Object.extend(Ajax.InPlaceEditor.prototype,{dispose:Ajax.InPlaceEditor.prototype.destroy}),Ajax.InPlaceCollectionEditor=Class.create(Ajax.InPlaceEditor,{initialize:function(a,b,c,d){this._extraDefaultOptions=Ajax.InPlaceCollectionEditor.DefaultOptions,a(b,c,d)},createEditField:function(){var a=document.createElement("select");a.name=this.options.paramName,a.size=1,this._controls.editor=a,this._collection=this.options.collection||[],this.options.loadCollectionURL?this.loadCollection():this.checkForExternalText(),this._form.appendChild(this._controls.editor)},loadCollection:function(){this._form.addClassName(this.options.loadingClassName),this.showLoadingText(this.options.loadingCollectionText);var options=Object.extend({method:"get"},this.options.ajaxOptions);Object.extend(options,{parameters:"editorId="+encodeURIComponent(this.element.id),onComplete:Prototype.emptyFunction,onSuccess:function(transport){var js=transport.responseText.strip();if(!/^\[.*\]$/.test(js))throw"Server returned an invalid collection representation.";this._collection=eval(js),this.checkForExternalText()}.bind(this),onFailure:this.onFailure}),new Ajax.Request(this.options.loadCollectionURL,options)},showLoadingText:function(a){this._controls.editor.disabled=!0;var b=this._controls.editor.firstChild;b||(b=document.createElement("option"),b.value="",this._controls.editor.appendChild(b),b.selected=!0),b.update((a||"").stripScripts().stripTags())},checkForExternalText:function(){this._text=this.getText(),this.options.loadTextURL?this.loadExternalText():this.buildOptionList()},loadExternalText:function(){this.showLoadingText(this.options.loadingText);var a=Object.extend({method:"get"},this.options.ajaxOptions);Object.extend(a,{parameters:"editorId="+encodeURIComponent(this.element.id),onComplete:Prototype.emptyFunction,onSuccess:function(a){this._text=a.responseText.strip(),this.buildOptionList()}.bind(this),onFailure:this.onFailure}),new Ajax.Request(this.options.loadTextURL,a)},buildOptionList:function(){this._form.removeClassName(this.options.loadingClassName),this._collection=this._collection.map(function(a){return 2===a.length?a:[a,a].flatten()});var a="value"in this.options?this.options.value:this._text,b=this._collection.any(function(b){return b[0]==a}.bind(this));this._controls.editor.update("");var c;this._collection.each(function(d,e){c=document.createElement("option"),c.value=d[0],c.selected=b?d[0]==a:0==e,c.appendChild(document.createTextNode(d[1])),this._controls.editor.appendChild(c)}.bind(this)),this._controls.editor.disabled=!1,Field.scrollFreeActivate(this._controls.editor)}}),Ajax.InPlaceEditor.prototype.initialize.dealWithDeprecatedOptions=function(a){function b(b,c){b in a||void 0===c||(a[b]=c)}a&&(b("cancelControl",a.cancelLink?"link":a.cancelButton?"button":a.cancelLink==a.cancelButton!=0&&void 0),b("okControl",a.okLink?"link":a.okButton?"button":a.okLink==a.okButton!=0&&void 0),b("highlightColor",a.highlightcolor),b("highlightEndColor",a.highlightendcolor))},Object.extend(Ajax.InPlaceEditor,{DefaultOptions:{ajaxOptions:{},autoRows:3,cancelControl:"link",cancelText:"cancel",clickToEditText:"Click to edit",externalControl:null,externalControlOnly:!1,fieldPostCreation:"activate",formClassName:"inplaceeditor-form",formId:null,highlightColor:"#ffff99",highlightEndColor:"#ffffff",hoverClassName:"",htmlResponse:!0,loadingClassName:"inplaceeditor-loading",loadingText:"Loading...",okControl:"button",okText:"ok",paramName:"value",rows:1,savingClassName:"inplaceeditor-saving",savingText:"Saving...",size:0,stripLoadedTextTags:!1,submitOnBlur:!1,textAfterControls:"",textBeforeControls:"",textBetweenControls:""},DefaultCallbacks:{callback:function(a){return Form.serialize(a)},onComplete:function(a,b){new Effect.Highlight(b,{startcolor:this.options.highlightColor,keepBackgroundImage:!0})},onEnterEditMode:null,onEnterHover:function(a){a.element.style.backgroundColor=a.options.highlightColor,a._effect&&a._effect.cancel()},onFailure:function(a,b){alert("Error communication with the server: "+a.responseText.stripTags())},onFormCustomization:null,onLeaveEditMode:null,onLeaveHover:function(a){a._effect=new Effect.Highlight(a.element,{startcolor:a.options.highlightColor,endcolor:a.options.highlightEndColor,restorecolor:a._originalBackground,keepBackgroundImage:!0})}},Listeners:{click:"enterEditMode",keydown:"checkForEscapeOrReturn",mouseover:"enterHover",mouseout:"leaveHover"}}),Ajax.InPlaceCollectionEditor.DefaultOptions={loadingCollectionText:"Loading options..."},Form.Element.DelayedObserver=Class.create({initialize:function(a,b,c){this.delay=b||.5,this.element=$(a),this.callback=c,this.timer=null,this.lastValue=$F(this.element),Event.observe(this.element,"keyup",this.delayedListener.bindAsEventListener(this))},delayedListener:function(a){this.lastValue!=$F(this.element)&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(this.onTimerEvent.bind(this),1e3*this.delay),this.lastValue=$F(this.element))},onTimerEvent:function(){this.timer=null,this.callback(this.element,$F(this.element))}});