Mmenu.addons.navbars.close=function(e){var t=jQuery('<a class="mm-btn mm-btn_close mm-navbar__btn" href="#" />').appendTo(e);this.bind("setPage:after",function(e){t[0].setAttribute("href","#"+e[0].id)}),this.bind("setPage:after:sr-text",function(e){t.html(Mmenu.sr_text(this.i18n(this.conf.screenReader.text.closeMenu))),Mmenu.sr_aria(t,"owns",t[0].getAttribute("href").slice(1))})};