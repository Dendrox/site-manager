ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
	
	List.Contact = Marionette.ItemView.extend({
		template  : '#contact-list-item',
    	tagName   : "tr",

    	events    : {

    		"click" : "highlightName",
    		"click td a.js-show" : "showClicked",
    		"click button.js-delete" : "deleteClicked"
    	},

    	highlightName : function(e){
    		this.trigger("contact:highlighting:toggled", this.model)
    	},
    	showClicked : function(e){
    		e.preventDefault();
    		e.stopPropagation();
    		this.trigger("contact:show", this.model)
    	},
    	deleteClicked : function(e){
    		e.stopPropagation();
    		this.trigger("contact:delete", this.model);
    	},
    	remove : function(){
    		var self = this;
    		this.$el.fadeOut(function(){
    			Marionette.ItemView.prototype.remove.call(self)
    		});
    	}
	});

	List.Contacts = Marionette.CompositeView.extend({
		tagName    : "table",
		className  : "table table-hover responsive",
		template   : "#contact-list",
    	childView  : List.Contact,
    	itemViewContainer : "tbody"
	});

	
});