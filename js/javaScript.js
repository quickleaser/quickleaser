<!-- Login box script / dims background when login shown / toggles out when sign in or background clicked-->
			$(document).ready(function(){
				var login = $('#loginBox')
				var dim = $('#dim')
				$('#loginTrigger').click(function(event){
					event.preventDefault();
					if (login.is(":visible"))
					{
						$('#dim').fadeOut(0);
						login.slideUp(0);
					}
					else
					{
						$('#dim').fadeIn(0);
						login.slideDown(0);
					}
				});
				
				$('#dim').click(function() {
					if(dim.is(":visible"))
					{
						$('#dim').fadeOut(0);
						login.slideUp(0);
					}	
				});
				
			});
			
			
			
			$(document).ready(function(){
				var login = $('#loginBox')
				var dim = $('#dim')
				$('#logTrigger').click(function(event){
					event.preventDefault();
					if (login.is(":visible"))
					{
						$('#dim').fadeOut(0);
						login.slideUp(0);
					}
					else
					{
						$('#dim').fadeIn(0);
						login.slideDown(0);
					}
				});
				
				$('#dim').click(function() {
					if(dim.is(":visible"))
					{
						$('#dim').fadeOut(0);
						login.slideUp(0);
					}	
				});
				
			});
			
			
			<!-- Datepicker Function -->
			$( document ).ready(function() {
    			$("#datepicker").datepicker();
  			});
			
			 <!-- Menu drop down button / jquery script function --> 
			$(document).ready(function(){
				// build a variable to target the #menu div
				var menu = $('#menu')
				// bind a click function to the menu-trigger
				$('#menu-trigger').click(function(event){
					event.preventDefault();
					// if the menu is visible slide it up
					if (menu.is(":visible"))
					{
						menu.slideUp(400);
						$(this).removeClass("open");
					}
					// otherwise, slide the menu down
				else
				{
					menu.slideDown(400);
					$(this).addClass("open");
				}
				});
			});
			
			
			$(document).ready(function(){
				// build a variable to target the #menu div
				var mini = $('#miniMore')
				// bind a click function to the menu-trigger
				$('#lessTrigger').click(function(event){
					event.preventDefault();
					// if the menu is visible slide it up
					mini.slideUp(00);
					$('#lessTrigger').attr("style", "display: none;");
					$('#subMenuTrigger').attr("style", "display: visible;");
				});
				
				$('#subMenuTrigger').click(function(event){
					event.preventDefault();
					// if the menu is visible slide it up
					mini.slideDown(00);
					$('#lessTrigger').attr("style", "display: visible;");
					$('#subMenuTrigger').attr("style", "display: none;");
				});
	
			});

			$(document).ready(function(){
				// build a variable to target the #menu div
				var tab = $('#underTab')
				// bind a click function to the menu-trigger
				$('#blessed').click(function(event){
					event.preventDefault();
					// if the menu is visible slide it up
					if (tab.is(":visible"))
					{
						tab.slideUp(00);
					}
					else {
						tab.slideDown(00);
					}
				});
			});



			$(document).ready(function(){
				// build a variable to target the #menu div
				var menu = $('#menu')
				// bind a click function to the menu-trigger
				$('#lessTrigger2').click(function(event){
					event.preventDefault();
					// if the menu is visible slide it up
					menu.slideUp(400);
					$('#lessTrigger2').attr("style", "display: none;");
					$('#menu-trigger2').attr("style", "display: visible;");
				});
				
				$('#menu-trigger2').click(function(event){
					event.preventDefault();
					// if the menu is visible slide it up
					menu.slideDown(400);
					$('#lessTrigger2').attr("style", "display: visible;");
					$('#menu-trigger2').attr("style", "display: none;");
				});
	
			});

			
			
					  
  $(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ));
	  
  });
  
  
  $(function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
	  collapsible: true,
	  /*active: false;*/
    });
  });
 
 jQuery(document).ready(function(){
  $('#accordion .head').click(function() {
      $(this).next().toggle();
      return false;
  }).next().hide();
});
 
 
 
 <!-- function to display the different content of each nav tab -->
			$(document).ready(function(){
				var c1 = $('#c1')
				var c2 = $('#c2')
				var c3 = $('#c3')
				var c4 = $('#c4')
				$('#cont1').click(function(event){
					event.preventDefault();
					if (c1.is(":hidden")) 
					{
						$('#c1').fadeIn(0);
						$('#c2').slideUp(0);
						$('#c3').slideUp(0);
						$('#c4').slideUp(0);
						
						$('#cont1').attr("style", "background-color: #53D1FF;" + "color: white;");
						$('#cont2').attr("style", "background-color: white;" + "color: black;");
						$('#cont3').attr("style", "background-color: white;" + "color: black;");
						$('#cont4').attr("style", "background-color: white;" + "color: black;");
					}
				});
			
				$('#cont2').click(function(event){
					event.preventDefault();
					if (c2.is(":hidden")) 
					{
						$('#c1').slideUp(0);
						$('#c2').fadeIn(0);
						$('#c3').slideUp(0);
						$('#c4').slideUp(0);
						
						$('#cont2').attr("style", "background-color: #53D1FF;" + "color: white;");
						$('#cont1').attr("style", "background-color: white;" + "color: black;");
						$('#cont3').attr("style", "background-color: white;" + "color: black;");
						$('#cont4').attr("style", "background-color: white;" + "color: black;");
					}
				});
				
				$('#cont3').click(function(event){
					event.preventDefault();
					if (c3.is(":hidden")) 
					{
						$('#c1').slideUp(0);
						$('#c2').slideUp(0);
						$('#c3').fadeIn(0);
						$('#c4').slideUp(0);
						
						$('#cont3').attr("style", "background-color: #53D1FF;" + "color: white;");
						$('#cont1').attr("style", "background-color: white;" + "color: black;");
						$('#cont2').attr("style", "background-color: white;" + "color: black;");
						$('#cont4').attr("style", "background-color: white;" + "color: black;");
						
					}
				});
				
				$('#cont4').click(function(event){
					event.preventDefault();
					if (c4.is(":hidden")) 
					{
						$('#c1').slideUp(0);
						$('#c2').slideUp(0);
						$('#c3').slideUp(0);
						$('#c4').fadeIn(0);
						
						$('#cont4').attr("style", "background-color: #53D1FF;" + "color: white;");
						$('#cont1').attr("style", "background-color: white;" + "color: black;");
						$('#cont2').attr("style", "background-color: white;" + "color: black;");
						$('#cont3').attr("style", "background-color: white;" + "color: black;");
					}
				});
				
				$('#toAvail').click(function(event){
					event.preventDefault();
					if (c3.is(":hidden")) 
					{
						$('#c1').slideUp(0);
						$('#c2').slideUp(0);
						$('#c3').fadeIn(0);
						$('#c4').slideUp(0);
						
						$('#cont3').attr("style", "background-color: #53D1FF;" + "color: white;");
						$('#cont1').attr("style", "background-color: white;" + "color: black;");
						$('#cont2').attr("style", "background-color: white;" + "color: black;");
						$('#cont4').attr("style", "background-color: white;" + "color: black;");
						
					}
				});
			});
 
 <!-- --------------------------------------------------------------------------------------------------------- -->
  /*<!-- function to display the different content of each nav tab -->
			$(document).ready(function(){
				var gen = $('#general')
				var int = $('#interior')
				var pho = $('#photo')
				var com = $('#comfirm')

				$('#pl1').click(function(event){
					event.preventDefault();
					if (gen.is(":hidden")) 
					{
						gen.fadeIn(0);
						int.slideUp(0);
						pho.slideUp(0);
						com.slideUp(0);

						$('#pl1').attr("style", "color:rgb(161,161,161);" + "background-color: white;");
						$('#pl2').attr("style", "background-color: #53D1FF" + "color: white;");
						$('#pl3').attr("style", "background-color: #53D1FF" + "color: white;");
						$('#pl4').attr("style", "background-color: #53D1FF" + "color: white;");
					}
				});
			
				$('#pl2').click(function(event){
					event.preventDefault();
					if (int.is(":hidden")) 
					{
						gen.slideUp(0);
						int.fadeIn(0);
						pho.slideUp(0);
						com.slideUp(0);
						
						$('#pl1').attr("style", "background-color: #53D1FF;" + "color: white;");
						$('#pl2').attr("style", "color:rgb(161,161,161);" + "background-color: white;");
						$('#pl3').attr("style", "background-color: #53D1FF;" + "color: white;");
						$('#pl4').attr("style", "background-color: #53D1FF;" + "color: white;");
					}
				});
				
				$('#pl3').click(function(event){
					event.preventDefault();
					if (pho.is(":hidden")) 
					{
						gen.slideUp(0);
						int.slideUp(0);
						pho.fadeIn(0);
						com.slideUp(0);
						
						$('#pl1').attr("style", "background-color: #53D1FF;" + "color: white;");
						$('#pl2').attr("style", "background-color: #53D1FF;" + "color: white;");
						$('#pl3').attr("style", "color:rgb(161,161,161);" + "background-color: white;");
						$('#pl4').attr("style", "background-color: #53D1FF;" + "color: white;");
					}
				});
				
				$('#pl4').click(function(event){
					event.preventDefault();
					if (com.is(":hidden")) 
					{
						gen.slideUp(0);
						int.slideUp(0);
						pho.slideUp(0);
						com.fadeIn(0);
						
						$('#pl1').attr("style", "background-color: #53D1FF;" + "color: white;");
						$('#pl2').attr("style", "background-color: #53D1FF;" + "color: white;");
						$('#pl3').attr("style", "background-color: #53D1FF;" + "color: white;");
						$('#pl4').attr("style", "color:rgb(161,161,161);" + "background-color: white;");
					}
				});

				$('#nextBut').click(function(event){
						gen.slideUp(0);
						int.fadeIn(0);	
						$('#pl1').attr("style", "background:none;");
						$('#pl2').attr("style", "background:#FFF;");
				});
				$('#nextBut2').click(function(event){
						int.slideUp(0);
						pho.fadeIn(0);	
						$('#pl2').attr("style", "background:none;");
						$('#pl3').attr("style", "background:#FFF;");
				});
				$('#nextBut3').click(function(event){
						pho.slideUp(0);
						com.fadeIn(0);	
						$('#pl3').attr("style", "background:none;");
						$('#pl4').attr("style", "background:#FFF;");
				});
				$('#nextBut4').click(function(event){
						ser.slideUp(0);
						gin.fadeIn(0);	
						$('#pl4').attr("style", "background:none;");
						$('#pl5').attr("style", "background:#FFF;");
				});

				$('#prevBut').click(function(event){
						int.slideUp(0);
						gen.fadeIn(0);	
						$('#pl2').attr("style", "background:none;");
						$('#pl1').attr("style", "background:#FFF;");
				});
				$('#prevBut2').click(function(event){
						pho.slideUp(0);
						int.fadeIn(0);	
						$('#pl3').attr("style", "background:none;");
						$('#pl2').attr("style", "background:#FFF;");
				});
				$('#prevBut3').click(function(event){
						com.slideUp(0);
						pho.fadeIn(0);	
						$('#pl4').attr("style", "background:none;");
						$('#pl3').attr("style", "background:#FFF;");
				});
				$('#prevBut4').click(function(event){
						gin.slideUp(0);
						ser.fadeIn(0);	
						$('#pl5').attr("style", "background:none;");
						$('#pl4').attr("style", "background:#FFF;");
				});


			});


*/

	









		
$(document).ready(function(){
				$("#housePic1").hover(function() {
					$('#hP1').fadeIn(100);
				}, function() {
					$('#hP1').fadeOut(0);
				});
			
				$("#housePic2").hover(function() {
					$('#hP2').fadeIn(100);
				}, function() {
					$('#hP2').fadeOut(0);
				});
			
				$("#housePic3").hover(function() {
					$('#hP3').fadeIn(100);
				}, function() {
					$('#hP3').fadeOut(0);
				});
		
				$("#housePic4").hover(function() {
					$('#hP4').fadeIn(100);
				}, function() {
					$('#hP4').fadeOut(0);
				});
			});

			
			$(document).ready(function(){
				$('#housePic1').click(function(event) { 
					$('#hP1').fadeIn(0);
				});
			});
	

			$(document).ready(function(){
				$('#closex').click(function(event) { 
					$('#advanceProp').slideUp(200);
					$('#tenpix').slideUp(0);
				});
			});


var locations = [
          ['Austin, TX', 30.2669,-97.7428, 1],
        ];

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: new google.maps.LatLng(30.2669,-97.7428),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }
 





 
 <!------------------------------------------------------------------------------------------------------------- -->
 
 // StyleFix 1.0.2 + PrefixFree 1.0.6 / Lea Verou / MIT license
(function(){function h(a,b){return[].slice.call((b||document).querySelectorAll(a))}if(window.addEventListener){var e=window.StyleFix={link:function(a){try{if("stylesheet"!==a.rel||a.hasAttribute("data-noprefix"))return}catch(b){return}var c=a.href||a.getAttribute("data-href"),f=c.replace(/[^\/]+$/,""),i=a.parentNode,d=new XMLHttpRequest,g;d.onreadystatechange=function(){4===d.readyState&&g()};g=function(){var b=d.responseText;if(b&&a.parentNode&&(!d.status||400>d.status||600<d.status)){b=e.fix(b,
!0,a);f&&(b=b.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(b,a,c){return!/^([a-z]{3,10}:|\/|#)/i.test(c)?'url("'+f+c+'")':b}),b=b.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+f,"gi"),"$1"));var c=document.createElement("style");c.textContent=b;c.media=a.media;c.disabled=a.disabled;c.setAttribute("data-href",a.getAttribute("href"));i.insertBefore(c,a);i.removeChild(a)}};try{d.open("GET",c),d.send(null)}catch(k){"undefined"!=typeof XDomainRequest&&(d=new XDomainRequest,d.onerror=d.onprogress=
function(){},d.onload=g,d.open("GET",c),d.send(null))}a.setAttribute("data-inprogress","")},styleElement:function(a){var b=a.disabled;a.textContent=e.fix(a.textContent,!0,a);a.disabled=b},styleAttribute:function(a){var b=a.getAttribute("style"),b=e.fix(b,!1,a);a.setAttribute("style",b)},process:function(){h('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);h("style").forEach(StyleFix.styleElement);h("[style]").forEach(StyleFix.styleAttribute)},register:function(a,b){(e.fixers=
e.fixers||[]).splice(void 0===b?e.fixers.length:b,0,a)},fix:function(a,b){for(var c=0;c<e.fixers.length;c++)a=e.fixers[c](a,b)||a;return a},camelCase:function(a){return a.replace(/-([a-z])/g,function(b,a){return a.toUpperCase()}).replace("-","")},deCamelCase:function(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}};(function(){setTimeout(function(){h('link[rel="stylesheet"]').forEach(StyleFix.link)},10);document.addEventListener("DOMContentLoaded",StyleFix.process,!1)})()}})();
(function(h){function e(b,c,f,i,d){b=a[b];b.length&&(b=RegExp(c+"("+b.join("|")+")"+f,"gi"),d=d.replace(b,i));return d}if(window.StyleFix&&window.getComputedStyle){var a=window.PrefixFree={prefixCSS:function(b,c){var f=a.prefix,b=e("functions","(\\s|:|,)","\\s*\\(","$1"+f+"$2(",b),b=e("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+f+"$2$3",b),b=e("properties","(^|\\{|\\s|;)","\\s*:","$1"+f+"$2:",b);if(a.properties.length)var i=RegExp("\\b("+a.properties.join("|")+")(?!:)","gi"),b=e("valueProperties","\\b",
":(.+?);",function(a){return a.replace(i,f+"$1")},b);c&&(b=e("selectors","","\\b",a.prefixSelector,b),b=e("atrules","@","\\b","@"+f+"$1",b));return b=b.replace(RegExp("-"+f,"g"),"-")},property:function(b){return(a.properties.indexOf(b)?a.prefix:"")+b},value:function(b){b=e("functions","(^|\\s|,)","\\s*\\(","$1"+a.prefix+"$2(",b);return b=e("keywords","(^|\\s)","(\\s|$)","$1"+a.prefix+"$2$3",b)},prefixSelector:function(b){return b.replace(/^:{1,2}/,function(b){return b+a.prefix})},prefixProperty:function(b,
c){var f=a.prefix+b;return c?StyleFix.camelCase(f):f}};(function(){var b={},c=[],f=getComputedStyle(document.documentElement,null),i=document.createElement("div").style,d=function(a){if("-"===a.charAt(0)){c.push(a);var a=a.split("-"),d=a[1];for(b[d]=++b[d]||1;3<a.length;)a.pop(),d=a.join("-"),StyleFix.camelCase(d)in i&&-1===c.indexOf(d)&&c.push(d)}};if(0<f.length)for(var g=0;g<f.length;g++)d(f[g]);else for(var e in f)d(StyleFix.deCamelCase(e));var g=0,j,h;for(h in b)f=b[h],g<f&&(j=h,g=f);a.prefix=
"-"+j+"-";a.Prefix=StyleFix.camelCase(a.prefix);a.properties=[];for(g=0;g<c.length;g++)e=c[g],0===e.indexOf(a.prefix)&&(j=e.slice(a.prefix.length),StyleFix.camelCase(j)in i||a.properties.push(j));"Ms"==a.Prefix&&!("transform"in i)&&!("MsTransform"in i)&&"msTransform"in i&&a.properties.push("transform","transform-origin");a.properties.sort()})();(function(){function b(a,b){e[b]="";e[b]=a;return!!e[b]}var c={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},
element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};c["repeating-linear-gradient"]=c["repeating-radial-gradient"]=c["radial-gradient"]=c["linear-gradient"];var f={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display"};a.functions=[];a.keywords=[];var e=document.createElement("div").style,d;for(d in c){var g=c[d],h=g.property,g=d+"("+g.params+")";!b(g,h)&&b(a.prefix+
g,h)&&a.functions.push(d)}for(var j in f)h=f[j],!b(j,h)&&b(a.prefix+j,h)&&a.keywords.push(j)})();(function(){function b(a){e.textContent=a+"{}";return!!e.sheet.cssRules.length}var c={":read-only":null,":read-write":null,":any-link":null,"::selection":null},f={keyframes:"name",viewport:null,document:'regexp(".")'};a.selectors=[];a.atrules=[];var e=h.appendChild(document.createElement("style")),d;for(d in c){var g=d+(c[d]?"("+c[d]+")":"");!b(g)&&b(a.prefixSelector(g))&&a.selectors.push(d)}for(var k in f)g=
k+" "+(f[k]||""),!b("@"+g)&&b("@"+a.prefix+g)&&a.atrules.push(k);h.removeChild(e)})();a.valueProperties=["transition","transition-property"];h.className+=" "+a.prefix;StyleFix.register(a.prefixCSS)}})(document.documentElement);