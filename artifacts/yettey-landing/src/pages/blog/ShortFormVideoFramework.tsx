import { BlogPostLayout, BlogPostData } from "@/components/blog/BlogPostLayout";

const data: BlogPostData = {
  title: "How to Create Viral Short-Form Videos (The Framework)",
  summary: "Short-form content has a formula. Learn the hook-body-CTA structure that top creators use to consistently hit high engagement — not just once, but reliably.",
  date: "March 10, 2026",
  readTime: "6 min read",
  category: "Social Media",
  accent: "#F97316",
  emoji: "📱",
  tags: ["Short-form Video", "Social Media", "Content Marketing AI"],
  tldr: [
    "Viral short-form videos follow a repeatable structure: Hook → Body → CTA.",
    "You have under 2 seconds to stop the scroll — the hook is everything.",
    "Specificity beats generality: narrow, concrete content outperforms broad takes.",
    "Consistency in posting beats quality in individual videos over the long term.",
  ],
  related: [
    { title: "How to Turn Long Videos into Viral Shorts", slug: "viral-shorts-without-editing", readTime: "5 min read", emoji: "🎬" },
    { title: "Content Marketing with AI: What Actually Works", slug: "content-marketing-ai", readTime: "7 min read", emoji: "🚀" },
  ],
  content: (
    <div>
      <h2>Why Most Short-Form Videos Fail</h2>
      <p>
        Most creators approach short-form content the same way they approach long-form: introduce yourself,
        explain the context, get to the point eventually.
      </p>
      <p>
        On TikTok, Reels, and Shorts, that's a death sentence. You don't have 30 seconds to warm up the audience.
        You have under 2 seconds before they scroll.
      </p>
      <p>
        The creators who consistently perform well aren't luckier or more talented. They've internalized a framework
        that works with how short-form platforms actually distribute content.
      </p>

      <h2>The Three-Part Framework: Hook → Body → CTA</h2>

      <h3>Part 1: The Hook (Seconds 0–3)</h3>
      <p>
        The hook is the single most important element of a short-form video. It determines whether anyone
        watches the rest.
      </p>
      <p>
        A strong hook does one of three things:
      </p>
      <ul>
        <li><strong>Creates a knowledge gap</strong> — "Most people don't know this about content marketing…"</li>
        <li><strong>Makes a bold claim</strong> — "I went from 0 to 50,000 followers in 90 days without going viral."</li>
        <li><strong>States a specific problem</strong> — "If your content isn't getting views, here's exactly why."</li>
      </ul>
      <p>
        Notice what all of these have in common: they create a reason to keep watching. They imply something
        valuable is coming. Don't start with "Hey guys, welcome back" — start with the payoff.
      </p>

      <h3>Part 2: The Body (Seconds 3–40)</h3>
      <p>
        The body delivers on the promise of the hook. It should be structured, specific, and fast-moving.
      </p>
      <p>
        Best practices:
      </p>
      <ul>
        <li>Use numbered lists — "Three reasons why…" creates a natural completion loop</li>
        <li>Be concrete, not abstract — "I saved 3 hours per week" beats "I became more efficient"</li>
        <li>Cut every sentence that doesn't add value — short-form punishes padding</li>
        <li>Vary your pacing — a beat of silence or a visual cut keeps attention</li>
      </ul>

      <h3>Part 3: The CTA (Final 5–10 seconds)</h3>
      <p>
        Every video should end with an action. Not necessarily a sales pitch — it could be "follow for more of this,"
        "comment your biggest challenge," or "save this for later."
      </p>
      <p>
        The algorithm rewards engagement signals — comments, saves, shares. Your CTA should make the viewer want to
        interact, not just passively watch.
      </p>

      <h2>The Specificity Rule</h2>
      <p>
        The biggest mistake new short-form creators make is being too broad. "Content creation tips" doesn't perform
        nearly as well as "3 mistakes destroying your Reels reach right now."
      </p>
      <p>
        Narrow, specific, concrete content reaches the right people more reliably. It's counterintuitive — smaller
        scope, bigger reach. The algorithm knows who wants your content by what you signal in the title, hook, and body.
      </p>

      <h2>How to Batch Create with This Framework</h2>
      <p>
        Once you understand the framework, the most efficient approach is batching:
      </p>
      <ul>
        <li><strong>Monday</strong>: Brainstorm 10 hooks based on topics your audience struggles with</li>
        <li><strong>Tuesday</strong>: Record all 10 videos in a single session (rough is fine)</li>
        <li><strong>Wednesday</strong>: Review, edit, and caption</li>
        <li><strong>Thursday–Sunday</strong>: Post 1–2 per day and monitor performance</li>
      </ul>
      <p>
        The data you get from posting consistently tells you which hooks, topics, and formats resonate.
        Over time, you're not guessing anymore — you're iterating on what you know works.
      </p>

      <h2>What to Do When a Video Performs Well</h2>
      <p>
        When a video hits — don't celebrate and move on. <strong>Deconstruct it.</strong>
      </p>
      <p>
        Ask: What was the hook? What was the format? What made it specific? Then create three more videos
        using the same structure on different subtopics. This is called "franchise content" and it's how
        top creators maintain momentum without constantly reinventing their approach.
      </p>

      <h2>The Consistency Advantage</h2>
      <p>
        The creator posting 3 videos a week consistently for 6 months will almost always outperform the
        creator posting 1 "perfect" video per month. Volume creates data. Data creates learning. Learning
        creates growth.
      </p>
      <p>
        Short-form is a long game, played fast.
      </p>
    </div>
  ),
};

export default function ShortFormVideoFramework() {
  return <BlogPostLayout data={data} />;
}
