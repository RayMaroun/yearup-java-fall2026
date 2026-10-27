/* Workshop submission window. Ray tells Claude the live workshop and its deadline; Claude edits this file and pushes.
 * Times carry an explicit offset: Eastern is -04:00 until Sat Nov 1 2026, -05:00 from Sun Nov 2 2026 on.
 * Only one workshop is live at a time. Capstones are submitted in Brightspace, never here. */
window.SUBMIT = {
  workshop: "Workshop 2 · Neighborhood Library",
  opens:    "2026-10-23T13:00:00-04:00",   /* given Fri Oct 23 */
  deadline: "2026-10-29T08:30:00-04:00",   /* Thu Oct 29, before class starts */
  /* next: Workshop 3 · Online Store, opens Thu Oct 29 after the intro, deadline 2026-11-05T08:30:00-05:00 */
  note:     "One submission per team is enough, but every team member submits the same link so each name is on the list. README.md at the root of the repo, project in pluralsight/workshops.",
  /* Google Form behind the page: "Workshop Submission - YearUp Fall 2026", published 2026-10-27, responses in the Sheet tab "Submissions". */
  form: {
    action: "https://docs.google.com/forms/d/e/1FAIpQLSd7-DuBhPXJg8p_GymnEAawJPZtRxu6J9rAmfGeyRkd5g-mgw/formResponse",
    name:   "entry.1923989402",
    link:   "entry.495839527"
  }
};
