/**
 * Public contact alias.
 *
 * Change this one line if the alias changes. It is used only inside the click
 * handler on /contact, so the prerendered HTML never contains the address and
 * simple scrapers do not find it. It is not a secret: anyone who clicks the
 * button sees it, and it ships in the JS bundle.
 */
export const CONTACT_EMAIL = "talk.alymetwaly@outlook.com";

export type ContactTopic = "advisory" | "speaking";

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

const TOPIC_TEMPLATES: Record<ContactTopic, { subject: string; body: string }> = {
  advisory: {
    subject: "Advisory session request",
    body: [
      "Hi Aly,",
      "",
      "Who I am and where I work:",
      "",
      "The challenge:",
      "",
      "The outcome I am seeking:",
      "",
      "Timing, if there is a deadline:",
      "",
    ].join("\n"),
  },
  speaking: {
    subject: "Speaking invitation",
    body: [
      "Hi Aly,",
      "",
      "Who I am and my organisation:",
      "",
      "Event name, date, and location:",
      "",
      "Audience size:",
      "",
      "Format and length:",
      "",
      "Topic or outcome wanted:",
      "",
    ].join("\n"),
  },
};

/** Built at click time. Never render this into markup. */
export function buildMailto(topic?: ContactTopic): string {
  const subject = topic ? TOPIC_TEMPLATES[topic].subject : CONTACT_SUBJECT;
  const body = topic ? TOPIC_TEMPLATES[topic].body : CONTACT_BODY;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
