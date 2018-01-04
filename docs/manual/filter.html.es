<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es"><head>
<meta content="text/html; charset=ISO-8859-1" http-equiv="Content-Type" />
<!--
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              This file is generated from xml source: DO NOT EDIT
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      -->
<title>Filtros - Servidor HTTP Apache Versi�n 2.5</title>
<link href="./style/css/manual.css" rel="stylesheet" media="all" type="text/css" title="Main stylesheet" />
<link href="./style/css/manual-loose-100pc.css" rel="alternate stylesheet" media="all" type="text/css" title="No Sidebar - Default font size" />
<link href="./style/css/manual-print.css" rel="stylesheet" media="print" type="text/css" /><link rel="stylesheet" type="text/css" href="./style/css/prettify.css" />
<script src="./style/scripts/prettify.min.js" type="text/javascript">
</script>

<link href="./images/favicon.ico" rel="shortcut icon" /></head>
<body id="manual-page"><div id="page-header">
<p class="menu"><a href="./mod/">M�dulos</a> | <a href="./mod/quickreference.html">Directivas</a> | <a href="http://wiki.apache.org/httpd/FAQ">Preguntas Frecuentes</a> | <a href="./glossary.html">Glosario</a> | <a href="./sitemap.html">Mapa del sitio web</a></p>
<p class="apache">Versi�n 2.5 del Servidor HTTP Apache</p>
<img alt="" src="./images/feather.png" /></div>
<div class="up"><a href="./"><img title="&lt;-" alt="&lt;-" src="./images/left.gif" /></a></div>
<div id="path">
<a href="http://www.apache.org/">Apache</a> &gt; <a href="http://httpd.apache.org/">Servidor HTTP</a> &gt; <a href="http://httpd.apache.org/docs/">Documentaci�n</a> &gt; <a href="./">Versi�n 2.5</a></div><div id="page-content"><div id="preamble"><h1>Filtros</h1>
<div class="toplang">
<p><span>Idiomas disponibles: </span><a href="./en/filter.html" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="./es/filter.html" title="Espa�ol">&nbsp;es&nbsp;</a> |
<a href="./fr/filter.html" hreflang="fr" rel="alternate" title="Fran�ais">&nbsp;fr&nbsp;</a> |
<a href="./ja/filter.html" hreflang="ja" rel="alternate" title="Japanese">&nbsp;ja&nbsp;</a> |
<a href="./ko/filter.html" hreflang="ko" rel="alternate" title="Korean">&nbsp;ko&nbsp;</a> |
<a href="./tr/filter.html" hreflang="tr" rel="alternate" title="T�rk�e">&nbsp;tr&nbsp;</a></p>
</div>

	    <p>Este documento describe c�mo usar filtros en Apache.</p>
	  </div>
<div id="quickview"><ul id="toc"><li><img alt="" src="./images/down.gif" /> <a href="#intro">Filtros en Apache 2</a></li>
<li><img alt="" src="./images/down.gif" /> <a href="#smart">Filtrado Inteligente</a></li>
<li><img alt="" src="./images/down.gif" /> <a href="#service">Filtros expuestos como un servicio HTTP</a></li>
<li><img alt="" src="./images/down.gif" /> <a href="#using">Usando los Filtros</a></li>
</ul><h3>Consulte tambi�n</h3><ul class="seealso"><li><a href="#comments_section">Comentarios</a></li></ul></div>
<div class="top"><a href="#page-header"><img alt="top" src="./images/up.gif" /></a></div>
<div class="section">
<h2><a name="intro" id="intro">Filtros en Apache 2</a></h2>
	    
	    <table class="related"><tr><th>M�dulos Relacionados</th><th>Directivas Relacionadas</th></tr><tr><td><ul><li><code class="module"><a href="./mod/mod_filter.html">mod_filter</a></code></li><li><code class="module"><a href="./mod/mod_deflate.html">mod_deflate</a></code></li><li><code class="module"><a href="./mod/mod_ext_filter.html">mod_ext_filter</a></code></li><li><code class="module"><a href="./mod/mod_include.html">mod_include</a></code></li><li><code class="module"><a href="./mod/mod_charset_lite.html">mod_charset_lite</a></code></li><li><code class="module"><a href="./mod/mod_reflector.html">mod_reflector</a></code></li><li><code class="module"><a href="./mod/mod_buffer.html">mod_buffer</a></code></li><li><code class="module"><a href="./mod/mod_data.html">mod_data</a></code></li><li><code class="module"><a href="./mod/mod_ratelimit.html">mod_ratelimit</a></code></li><li><code class="module"><a href="./mod/mod_reqtimeout.html">mod_reqtimeout</a></code></li><li><code class="module"><a href="./mod/mod_request.html">mod_request</a></code></li><li><code class="module"><a href="./mod/mod_sed.html">mod_sed</a></code></li><li><code class="module"><a href="./mod/mod_substitute.html">mod_substitute</a></code></li><li><code class="module"><a href="./mod/mod_xml2enc.html">mod_xml2enc</a></code></li><li><code class="module"><a href="./mod/mod_proxy_html.html">mod_proxy_html</a></code></li><li><code class="module"><a href="./mod/mod_policy.html">mod_policy</a></code></li></ul></td><td><ul><li><code class="directive"><a href="./mod/mod_filter.html#filterchain">FilterChain</a></code></li><li><code class="directive"><a href="./mod/mod_filter.html#filterdeclare">FilterDeclare</a></code></li><li><code class="directive"><a href="./mod/mod_filter.html#filterprotocol">FilterProtocol</a></code></li><li><code class="directive"><a href="./mod/mod_filter.html#filterprovider">FilterProvider</a></code></li><li><code class="directive"><a href="./mod/mod_mime.html#addinputfilter">AddInputFilter</a></code></li><li><code class="directive"><a href="./mod/mod_mime.html#addoutputfilter">AddOutputFilter</a></code></li><li><code class="directive"><a href="./mod/mod_mime.html#removeinputfilter">RemoveInputFilter</a></code></li><li><code class="directive"><a href="./mod/mod_mime.html#removeoutputfilter">RemoveOutputFilter</a></code></li><li><code class="directive"><a href="./mod/mod_reflector.html#reflectorheader">ReflectorHeader</a></code></li><li><code class="directive"><a href="./mod/mod_ext_filter.html#extfilterdefine">ExtFilterDefine</a></code></li><li><code class="directive"><a href="./mod/mod_ext_filter.html#extfilteroptions">ExtFilterOptions</a></code></li><li><code class="directive"><a href="./mod/core.html#setinputfilter">SetInputFilter</a></code></li><li><code class="directive"><a href="./mod/core.html#setoutputfilter">SetOutputFilter</a></code></li></ul></td></tr></table>

		    <p>La cadena de filtrado est� disponible en Apache 2.0 y superiores.
		    Un <em>filtro</em> es un proceso que se aplica a los datos que
		    se reciben o se env�an por el servidor. Los datos enviados
		    por los clientes al servidor son procesados por <em>filtros de
		    entrada</em> mientras que los datos enviados por el servidor se
		    procesan por los <em>filtros de salida</em>. A los datos se les
		    pueden aplicar varios filtros, y el orden en que se aplica cada
		    filtro puede especificarse expl�citamente.
		    Todo este proceso es independiente de las tradicionales fase de
		    peticiones</p>
		    <p class="figure">
			<img src="images/filter_arch.png" width="569" height="392" alt="Filters can be chained, in a Data Axis orthogonal to request processing" />
			</p>
			<p>Algunos ejemplos de filtrado en la distribuci�n est�ndar de Apache son:</p>
			<ul>
			<li><code class="module"><a href="./mod/mod_include.html">mod_include</a></code>, implementa  server-side includes (SSI).</li>
			<li><code class="module"><a href="./mod/mod_ssl.html">mod_ssl</a></code>, implementa cifrado SSL (https).</li>
			<li><code class="module"><a href="./mod/mod_deflate.html">mod_deflate</a></code>, implementa compresi�n y descompresi�n en el acto.</li>
			<li><code class="module"><a href="./mod/mod_charset_lite.html">mod_charset_lite</a></code>, transcodificaci�n entre diferentes juegos de caracteres.</li>
			<li><code class="module"><a href="./mod/mod_ext_filter.html">mod_ext_filter</a></code>, ejecuta un programa externo como filtro.</li>
			</ul>
		    <p>Los filtros se usan internamente por Apache para llevar a cabo
		    funciones tales como chunking y servir peticiones de
		    byte-range. Adem�s, los m�dulos contienen filtros que se
		    pueden seleccionar usando directivas de configuraci�n al
		    iniciar el servidor.</p>

		    <p>Una mayor amplitud de aplicaciones son implementadas con m�dulos de 
		    filtros de terceros que estan disponibles en <a href="http://modules.apache.org/">modules.apache.org</a> y en otros lados.
		    algunos de ellos son:</p>

		    <ul>
			<li>Procesamiento y reescritura de HTML y XML.</li>
			<li>Transformaciones de XSLT y XIncludes.</li>
			<li>Soporte de espacios de nombres en XML.</li>
			<li>Manipulaci�n de carga de archivos y decodificaci�n de los 
				formularios HTML.</li>
			<li>Procesamiento de im�genes.</li>
			<li>Protecci�n de aplicaciones vulnerables, tales como scripts PHP</li>
			<li>Edici�n de texto de b�squeda y remplazo.</li>
			</ul>
		</div><div class="top"><a href="#page-header"><img alt="top" src="./images/up.gif" /></a></div>
<div class="section">
<h2><a name="smart" id="smart">Filtrado Inteligente</a></h2>
			
				<p class="figure">
				<img src="images/mod_filter_new.png" width="423" height="331" alt="Smart filtering applies different filter providers according to the state of request processing" />
				</p>
				<p><code class="module"><a href="./mod/mod_filter.html">mod_filter</a></code>, incluido en Apache 2.1 y posterior,
				habilita la cadena de filtrado para ser configurada din�micamente en
				tiempo de ejecuci�n. As�, por ejemplo, usted puede configurar un 
				proxy para que reescriba HTML con un filtro de HTML y im�genes JPEG
				con filtros completos por separado, a pesar de que el proxy no tiene 
				informaci�n previa sobre lo que enviar� al servidor de origen.
				Esto funciona usando un engranaje filtros, que env�a a diferentes 
				proveedores dependiendo del contenido en tiempo de ejecuci�n.
				Cualquier filtro puede ser, ya sea insertado directamente en la
				cadena y ejecutado incondicionalmente, o usado como proveedor y
				a�adido din�micamente
				Por ejemplo:</p>
				<ul>
				<li>Un filtro de procesamiento de HTML s�lo se ejecuta si el 
					contenido es text/html o application/xhtml + xml.</li>
				<li>Un filtro de compresi�n s�lo se ejecuta si la entrada es un tipo 
					compresible y no est� ya comprimida.</li>
				<li>Se insertar� un filtro de conversi�n de juego de caracteres,
					si un documento de texto no est� ya en el juego de caracteres 
					deseado.</li>
			</ul>
		</div><div class="top"><a href="#page-header"><img alt="top" src="./images/up.gif" /></a></div>
<div class="section">
<h2><a name="service" id="service">Filtros expuestos como un servicio HTTP</a></h2>

		
		<p>Los filtros pueden ser usados para procesar contenido originado 
		desde el cliente adem�s de usarse para procesar el contenido originado
		desde el propio servidor usando el m�dulo <code class="module"><a href="./mod/mod_reflector.html">mod_reflector</a></code>.</p>

		<p><code class="module"><a href="./mod/mod_reflector.html">mod_reflector</a></code> acepta peticiones POST de los clientes, y
		refleja el cuerpo de la petici�n POST recibida, dentro del contenido de la 
		respuesta de la petici�n, pasa a trav�s de la pila del filtro de salida en 
		el camino de vuelta al cliente.</p>

		<p>Esta t�cnica se puede utilizar como una alternativa a un servicio web
		que se ejecuta en una pila de de aplicaciones dentro del servidor,
		en donde el filtro de salida proporciona la transformaci�n requerida en el
		cuerpo de la petici�n. Por ejemplo, el m�dulo <code class="module"><a href="./mod/mod_deflate.html">mod_deflate</a></code>
		puede ser usado para proporcionar un servicio de compresi�n general,
		o un filtro de transformaci�n de imagen, puede ser convertido en un
		servicio de conversi�n de im�genes.
		</p>

		</div><div class="top"><a href="#page-header"><img alt="top" src="./images/up.gif" /></a></div>
<div class="section">
<h2><a name="using" id="using">Usando los Filtros</a></h2>
		
		<p>Hay dos formas de usar el filtrado: de forma Simple y Din�mica.
		Generalmente, deber� usar una forma u otra; ya que mezclarlas puede
		causar consecuencias inesperadas (a pesar de que reglas de Entrada de 
		tipo simple pueden ser combinadas libremente con reglas de filtrado 
		de Salidas de tipo simple o din�mico).</p>
		<p>La forma m�s sencilla es la �nica manera de configurar filtros de 
		Entrada, y es suficiente para filtros de Salida donde se necesita una
		cadena de filtros est�tica.
		Las directivas m�s relevantes son:
		    <code class="directive"><a href="./mod/core.html#setinputfilter">SetInputFilter</a></code>,
		    <code class="directive"><a href="./mod/core.html#setoutputfilter">SetOutputFilter</a></code>,
		    <code class="directive"><a href="./mod/mod_mime.html#addinputfilter">AddInputFilter</a></code>,
		    <code class="directive"><a href="./mod/mod_mime.html#addoutputfilter">AddOutputFilter</a></code>,
		    <code class="directive"><a href="./mod/mod_mime.html#removeinputfilter">RemoveInputFilter</a></code>, and
		    <code class="directive"><a href="./mod/mod_mime.html#removeoutputfilter">RemoveOutputFilter</a></code>.</p>

		<p>La forma Din�mica habilita ambas configuraciones est�tica, y din�mica, para los filtros de Salida, como se plantea en la p�gina <code class="module"><a href="./mod/mod_filter.html">mod_filter</a></code>.
		Las directivas m�s relevantes son:
		    <code class="directive"><a href="./mod/mod_filter.html#filterchain">FilterChain</a></code>,
		    <code class="directive"><a href="./mod/mod_filter.html#filterdeclare">FilterDeclare</a></code>, and
		    <code class="directive"><a href="./mod/mod_filter.html#filterprovider">FilterProvider</a></code>.</p>

		<p>Una directiva m�s como es <code class="directive"><a href="./mod/mod_filter.html#addoutputfilterbytype">AddOutputFilterByType</a></code> sigue siendo 
		soportada pero esta obsoleta. Usa en cambio la configuraci�n din�mica.</p>

	  </div></div>
<div class="bottomlang">
<p><span>Idiomas disponibles: </span><a href="./en/filter.html" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="./es/filter.html" title="Espa�ol">&nbsp;es&nbsp;</a> |
<a href="./fr/filter.html" hreflang="fr" rel="alternate" title="Fran�ais">&nbsp;fr&nbsp;</a> |
<a href="./ja/filter.html" hreflang="ja" rel="alternate" title="Japanese">&nbsp;ja&nbsp;</a> |
<a href="./ko/filter.html" hreflang="ko" rel="alternate" title="Korean">&nbsp;ko&nbsp;</a> |
<a href="./tr/filter.html" hreflang="tr" rel="alternate" title="T�rk�e">&nbsp;tr&nbsp;</a></p>
</div><div class="top"><a href="#page-header"><img src="./images/up.gif" alt="top" /></a></div><div class="section"><h2><a id="comments_section" name="comments_section">Comentarios</a></h2><div class="warning"><strong>Notice:</strong><br />This is not a Q&amp;A section. Comments placed here should be pointed towards suggestions on improving the documentation or server, and may be removed again by our moderators if they are either implemented or considered invalid/off-topic. Questions on how to manage the Apache HTTP Server should be directed at either our IRC channel, #httpd, on Freenode, or sent to our <a href="http://httpd.apache.org/lists.html">mailing lists</a>.</div>
<script type="text/javascript"><!--//--><![CDATA[//><!--
var comments_shortname = 'httpd';
var comments_identifier = 'http://httpd.apache.org/docs/trunk/filter.html';
(function(w, d) {
    if (w.location.hostname.toLowerCase() == "httpd.apache.org") {
        d.write('<div id="comments_thread"><\/div>');
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://comments.apache.org/show_comments.lua?site=' + comments_shortname + '&page=' + comments_identifier;
        (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s);
    }
    else {
        d.write('<div id="comments_thread">Comments are disabled for this page at the moment.<\/div>');
    }
})(window, document);
//--><!]]></script></div><div id="footer">
<p class="apache">Copyright 2018 The Apache Software Foundation.<br />Licencia bajo los t�rminos de la <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>.</p>
<p class="menu"><a href="./mod/">M�dulos</a> | <a href="./mod/quickreference.html">Directivas</a> | <a href="http://wiki.apache.org/httpd/FAQ">Preguntas Frecuentes</a> | <a href="./glossary.html">Glosario</a> | <a href="./sitemap.html">Mapa del sitio web</a></p></div><script type="text/javascript"><!--//--><![CDATA[//><!--
if (typeof(prettyPrint) !== 'undefined') {
    prettyPrint();
}
//--><!]]></script>
</body></html>