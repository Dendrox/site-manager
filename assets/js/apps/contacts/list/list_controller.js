ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){

	List.Controller = {
		listContacts: function(){
			var contacts = ContactManager.request("contact:entities");

			var contactsListView = new List.Contacts({
				collection: contacts
			});

			contactsListView.on("childview:contact:delete", function(childView, model){
				contacts.remove(model);
			});

			contactsListView.on("childview:contact:highlighting:toggled", function(childView, model){
				console.log(model)
			});

			contactsListView.on("childview:contact:show", function(childView, model){
				ContactManager.trigger("contact:show", model.get("id"));
				ContactManager.ContactsApp.Show.Controller.showContact(model);
			});


			ContactManager.mainRegion.show(contactsListView)
		}
	}
});