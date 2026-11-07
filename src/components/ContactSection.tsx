import { useState } from "react";
import { Mark } from "@/components/SocialLinks";
import { CONTACT_EMAIL, buildMailto, type ContactTopic } from "@/lib/contact";
import { SOCIAL_LINKS } from "@/lib/social";

const linkedin = SOCIAL_LINKS.find((l) => l.key === "linkedin");

const buttonClass =
  "inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-muted btn-accent-outline";

export function ContactSection({ topic }: { topic?: ContactTopic }) {
  const [address, setAddress] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function writeEmail() {
    // The address is read here, at click time, so it is never in the HTML.
    setAddress(CONTACT_EMAIL);
    window.location.href = buildMailto(topic);
  }

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="section-anchor" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-12 lg:pb-28 lg:pt-8">
        <h2 id="contact-heading" className="sr-only">
          Ways to reach me
        </h2>
        <div className="divide-y divide-rule border-t border-b border-rule">
          <article className="grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12">
            <div className="lg:col-span-4">
              <h3 className="font-display text-2xl tracking-tight sm:text-3xl">LinkedIn</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed lg:col-span-4">
              The fastest way to reach me. Best for introductions, speaking invitations,
              collaborations, and professional conversations.
            </p>
            <div className="lg:col-span-4 lg:text-right">
              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className={buttonClass}
                >
                  <Mark platform="linkedin" />
                  Message on LinkedIn
                </a>
              )}
            </div>
          </article>

          <article className="grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12">
            <div className="lg:col-span-4">
              <h3 className="font-display text-2xl tracking-tight sm:text-3xl">Email</h3>
            </div>
            <div className="text-muted-foreground leading-relaxed lg:col-span-4">
              <p>Better for longer notes, detailed opportunities, or documents.</p>
              {address && (
                <p className="mt-4 text-sm" aria-live="polite">
                  No email app opened? Use this address:{" "}
                  <span className="select-all font-medium text-foreground">{address}</span>{" "}
                  <button
                    type="button"
                    onClick={copyAddress}
                    className="link-accent-underline text-foreground"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </p>
              )}
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <button type="button" onClick={writeEmail} className={buttonClass}>
                Write an email
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
