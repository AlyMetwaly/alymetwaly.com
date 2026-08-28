import { createFileRoute } from "@tanstack/react-router";

import talk from "@/data/talks/splash.json";
import { TalkPage, talkHead, type Talk } from "@/components/TalkPage";

// SPLASH, 29 August 2026. This page stays live after the event: the URL is on a
// printed QR code and gets shared in a LinkedIn post, so it is never recycled
// for the next talk. Copy this file for the next event -- see TalkPage.tsx for
// the four steps.
//
// The path is written out twice on purpose. The router plugin parses this file
// statically and requires the createFileRoute argument to be a literal, so
// hoisting it into a constant fails the build with "expected route id to be a
// string literal".
export const Route = createFileRoute("/splash")({
  head: () => talkHead(talk as Talk, "/splash"),
  component: () => <TalkPage talk={talk as Talk} />,
});
