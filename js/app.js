angular.module("bMale",['ui.router','ngCookies']);

angular.module("bMale")
.config( function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/mailbox");

	$stateProvider
		.state("desktop", {
			templateUrl:"templates/desktop.html",
			controller:"desktopCtrl"
		})
		.state("signin", {
			url:"/signin",
			templateUrl:"templates/signin.html",
			controller:"signinCtrl"
		})
		.state("desktop.mailbox", {
			url:"/mailbox",
			templateUrl:"templates/mailbox.html",
			controller:"mailboxCtrl"
		})
		.state("desktop.mailbox.compose", {
			url:"/compose",
			templateUrl:"templates/mailbox.compose.html",
			controller:"composeCtrl"
		})
		.state("desktop.mailbox.view", {
			url:"/view/:messageId",
			templateUrl:"templates/mailbox.view.html",
			controller:"viewMessageCtrl",
			resolve: {
				message: function (messageService, $stateParams) {return messageService.getMessage($stateParams.messageId)}
			}
		})		
		.state("desktop.mailbox.inbox", {
			url:"/inbox",
			templateUrl:"templates/mailbox.inbox.html",
			controller:"inboxCtrl",
			resolve: {
				inboxMessages: function(messageService) { return messageService.getInbox()}
			}
		})	
		.state("desktop.mailbox.sent", {
			url:"/sent",
			templateUrl:"templates/mailbox.sent.html",
			controller:"sentCtrl",
			resolve: {
				sentMessages: function(messageService) { return messageService.getSent()}
			}			
		})
		.state("desktop.mailbox.drafts", {
			url:"/drafts",
			templateUrl:"templates/mailbox.drafts.html",
			controller:"draftsCtrl",
			resolve: {
				drafts: function (messageService) {return messageService.getDrafts()}
			}
		})
		.state("desktop.mailbox.editdraft", {
			url:"/drafts/:messageId",
			templateUrl:"templates/mailbox.drafts.edit.html",
			controller:"editDraftCtrl",
			resolve: {
				draft: function (messageService, $stateParams) {return messageService.getMessage($stateParams.messageId)}
			}
		})		
		;				
});
