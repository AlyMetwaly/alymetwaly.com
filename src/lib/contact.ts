/**
 * Public contact alias.
 *
 * Change this one line if the alias changes. It is used only inside the click
 * handler on /contact, so the prerendered HTML never contains the address and
 * simple scrapers do not find it. It is not a secret: anyone who clicks the
 * button sees it, and it ships in the JS bundle.
 */
export const CONTACT_EMAIL = "talk.alymetwaly@outlook.com";

export const CONTACT_SUBJECT = "Hello from alymetwaly.com";

export const CONTACT_BODY = [
  "Hi Aly,",
  "",
  "Who I am and where I work:",
  "",
  "What I would like to talk about:",
  "",
  "Timing, if there is a date or deadline:",
  "",
].join("\n");

/** Built at click time. Never render this into markup. */
export function buildMailto(): string {
  const subject = encodeURIComponent(CONTACT_SUBJECT);
  const body = encodeURIComponent(CONTACT_BODY);
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
