/* Workshop submission window. Ray tells Claude the live workshop and its deadline; Claude edits this file and pushes.
 * Times carry an explicit offset: Eastern is -04:00 until Sat Nov 1 2026, -05:00 from Sun Nov 2 2026 on.
 * Only one workshop is live at a time. Capstones are submitted in Brightspace, never here. */
window.SUBMIT = {
  workshop: "Workshop 3 · Online Store",
  opens:    "2026-10-27T16:00:00-04:00",   /* open early so the page can be checked; the workshop is introduced Thu Oct 29 */
  deadline: "2026-11-05T08:30:00-05:00",   /* Thu Nov 5, before class starts */
  note:     "One submission per team is enough, but every team member submits the same link so each name is on the list. README.md at the root of the repo, project in pluralsight/workshops.",
  /* Google Form behind the page (Workshop Submission - YearUp Fall 2026). Filled once the form is published. */
  form: {
    action: "https://docs.google.com/forms/d/e/FORM_PUBLIC_ID/formResponse",
    name:   "entry.NAME_ID",
    link:   "entry.LINK_ID"
  }
};
