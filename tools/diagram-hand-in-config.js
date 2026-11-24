/* Capstone 2: the hand-in page for the diagram file.
 * check:    which check is open: 1 or 2. Anything else (0) = the page says "not open".
 *           To open the second check, change 1 to 2 here and publish.
 * endpoint: the web app address of the small receiving program (ends in /exec).
 * After every change here, bump the ?v= tag on the script line in diagram-hand-in.html. */
window.DIAGRAM_HAND_IN = {
  check: 1,
  endpoint: "https://script.google.com/macros/s/AKfycbyOK4vR2Vut7Em05tKCf6sGDqZb-yczipGG1zeVIRmtaWwPQi79JvkbSiz_b6uMqoBP/exec"
};
