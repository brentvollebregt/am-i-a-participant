function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function check() {
	await sleep(500); // Wait for changes to be made
	
	email_node = document.querySelector('span[email][name="me"]');
	if (email_node === null) {
		return;
	}
	my_email = email_node.getAttribute('email');
	participants_of_loaded_emails = document.querySelectorAll('div[data-message-id] span[email]');
	
	var email_in_conversation = false;
	for (var i = 0; i < participants_of_loaded_emails.length; i++) {
		if (participants_of_loaded_emails[i].getAttribute('email') === my_email) {
			email_in_conversation = true;
		}
	}

	if (!email_in_conversation) {
		search = document.querySelectorAll('span[role="link"][tabindex="0"]');
		matches = ['Reply', 'Reply all']
		for (var i = 0; i < search.length; i++) {
			if (matches.indexOf(search[i].textContent) !== -1) {
				search[i].style.boxShadow = 'inset 0 0 0 2px red';
			}
		}
	}
}

window.addEventListener('hashchange', function(e) {
    check();
});

check();
