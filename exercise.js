// LinkedIn connection requests tend to pile up
// To accept all linkedIn invites using a loop

var allInvites = document.getElementsByClassName('invitation-card__action-btn artdeco-button artdeco-button--secondary ');
for (var i = 0; i < allInvites.length; i++) {
    i.click();
}