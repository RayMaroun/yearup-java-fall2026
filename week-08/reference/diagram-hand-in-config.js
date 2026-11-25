/* Capstone 2: the hand-in page for the diagram file.
 * check:    which check is open: 1 or 2. Anything else (0) = the page says "not open".
 *           To open the second check, change 1 to 2 here and publish.
 * due:      the deadline of the open check, with the Eastern offset (-05:00 since Nov 1 2026). The page shows it
 *           and stops taking files once it has passed. Empty = no deadline shown. Change it together with check.
 * endpoint: the web app address of the small receiving program (ends in /exec).
 * After every change here, bump the ?v= tag on the script line in diagram-hand-in.html. */
window.DIAGRAM_HAND_IN = {
  check: 2,
  due: "2026-11-25T11:30:00-05:00",
  endpoint: "https://script.google.com/macros/s/AKfycbyOK4vR2Vut7Em05tKCf6sGDqZb-yczipGG1zeVIRmtaWwPQi79JvkbSiz_b6uMqoBP/exec"
};
