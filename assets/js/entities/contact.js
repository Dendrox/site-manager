ContactManager.module("Entities", function(Entities, 
	ContactManager, Backbone, Marionette, $, _){


		// Models
    	Entities.Contact = Backbone.Model.extend({
    		defaults : {
    			firstName : "",
    			lastName  : "",
    			phoneNumber : "No Phone Number"
    		}
    	});

    	// Collections
    	Entities.ContactCollection = Backbone.Collection.extend({
    		model : Entities.Contact,
            
    		comparator : function(contact){
                return contact.get("firstName") + " " + contact.get("lastName")
            }

    	});

    	var contacts;

    	var initializeContacts = function(){
    		contacts = new Entities.ContactCollection([

    			{
    				id : 1,
    				firstName   : "Alice",
    				lastName    : "Green",
    				phoneNumber : "555-09786"
    			},
                {
                    id : 2,
                    firstName   : "Alice",
                    lastName    : "Bower",
                    phoneNumber : "555-09786"
                },
                {
                    id : 3,
                    firstName   : "Alice",
                    lastName    : "Anney",
                    phoneNumber : "555-09786"
                },
    			{
    				id : 4,
    				firstName   : "Bob",
    				lastName    : "Green",
    				phoneNumber : "555-05586"
    			},
    			{
    				id : 5,
    				firstName   : "John",
    				lastName    : "Doe",
    				phoneNumber : "555-55554"
    			}


    		]);
    	};

    	var API = {
    		getContactEntities : function(){
    			if(contacts === undefined){
    				initializeContacts();
    			}
    			return contacts;
    		}
    	};

    	ContactManager.reqres.setHandler("contact:entities", function(){
    		return API.getContactEntities();
    	});

});