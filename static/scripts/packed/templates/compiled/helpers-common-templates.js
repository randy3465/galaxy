Handlebars.registerPartial("clearFloatDiv",function(a){return'<div class="clear"></div>'});Handlebars.registerHelper("warningmessagesmall",function(a){return'<div class="warningmessagesmall"><strong>'+a.fn(this)+"</strong></div>"});Handlebars.registerHelper("local",function(a){return _l(a.fn(this))});Handlebars.registerPartial("iconButton",function(c,b){var a="";a+=(c.enabled)?("<a"):("<span");if(c.title){a+=' title="'+c.title+'"'}a+=' class="icon-button';if(c.isMenuButton){a+=" menu-button"}if(c.title){a+=" tooltip"}a+=" "+c.icon_class;if(!c.enabled){a+="_disabled"}a+='"';if(c.id){a+=' id="'+c.id+'"'}a+=' href="'+((c.href)?(c.href):("javascript:void(0);"))+'"';if(c.target){a+=' target="'+c.target+'"'}if(!c.visible){a+=' style="display: none;"'}a+=">"+((c.enabled)?("</a>"):("</span>"));return a});