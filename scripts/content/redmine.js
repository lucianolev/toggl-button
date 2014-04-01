/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false, createTag:false*/

'use strict';

/* Timer button in redmine issue details page */
togglbutton.render('#content', {}, function (elem) {
  var issueSubjectElem = $('.subject h3', elem);

  //do not render if not in issue details page
  if(issueSubjectElem === null) {
    return;
  }

  var projectElem = $('#header h1'),
    issueTitleContextualBarElem = $('.contextual', elem);

  var link = togglbutton.createTimerLink({
    className: 'redmine',
    description: issueSubjectElem.innerText,
    projectName: projectElem.innerText
  });

  issueTitleContextualBarElem.insertBefore(link, issueTitleContextualBarElem.firstChild);
});

/* Support for quick timers in RedmineCRM agile board */
togglbutton.render('.issues-board', {}, function (elem) {
  var projectElem = $('#header h1');
  var issuesCardsList = elem.querySelectorAll('.issue-card');

  for (var i = 0; i < issuesCardsList.length; ++i) {
    var issueCardElem = issuesCardsList[i];
    var issueSubjectElem = $('.name a', issueCardElem);
    var issueCardInfoElem = $('.info', issueCardElem);

    issueCardInfoElem.removeAttribute('style'); //to clear display:none when there's no assignee

    var link = togglbutton.createTimerLink({
      className: 'redmine',
      buttonType: 'minimal',
      description: issueSubjectElem.innerText,
      projectName: projectElem.innerText
    });

    issueCardInfoElem.insertBefore(link, issueCardInfoElem.firstChild);
  }

});