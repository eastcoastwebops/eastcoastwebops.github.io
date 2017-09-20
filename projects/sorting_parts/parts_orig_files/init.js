(function(W, undefined) {
	var S = W.Searchanise || {};

	S.host = (S.host || 'www.searchanise.com').split('http://').join('').split('https://').join('');

	S.userOptions = S.options || {};
	S.AutoCmpParams = S.AutoCmpParams || {};
	S.ResultsParams = S.ResultsParams || {};
	S.userOptions.api_key = S.AutoCmpParams.api_key = S.ResultsParams.api_key = S.api_key || S.ApiKey;
	S.userOptions.SearchInput = S.SearchInput;

	S.paths = {};
	S.prefix = (('https:' == document.location.protocol)? 'https://s3.amazonaws.com/' : 'http://') + 'static.searchanise.com/';

	S.paths.jq      = S.jq      || '//ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js';
	S.paths.widgets = S.widgets || S.prefix + 'widgets.81935.min.js';

	S.paths.tpl     = S.tpl     || S.prefix + 'templates.[API_KEY].js'.split('[API_KEY]').join(S.userOptions.api_key);
	S.paths.style   = S.style   || S.prefix + 'styles.[API_KEY].css'.split('[API_KEY]').join(S.userOptions.api_key);
	S.paths.preload = S.preload || S.prefix + 'preload_data.[API_KEY].js'.split('[API_KEY]').join(S.userOptions.api_key);

	if (!S.userOptions.api_key) {
		return;
	}

	S.loadScript = function(href, callback)
	{
		var script = document.createElement('script');
		script.charset = 'utf-8';
		script.src = href;
		script.onload = script.onreadystatechange = function()
		{
			if (!script.readyState || /loaded|complete/.test( script.readyState )) {
				script.onload = script.onreadystatechange = null;
				script = undefined;
				callback && callback();
			}
		};

		document.getElementsByTagName('head')[0].appendChild(script);
	};

	S.loadCss = function(href, callback)
	{
		var style = document.createElement('link');
		style.rel = 'stylesheet';
		style.href = href;
		style.className = 'snize_widget_css';

		if (callback) {
			var timeoutId = setTimeout(callback, 5000);

			style.onload = function()
			{
				clearTimeout(timeoutId);
				callback();
			};
		}
		document.getElementsByTagName('head')[0].appendChild(style);
	};

	S.loader = {
		ready: null,
		loadedCount: 0,

		loaded: function()
		{
			S.loader.loadedCount ++;
			if (this.loadedCount == 5) {
				S.loader.ready();
			}
		},
 
		jqLoaded: function()
		{
			S.loadScript(S.paths.widgets, function()
			{
				S.loader.loaded();
			});

			if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
				S.loader.loaded();
			} else {
				var interval = setInterval(function()
				{
					if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
						S.loader.loaded();
						clearInterval(interval);
					};
				}, 100);
			}

			S.loader.loaded();
		},
		init: function(ready)
		{
			S.loader.ready = ready;

			S.loadScript(S.paths.tpl, function()
			{
				S.loadOptions = {};
				var templates = W.Searchanise.templates || W.Searchaise_templates || {};
				for (var i in templates) {
					S.loadOptions[i] = templates[i];
				}
				S.loader.loaded();
			});

			if (!S.forcejQuery && W.jQuery) {
				S.$ = W.jQuery;
				S.loader.jqLoaded();

			} else if(!S.forcejQuery && W.SNIZE && W.SNIZE.$) {
				S.$ = W.SNIZE.$;
				S.loader.jqLoaded();

			} else {
				S.loadScript(S.paths.jq, function()
				{
					jQuery.noConflict();
					S.$ = W.jQuery;
					S.loader.jqLoaded();
				});
			}

			S.loadCss(S.paths.style, function ()
			{
				S.loader.loaded();
			});
			S.loadScript(S.paths.preload);
		}
	};

	S.loader.init(function()
	{
		S.Init();
		S.SetPaths(S.paths);
		S.SetOptions(S.loadOptions);
		S.SetOptions(S.userOptions);
		S.SetParams(S.AutoCmpParams);
		S.SetResultsParams(S.ResultsParams);
		S.Loaded = true;
		S.Start();
	});

	W.Searchanise = S;
}(window));
