/* AI Tools Directory — Data & Logic */
const toolsData = [
  // ===== CHAT =====
  {id:'chatgpt',name:'ChatGPT',cat:'Chat',icon:'🧠',color:'#10a37f',url:'https://chatgpt.com',tag:'Most Popular',price:'Free / $20/mo',
    desc:'OpenAI flagship chatbot. GPT-4o model with web search, image generation, code execution, and a massive plugin ecosystem.',
    review:`
<h2>What ChatGPT Actually Does</h2>
<p>ChatGPT is the AI assistant that started it all. It can write, code, analyze data, generate images, search the web, and hold natural conversations. The free tier gives you GPT-4o mini (fast but less capable), while ChatGPT Plus ($20/mo) unlocks full GPT-4o with longer context, better reasoning, and DALL·E image generation.</p>

<h2>Who It's For</h2>
<p>Everyone. ChatGPT is the Swiss Army knife of AI — students use it for research, developers for debugging, writers for brainstorming, and business owners for drafting emails. If you only use one AI tool, this is probably it.</p>

<h2>What's Good</h2>
<ul><li>Most versatile AI on the market — one tool does almost everything</li><li>Web search integration means it can access current information</li><li>Code Interpreter lets you upload files and run Python in-browser</li><li>Custom GPTs let you create specialized assistants for specific tasks</li><li>Memory feature remembers context across conversations</li></ul>

<h2>What's Not Great</h2>
<ul><li>Can be overly verbose and "corporate" in tone unless you prompt it carefully</li><li>Occasionally hallucinates facts with high confidence</li><li>The mobile app experience is noticeably worse than desktop</li><li>DALL·E image generation is hit-or-miss compared to Midjourney</li></ul>

<h2>Pricing</h2>
<div class="table-wrap"><table><tr><th>Plan</th><th>Price</th><th>Key Features</th></tr>
<tr><td>Free</td><td>$0</td><td>GPT-4o mini, limited messages</td></tr>
<tr><td>Plus</td><td>$20/mo</td><td>GPT-4o, DALL·E, web search, plugins</td></tr>
<tr><td>Team</td><td>$25/user/mo</td><td>Higher limits, admin controls</td></tr>
</table></div>

<blockquote>💬 <strong>Bottom line:</strong> ChatGPT is the default for a reason. It's not always the best at any single thing, but it does more things competently than any other AI tool. Start here, then branch out to specialized tools when you hit its limits.</blockquote>
    `
  },
  {id:'claude',name:'Claude',cat:'Chat',icon:'🎯',color:'#d97706',url:'https://claude.ai',tag:'Best Writing',price:'Free / $20/mo',
    desc:'Anthropic AI assistant. Best for long-form writing, nuanced reasoning, coding, and document analysis with 200K context window.',
    review:`
<h2>What Claude Actually Does</h2>
<p>Claude is Anthropic's AI assistant. It excels at long-form writing, detailed code generation, and analyzing large documents — you can feed it entire books (200K token context) and ask questions about specific passages. It's less "chatty" than ChatGPT and more focused on getting things done.</p>

<h2>Who It's For</h2>
<p>Writers, developers, researchers, and anyone who needs deep analysis rather than quick answers. If you write long articles, review contracts, or debug complex codebases, Claude is probably better than ChatGPT for your use case.</p>

<h2>What's Good</h2>
<ul><li>Writing quality is noticeably better than ChatGPT — more natural, less formulaic</li><li>200K context window means it can process entire novels or codebases</li><li>Artifacts feature generates interactive HTML/CSS/React components inline</li><li>Claude Code (CLI tool) is the best AI coding agent on the market right now</li><li>Honest about uncertainty — less likely to fake confidence than competitors</li></ul>

<h2>What's Not Great</h2>
<ul><li>No built-in image generation (though it can write prompts for other tools)</li><li>Rate limits on the free tier are aggressive — you'll hit them quickly</li><li>No web search capability (as of mid-2026; rumored to be coming)</li><li>Smaller plugin/integration ecosystem than ChatGPT</li></ul>

<h2>Pricing</h2>
<div class="table-wrap"><table><tr><th>Plan</th><th>Price</th><th>Key Features</th></tr>
<tr><td>Free</td><td>$0</td><td>Claude Sonnet, limited messages</td></tr>
<tr><td>Pro</td><td>$20/mo</td><td>Claude Opus, 200K context, artifacts</td></tr>
<tr><td>Team</td><td>$25/user/mo</td><td>Higher limits, shared workspaces</td></tr>
</table></div>

<blockquote>💬 <strong>Bottom line:</strong> Claude is the writer's AI. If you produce long-form content, code, or need deep analysis, it beats ChatGPT. If you want image generation or web search, stick with ChatGPT.</blockquote>
    `
  },
  {id:'gemini',name:'Gemini',cat:'Chat',icon:'💎',color:'#4285f4',url:'https://gemini.google.com',tag:'Google Integrated',price:'Free / $20/mo',
    desc:'Google AI chatbot deeply integrated with Gmail, Docs, YouTube, Maps, and the entire Google ecosystem.',
    review:`
<h2>What Gemini Actually Does</h2>
<p>Gemini is Google's answer to ChatGPT, and its killer feature is integration — it can search your Gmail, summarize Google Docs, find YouTube videos, and pull data from Google Maps, all without leaving the chat. If you live in Google's ecosystem, no other AI comes close.</p>

<h2>What's Good</h2>
<ul><li>Deep Google integration is genuinely useful — ask it to find an old email or summarize a meeting</li><li>Gemini 2.5 Pro model is competitive with GPT-4o on reasoning benchmarks</li><li>Generous free tier with 2TB of Google Drive storage on the paid plan</li><li>Fast responses, especially on Google's TPU infrastructure</li></ul>

<h2>What's Not Great</h2>
<ul><li>Writing quality lags behind Claude and even ChatGPT in many tests</li><li>Google ecosystem lock-in means it's less useful if you use non-Google tools</li><li>Occasional "Google-isms" — overly safe, sometimes refuses harmless queries</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> If you use Gmail, Docs, and Drive daily, Gemini is a no-brainer. If you don't, ChatGPT or Claude will serve you better.</blockquote>
    `
  },
  {id:'deepseek',name:'DeepSeek',cat:'Chat',icon:'🔍',color:'#4f46e5',url:'https://chat.deepseek.com',tag:'Best Value',price:'Free',
    desc:'Chinese AI powerhouse. Open-source models rival GPT-4 at a fraction of the cost. DeepSeek R1 leads on reasoning.',
    review:`
<h2>What DeepSeek Actually Does</h2>
<p>DeepSeek is the breakout Chinese AI company that shocked the industry in early 2025. Their models match or beat GPT-4 on many benchmarks while being completely free to use. DeepSeek R1, their reasoning model, shows its work step-by-step — you can see exactly how it arrived at an answer.</p>

<h2>What's Good</h2>
<ul><li>Completely free — no paid tier exists, no message limits to hit</li><li>R1 reasoning mode is transparent about its thinking process</li><li>Strong coding and math performance, often beating Claude on benchmarks</li><li>Open-source models mean you can run them locally or self-host</li></ul>

<h2>What's Not Great</h2>
<ul><li>Chinese company — some organizations have data residency concerns</li><li>Occasional censorship on politically sensitive topics (Chinese regulations)</li><li>Smaller context window than Claude (128K vs 200K)</li><li>No image generation or web search capabilities</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> DeepSeek is the best free AI chatbot period. If you're price-sensitive or want a transparent reasoning model, use it. If data sovereignty matters to your organization, stick with Western alternatives.</blockquote>
    `
  },
  {id:'perplexity',name:'Perplexity',cat:'Chat',icon:'🔎',color:'#1e1e1e',url:'https://perplexity.ai',tag:'Best Research',price:'Free / $20/mo',
    desc:'AI search engine with inline citations. Real-time web research with linked sources — a genuine Google alternative.',
    review:`
<h2>What Perplexity Actually Does</h2>
<p>Perplexity is what happens when you combine an AI chatbot with a search engine. Every answer comes with numbered citations linking to the original sources. It's not just telling you things — it's showing you where it got the information so you can verify it yourself.</p>

<h2>Who It's For</h2>
<p>Researchers, journalists, students, and anyone who needs factually reliable answers with receipts. If you've ever used ChatGPT and thought "is this actually true?", Perplexity solves that problem.</p>

<h2>What's Good</h2>
<ul><li>Every claim is backed by a linked source — no blind trust required</li><li>Pro Search mode runs multiple searches and synthesizes findings</li><li>Can search academic papers, news, and social media</li><li>Collections feature lets you organize research by topic</li></ul>

<h2>What's Not Great</h2>
<ul><li>Not a creative writing tool — it's optimized for factual accuracy, not prose</li><li>Can feel dry compared to ChatGPT's conversational style</li><li>Limited to information that exists online — can't generate truly original ideas</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> For research and fact-checking, nothing beats Perplexity. For creative writing, use Claude. For everything in between, use ChatGPT. Many power users keep all three open.</blockquote>
    `
  },
  {id:'midjourney',name:'Midjourney',cat:'Image',icon:'🖼️',color:'#1a1a2e',url:'https://midjourney.com',tag:'Best Quality',price:'$10/mo+',
    desc:'Industry-leading AI image generator. Unmatched aesthetic quality for concept art, illustrations, and photorealistic imagery.',
    review:`
<h2>What Midjourney Actually Does</h2>
<p>Midjourney generates images from text descriptions. If you can describe it, Midjourney can visualize it — from photorealistic portraits to fantasy concept art to architectural renders. It's the gold standard for AI image quality, and has been since the beginning.</p>

<h2>What's Good</h2>
<ul><li>Image quality is unmatched — better lighting, composition, and texture than any competitor</li><li>V7 model produces near-photographic realism with the right prompts</li><li>Style references let you maintain consistent art direction across images</li><li>Active Discord community for sharing prompts and techniques</li></ul>

<h2>What's Not Great</h2>
<ul><li>Discord-only interface is clunky compared to dedicated web apps</li><li>No free tier — you get a handful of trial images then must pay</li><li>Steep learning curve for prompt engineering to get good results</li><li>Can't edit existing images as easily as DALL·E or Photoshop AI</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> Midjourney makes the prettiest AI images. If visual quality is your top priority, pay the $10 and learn to prompt. If you need quick, integrated image gen inside another tool, DALL·E is more convenient.</blockquote>
    `
  },
  {id:'dalle',name:'DALL·E 3',cat:'Image',icon:'🎨',color:'#10a37f',url:'https://openai.com/dall-e-3',tag:'Most Integrated',price:'Included in ChatGPT Plus',
    desc:'OpenAI image generator built into ChatGPT. Natural language prompting — describe what you want in plain English, no prompt engineering needed.',
    review:`
<h2>What DALL·E Actually Does</h2>
<p>DALL·E 3 is OpenAI's image generator, built directly into ChatGPT. The key difference from Midjourney: you don't need to learn prompt engineering. Just describe what you want in plain English and DALL·E figures it out. It's also better at text rendering than most competitors.</p>

<h2>What's Good</h2>
<ul><li>Natural language understanding — no need for special prompt syntax</li><li>Handles text in images better than Midjourney or Stable Diffusion</li><li>Integrated into ChatGPT so you can iterate with conversation</li><li>Strong at following complex, multi-element prompts accurately</li></ul>

<h2>What's Not Great</h2>
<ul><li>Aesthetic quality is good but not Midjourney-level beautiful</li><li>Strict content filter — sometimes refuses harmless requests</li><li>Can only generate square images (no aspect ratio control)</li><li>Requires ChatGPT Plus subscription — no standalone purchase</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> DALL·E is the easiest AI image generator to use. If you want to say "make me a poster of a cat astronaut with text saying Mission to Mars" and get exactly that, DALL·E delivers. For art-quality images, use Midjourney.</blockquote>
    `
  },
  {id:'stable-diffusion',name:'Stable Diffusion',cat:'Image',icon:'🌈',color:'#9333ea',url:'https://stability.ai',tag:'Open Source',price:'Free (self-host)',
    desc:'Open-source image model. Run locally for unlimited free generations. Massive community with thousands of custom models and LoRAs.',
    review:`
<h2>What Stable Diffusion Actually Does</h2>
<p>Stable Diffusion is the open-source alternative to Midjourney and DALL·E. You can run it on your own computer (GPU required), which means unlimited generations with no content filters and no monthly fee. The community has built thousands of custom models fine-tuned for specific styles.</p>

<h2>What's Good</h2>
<ul><li>Completely free if you have the hardware to run it locally</li><li>No content restrictions — generate anything you want</li><li>Huge community ecosystem: ControlNet, LoRAs, custom models</li><li>Full control over every parameter (steps, CFG scale, seed, etc.)</li></ul>

<h2>What's Not Great</h2>
<ul><li>Requires technical setup — not as simple as typing into a chat box</li><li>Needs a decent GPU (8GB+ VRAM recommended)</li><li>Out-of-box image quality trails Midjourney (though fine-tuned models close the gap)</li><li>Can be overwhelming — too many options for beginners</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> Stable Diffusion is for tinkerers and power users. If you want unlimited free generations and total creative control, it's unbeatable. If you just want pretty pictures with zero effort, use Midjourney.</blockquote>
    `
  },
  {id:'leonardo',name:'Leonardo AI',cat:'Image',icon:'🦁',color:'#e11d48',url:'https://leonardo.ai',tag:'Game Design',price:'Free / $12/mo',
    desc:'Game-asset focused AI image generator. Character design, textures, concept art, and 3D-ready assets with consistent style.',
    review:`
<h2>What Leonardo Actually Does</h2>
<p>Leonardo AI is built specifically for game developers and digital artists. It generates character designs, environment concept art, textures, and game assets. The key differentiator: it maintains visual consistency across multiple generations, which is critical when you're designing a game where all assets need to look like they belong in the same world.</p>

<h2>What's Good</h2>
<ul><li>Purpose-built for game development — understands game asset workflows</li><li>Excellent style consistency across multiple generations</li><li>Built-in upscaler and background removal</li><li>Training on your own dataset to match your game's art style</li></ul>

<h2>What's Not Great</h2>
<ul><li>Niche focus — less versatile than Midjourney for general image generation</li><li>Free tier limits are restrictive for serious work</li><li>Smaller community than Midjourney or Stable Diffusion</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> If you make games or need consistent character designs, use Leonardo. For general AI art, Midjourney remains the better choice.</blockquote>
    `
  },
  {id:'sora',name:'Sora',cat:'Video',icon:'🎬',color:'#10a37f',url:'https://sora.com',tag:'Text-to-Video',price:'Included in ChatGPT Plus',
    desc:'OpenAI text-to-video model. Generate realistic short video clips from text descriptions with impressive physical accuracy.',
    review:`
<h2>What Sora Actually Does</h2>
<p>Sora turns text descriptions into short video clips — a few seconds to a minute. It's not just generating moving images; it understands physics, lighting, and object permanence in a way that earlier video models couldn't. A person walking behind a tree comes out the other side. Water splashes realistically.</p>

<h2>What's Good</h2>
<ul><li>Physics understanding is a generation ahead of competitors</li><li>Natural-looking camera movements and lighting</li><li>Integrated into ChatGPT — describe what you want in conversation</li></ul>

<h2>What's Not Great</h2>
<ul><li>Short clips only (max 60 seconds as of mid-2026)</li><li>Still has the "AI weirdness" — hands, faces, and fast motion can glitch</li><li>Generation can take several minutes per clip</li><li>No editing tools — you get what you generate, no fine-tuning</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> Sora is mind-blowing demo tech and useful for quick social media clips. For professional video work, Runway has more editing tools. Both are improving fast — this space changes monthly.</blockquote>
    `
  },
  {id:'runway',name:'Runway',cat:'Video',icon:'🎥',color:'#000',url:'https://runwayml.com',tag:'Pro Video AI',price:'$15/mo+',
    desc:'Professional AI video editing platform. Gen-3 model for text-to-video, motion tracking, background removal, and VFX compositing.',
    review:`
<h2>What Runway Actually Does</h2>
<p>Runway is a full video editing suite powered by AI. It does text-to-video generation, but that's just the starting point — it also handles background removal, motion tracking, style transfer, frame interpolation, and VFX compositing. Think of it as Premiere Pro with an AI brain.</p>

<h2>What's Good</h2>
<ul><li>Full video editing pipeline, not just generation</li><li>Excellent green screen/background removal without a green screen</li><li>Motion tracking works surprisingly well for quick VFX shots</li><li>Gen-3 model produces high-quality text-to-video output</li></ul>

<h2>What's Not Great</h2>
<ul><li>Monthly subscription adds up — not cheap for hobbyists</li><li>Learning curve if you're not already familiar with video editing</li><li>Text-to-video quality trails Sora on pure realism (but Runway offers way more control)</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> Runway is the professional choice for AI-powered video work. If you edit video seriously, the toolkit justifies the price. If you just want to experiment with AI video, start with Sora (free with ChatGPT Plus).</blockquote>
    `
  },
  {id:'github-copilot',name:'GitHub Copilot',cat:'Code',icon:'🐙',color:'#24292e',url:'https://github.com/features/copilot',tag:'#1 Coding AI',price:'$10/mo',
    desc:'The most widely used AI coding assistant. Autocomplete, chat, and code review inside VS Code, JetBrains, and GitHub.',
    review:`
<h2>What Copilot Actually Does</h2>
<p>GitHub Copilot is the AI pair programmer used by millions of developers. It auto-completes your code as you type, answers questions about your codebase in chat, and can generate entire functions from comments. It works inside VS Code, JetBrains IDEs, and directly on GitHub.com.</p>

<h2>What's Good</h2>
<ul><li>Tab-completion is so good it feels like the IDE is reading your mind</li><li>Deep GitHub integration — understands your repo context</li><li>Massive user base means the model has been trained on more real-world coding patterns than anyone else</li><li>Agent mode can now handle multi-file refactors</li></ul>

<h2>What's Not Great</h2>
<ul><li>Less capable at long-form reasoning than Claude or Cursor for complex architecture tasks</li><li>Sometimes suggests outdated patterns from older training data</li><li>Not great at explaining why it wrote something a certain way</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> Copilot is the best inline coding assistant. For tab-completion and boilerplate generation, nothing beats it. For complex debugging or architecture work, pair it with Claude or Cursor.</blockquote>
    `
  },
  {id:'cursor',name:'Cursor',cat:'Code',icon:'🖱️',color:'#6366f1',url:'https://cursor.sh',tag:'AI-First IDE',price:'Free / $20/mo',
    desc:'AI-native code editor built on VS Code. Full codebase awareness, multi-file editing, and the best AI-assisted debugging on the market.',
    review:`
<h2>What Cursor Actually Does</h2>
<p>Cursor is VS Code rebuilt from the ground up around AI. Unlike Copilot (which is a plugin added to your editor), Cursor's AI is woven into every interaction. It can see your entire codebase, make changes across multiple files at once, and debug by asking you clarifying questions rather than guessing.</p>

<h2>What's Good</h2>
<ul><li>Full codebase context — it understands how your files relate to each other</li><li>Multi-file editing is a game changer — one prompt can update 5 files simultaneously</li><li>Best debugging experience of any AI coding tool — it asks clarifying questions</li><li>Composer mode lets you describe a feature in plain English and watch it build</li></ul>

<h2>What's Not Great</h2>
<ul><li>You have to switch editors (though it's VS Code-based, so the transition is smooth)</li><li>Free tier limits force you to pay for serious use</li><li>Occasionally over-engineers simple solutions — sometimes you just want a one-liner</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> Cursor is the best AI coding IDE. If you spend most of your day in a code editor, the $20/mo pays for itself in the first hour. Pair it with Claude Code for terminal-level agent work.</blockquote>
    `
  },
  {id:'claude-code',name:'Claude Code',cat:'Code',icon:'⚡',color:'#d97706',url:'https://claude.ai/code',tag:'Best Agent',price:'Pay-as-you-go (API)',
    desc:'Anthropic CLI coding agent. Build entire apps from the terminal. Describe what you want and watch the AI do it across your whole codebase.',
    review:`
<h2>What Claude Code Actually Does</h2>
<p>Claude Code is not an auto-complete tool or an IDE plugin — it's an AI developer that works directly in your terminal. You describe what you want: "Add user authentication to this Next.js app" or "Rewrite this Python script in Rust", and Claude Code plans the work, writes the code across all affected files, runs tests, and iterates until it works.</p>

<h2>What's Good</h2>
<ul><li>Handles entire features autonomously — not just code suggestions, complete implementations</li><li>Understands your full codebase, git history, and project structure</li><li>Runs tests, linters, and type-checkers on its own code and fixes issues</li><li>Can work for hours on complex tasks without losing context</li></ul>

<h2>What's Not Great</h2>
<ul><li>API costs can add up for heavy use (though still cheaper than a junior dev)</li><li>Only works through the terminal — no GUI</li><li>Can be slow for simple tasks where an inline autocomplete would be faster</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> Claude Code is the most capable AI coding agent available. For feature development and complex refactors, nothing comes close. Use Copilot for inline completion, Cursor for IDE work, and Claude Code when you want an AI to actually build something.</blockquote>
    `
  },
  {id:'bolt',name:'Bolt.new',cat:'Code',icon:'⚡',color:'#6366f1',url:'https://bolt.new',tag:'Full-Stack Builder',price:'Free / $20/mo',
    desc:'AI full-stack app builder. Describe your app idea and get a running web app with database, auth, and hosting — all in your browser.',
    review:`
<h2>What Bolt Actually Does</h2>
<p>Bolt.new turns prompts into fully-functioning web applications. You type "build me a todo app with user accounts and a dark mode toggle" and 30 seconds later you have a running app — with a database, authentication, and hosting — all in your browser. It uses StackBlitz's WebContainer technology to run everything client-side.</p>

<h2>What's Good</h2>
<ul><li>Zero setup — no Node.js, no npm, no environment variables</li><li>Full-stack apps with real databases and auth, not just static HTML</li><li>Instant preview — see your app running as it's being built</li><li>Great for prototyping and MVPs that need to be real apps fast</li></ul>

<h2>What's Not Great</h2>
<ul><li>Limited control over the underlying infrastructure</li><li>Generated apps can be hard to customize beyond what the AI built</li><li>Not suitable for complex production apps with specific architecture requirements</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> Bolt is the fastest way to go from idea to working app. For MVPs and prototypes, it's magic. For production apps with specific architectural needs, use Cursor or Claude Code.</blockquote>
    `
  },
  {id:'jasper',name:'Jasper',cat:'Writing',icon:'✍️',color:'#e11d48',url:'https://jasper.ai',tag:'Marketing',price:'$49/mo+',
    desc:'AI marketing copywriter. Blog posts, ads, emails, social media with brand voice training and campaign management.',
    review:`
<h2>What Jasper Actually Does</h2>
<p>Jasper is an AI writing tool specifically for marketing teams. Unlike general-purpose chatbots, it's trained on marketing copy — blog posts, ad headlines, email sequences, landing pages, and social posts. You can train it on your brand voice so everything it writes sounds like you, not like generic AI.</p>

<h2>What's Good</h2>
<ul><li>Brand voice training means consistent tone across all content</li><li>Campaign mode generates entire multi-channel campaigns from one brief</li><li>Templates for every marketing format — from Google Ads to long-form blogs</li><li>Collaboration features for marketing teams</li></ul>

<h2>What's Not Great</h2>
<ul><li>Expensive compared to using ChatGPT or Claude directly</li><li>The brand voice feature requires a significant amount of training content to work well</li><li>Overkill for individuals — this is a team tool</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> If you're a solo creator, use Claude for writing — it's cheaper and often better. If you run a marketing team that needs consistent brand voice across multiple channels, Jasper earns its price tag.</blockquote>
    `
  },
  {id:'grammarly',name:'Grammarly',cat:'Writing',icon:'📝',color:'#11b981',url:'https://grammarly.com',tag:'Editing',price:'Free / $12/mo',
    desc:'AI writing assistant checking grammar, tone, clarity, and plagiarism. Works everywhere — browser, desktop, and mobile.',
    review:`
<h2>What Grammarly Actually Does</h2>
<p>Grammarly is the grammar checker that evolved into a full AI writing assistant. It catches typos, suggests clearer phrasing, flags passive voice, checks for plagiarism, and even analyzes your tone (confident? friendly? formal?). It works across your browser, desktop apps, and mobile keyboard.</p>

<h2>What's Good</h2>
<ul><li>Works everywhere — browser extension covers email, docs, social media, everything</li><li>Tone detection is genuinely useful for business communication</li><li>Plagiarism checker compares against billions of web pages</li><li>Generative AI features now let you rewrite entire paragraphs with one click</li></ul>

<h2>What's Not Great</h2>
<ul><li>Can make your writing sound generic if you accept every suggestion</li><li>Sometimes flags correct grammar as wrong in complex sentences</li><li>AI rewriting can strip your voice — use sparingly</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> Grammarly is the essential writing tool. Everyone should use the free tier. The paid tier is worth it if you write professionally. Just don't let it flatten your voice.</blockquote>
    `
  },
  {id:'elevenlabs',name:'ElevenLabs',cat:'Audio',icon:'🎧',color:'#818cf8',url:'https://elevenlabs.io',tag:'Best TTS',price:'Free / $5/mo+',
    desc:'Best AI voice synthesis. Text-to-speech, voice cloning, and dubbing in 29 languages with shockingly natural intonation.',
    review:`
<h2>What ElevenLabs Actually Does</h2>
<p>ElevenLabs turns text into speech that sounds indistinguishable from a real human. The default voices are good; the voice clones are incredible — upload a 60-second sample of anyone's voice and get a digital copy that captures their exact intonation, pacing, and emotional range.</p>

<h2>What's Good</h2>
<ul><li>Voice quality is the best in the industry — most listeners can't tell it's AI</li><li>Voice cloning from a 60-second sample is scary good</li><li>Dubbing preserves the original speaker's voice characteristics across languages</li><li>API is developer-friendly with generous free tier</li></ul>

<h2>What's Not Great</h2>
<ul><li>Voice cloning raises ethical concerns — use responsibly</li><li>Expensive at scale for long-form content</li><li>Some languages have noticeably worse quality than English</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> ElevenLabs is the gold standard for AI voice. For podcasts, audiobooks, voiceovers, and dubbing, nothing else comes close. The free tier is genuinely usable for getting started.</blockquote>
    `
  },
  {id:'suno',name:'Suno',cat:'Audio',icon:'🎵',color:'#9333ea',url:'https://suno.ai',tag:'AI Music',price:'Free / $10/mo',
    desc:'AI music generator. Create full songs from text prompts — lyrics, melody, instrumentation, and production, all in one go.',
    review:`
<h2>What Suno Actually Does</h2>
<p>Suno generates complete, radio-ready songs from text descriptions. You describe a genre and topic ("upbeat pop song about coding at 3am"), optionally provide lyrics, and Suno produces a full track with vocals, instruments, and production. The results range from surprisingly good to genuinely impressive.</p>

<h2>What's Good</h2>
<ul><li>Full song generation — not just instrumentals, but vocals and lyrics too</li><li>Shockingly good at capturing genre conventions (pop, rock, EDM, country, etc.)</li><li>Custom lyrics option lets you provide your own words</li><li>Free tier gives you enough credits to experiment</li></ul>

<h2>What's Not Great</h2>
<ul><li>Vocals can sound synthetic on close listening</li><li>Lyric generation can be generic — custom lyrics are recommended</li><li>Copyright situation around AI-generated music is legally murky</li><li>Can't fine-tune specific elements of a generated song</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> Suno is the most fun AI tool on this list. For content creators who need background music, indie game devs, or just messing around, it's incredible. For professional music production, it's a sketchpad, not a replacement.</blockquote>
    `
  },
  {id:'notion-ai',name:'Notion AI',cat:'Productivity',icon:'📋',color:'#000',url:'https://notion.so/product/ai',tag:'Workspace',price:'$10/mo add-on',
    desc:'AI inside Notion workspace. Write, summarize, translate, brainstorm, and auto-fill databases without leaving your notes.',
    review:`
<h2>What Notion AI Actually Does</h2>
<p>Notion AI brings AI into your Notion workspace. It can write in any Notion page, summarize long documents, translate content, brainstorm ideas, and auto-fill database properties. The magic is that it already has context — it sees your existing pages, databases, and wikis, so its suggestions are relevant to your actual work.</p>

<h2>What's Good</h2>
<ul><li>Deep integration with your existing Notion workspace and data</li><li>Auto-fill databases is a massive time-saver — describe what you want and it populates rows</li><li>Summarize long meeting notes or research docs with one click</li><li>Brainstorming mode generates ideas within your existing document structure</li></ul>

<h2>What's Not Great</h2>
<ul><li>$10 add-on on top of Notion's existing pricing — it adds up</li><li>Only works inside Notion — not a standalone AI tool</li><li>Writing quality is decent but not as good as Claude or ChatGPT</li></ul>

<blockquote>💬 <strong>Bottom line:</strong> If you live in Notion, the AI add-on is worth it for auto-fill databases and summaries alone. If you use Notion casually, skip it and just paste from ChatGPT.</blockquote>
    `
  },
  // ===== REMAINING TOOLS — shorter reviews =====
  {id:'grok',name:'Grok',cat:'Chat',icon:'⚡',color:'#1da1f2',url:'https://grok.com',tag:'X/Twitter Data',price:'Free (X Premium)',
    desc:'Elon Musk xAI chatbot. Real-time X/Twitter data access. Uncensored responses with a distinct personality.',
    review:'<p>Grok stands out for its real-time X/Twitter data and unfiltered personality. If you need to know what is happening on X right now — trends, reactions, breaking news — no other AI has this access. The trade-off: it is built by xAI, so expect Elon-adjacent editorial choices. Best used as a complement to other AIs, not a primary tool.</p>'
  },
  {id:'poe',name:'Poe',cat:'Chat',icon:'📬',color:'#5436da',url:'https://poe.com',tag:'Multi-Model',price:'Free / $20/mo',
    desc:'Quora multi-model platform. Access ChatGPT, Claude, Gemini, Llama, and more from a single interface with unified billing.',
    review:'<p>Poe solves a real problem: you want to use multiple AI models but do not want to pay for five separate subscriptions. One Poe subscription gives you access to everything. The interface is clean, the model switching is seamless, and you can compare answers from different models side by side. The downside: you are paying a middleman markup, and advanced features (like Claude Artifacts) do not always work through Poe.</p>'
  },
  {id:'character-ai',name:'Character.AI',cat:'Chat',icon:'🎭',color:'#ff6b6b',url:'https://character.ai',tag:'Roleplay AI',price:'Free / $10/mo',
    desc:'Chat with AI characters — real or fictional. Roleplay, language practice, and creative storytelling with deeply immersive personas.',
    review:'<p>Character.AI is the best AI for roleplaying and character interaction. Unlike ChatGPT which always sounds like a helpful assistant, Character.AI characters have distinct personalities, memories, and emotional responses. It excels at creative writing practice, language learning through conversation, and pure entertainment. Not a productivity tool — this is AI for fun.</p>'
  },
  {id:'canva-ai',name:'Canva AI',cat:'Image',icon:'✨',color:'#00c4cc',url:'https://canva.com',tag:'Design',price:'Free / $13/mo',
    desc:'AI-powered design platform. Magic Studio generates presentations, social posts, logos, and more from text prompts.',
    review:'<p>Canva AI brings generative AI into the most popular design tool on the planet. Magic Studio can generate entire presentations, social media graphics, and logos from a text description. It is not the best at any one AI feature, but the fact that everything lives inside Canva — where you are already designing — makes it incredibly convenient for non-designers who need good-looking output fast.</p>'
  },
  {id:'krea',name:'Krea AI',cat:'Image',icon:'🔮',color:'#000',url:'https://krea.ai',tag:'Real-Time Gen',price:'Free / $8/mo',
    desc:'Real-time AI image generation. Draw and see AI render simultaneously. Unique workflow for artists exploring ideas quickly.',
    review:'<p>Krea has the most fun AI image workflow: you sketch on one side of the screen and AI renders it in real time on the other. It feels like having an artist who can read your mind. Fantastic for rapid visual exploration and brainstorming. The output quality is good but not Midjourney-level — Krea is about speed and iteration, not final renders.</p>'
  },
  {id:'removebg',name:'Remove.bg',cat:'Image',icon:'✂️',color:'#4caf50',url:'https://remove.bg',tag:'Background Removal',price:'Free (low-res) / Pay per image',
    desc:'One-click AI background removal. Perfect cutouts every time. Used by millions daily for product photos and portraits.',
    review:'<p>Remove.bg does one thing and does it perfectly: remove backgrounds from images. Upload any photo with a person, product, or object, and it returns a clean cutout in seconds. The free tier gives you low-resolution previews; paid lets you download full-res. There is nothing particularly innovative here — it is just the best at what it does, and sometimes that is all you need.</p>'
  },
  {id:'adobe-firefly',name:'Adobe Firefly',cat:'Image',icon:'🔥',color:'#ff0000',url:'https://firefly.adobe.com',tag:'Pro Creative',price:'Included in Creative Cloud',
    desc:'Adobe AI suite. Generative Fill, text effects, and recolor tools integrated directly into Photoshop, Illustrator, and Express.',
    review:'<p>Adobe Firefly is the AI built into the tools creative professionals already use. Generative Fill in Photoshop lets you select an area and describe what should be there — and it generates a photorealistic result that matches the surrounding lighting. It is not a standalone AI image generator; it is an AI-powered creative assistant that lives inside the Adobe ecosystem. If you already pay for Creative Cloud, you already have this.</p>'
  },
  {id:'pika',name:'Pika',cat:'Video',icon:'🍿',color:'#ec4899',url:'https://pika.art',tag:'Creative Video',price:'Free / $10/mo',
    desc:'AI video generator focused on creative clips. Animate still images, lip-sync AI avatars, and quirky short-form content.',
    review:'<p>Pika is the fun, creative cousin to Sora and Runway. It leans into short, viral-style content — animate a photo, make an AI avatar talk, create a looping GIF-like clip. The output is less realistic than Sora but more stylized and creative. Great for social media content creators who want eye-catching AI effects without the learning curve of professional video tools.</p>'
  },
  {id:'heygen',name:'HeyGen',cat:'Video',icon:'🎙️',color:'#6366f1',url:'https://heygen.com',tag:'AI Avatars',price:'$29/mo+',
    desc:'AI avatar video creator. Translate videos while preserving voice, create digital human presenters, and localize content to 40+ languages.',
    review:'<p>HeyGen makes videos where AI avatars speak your script — useful for training videos, product demos, and localized marketing. The standout feature is video translation: upload a video of yourself speaking English, and HeyGen outputs the same video with you speaking fluent Japanese, matching your lip movements. It is not cheap, but for businesses that need to create video content at scale without filming, it pays for itself.</p>'
  },
  {id:'synthesia',name:'Synthesia',cat:'Video',icon:'🤖',color:'#2563eb',url:'https://synthesia.io',tag:'Enterprise Video',price:'$22/mo+',
    desc:'Enterprise AI video platform. 140+ AI avatars, 120+ languages. Trusted by 50,000+ companies for training and marketing videos.',
    review:'<p>Synthesia is the enterprise version of AI avatar video. More avatars, more languages, more compliance features than HeyGen. It is used by Fortune 500 companies for employee training, product marketing, and internal communications. For individual creators, it is overkill and overpriced. For companies that need to produce hundreds of localized videos, it is the standard.</p>'
  },
  {id:'capcut',name:'CapCut',cat:'Video',icon:'✂️',color:'#000',url:'https://capcut.com',tag:'Free Editor',price:'Free / $8/mo',
    desc:'ByteDance free video editor with AI captions, effects, background removal, and templates. The go-to for TikTok and short-form creators.',
    review:'<p>CapCut is the free video editor that powers most TikTok content. Its AI features — auto captions, background removal, smart effects — are genuinely good for a free tool. The template library means you can create trendy videos in minutes. If you make short-form video content and do not want to learn Premiere Pro, CapCut is the answer. The paid tier is cheap and worth it for removing the watermark.</p>'
  },
  {id:'descript',name:'Descript',cat:'Video',icon:'🎞️',color:'#6366f1',url:'https://descript.com',tag:'Edit by Text',price:'$24/mo',
    desc:'AI video/podcast editor. Edit video by editing the transcript. Remove filler words with one click. Magic for podcasters.',
    review:'<p>Descript treats video as text. You edit the transcript and the video edits itself — cut a sentence in the text and that clip is gone from the timeline. For podcasters and talking-head YouTubers, this is revolutionary. The filler word removal feature alone saves hours of manual editing. Not for cinematic video work — this is for content where the spoken word is primary and the visuals support it.</p>'
  },
  {id:'windsurf',name:'Windsurf',cat:'Code',icon:'🌊',color:'#06b6d4',url:'https://codeium.com/windsurf',tag:'Rising IDE',price:'Free / $15/mo',
    desc:'AI-native IDE by Codeium. Context-aware coding with Cascade agent. Lightning-fast autocomplete with full codebase understanding.',
    review:'<p>Windsurf is Cursor main competitor — another AI-native IDE built on VS Code. The Cascade agent handles multi-file edits with codebase awareness, and the autocomplete is arguably faster than Copilot. It is a strong alternative if you want AI-native IDE features but prefer Codeium ecosystem over the Cursor ecosystem. Both are excellent; try both and pick the one that fits your workflow.</p>'
  },
  {id:'replit',name:'Replit',cat:'Code',icon:'🔄',color:'#f97316',url:'https://replit.com',tag:'Browser IDE',price:'Free / $25/mo',
    desc:'Browser-based IDE with AI agent. Build, deploy, and host full-stack apps entirely in the cloud with zero local setup.',
    review:'<p>Replit is an entire development environment in your browser. No installing Node.js, no configuring databases, no SSH keys. The AI agent can build apps from prompts and deploy them instantly. It is the best way to learn coding because it removes every barrier between you and a running application. For professional work, local tools give more control, but for learning and quick projects, Replit is unbeatable.</p>'
  },
  {id:'vercel-v0',name:'Vercel v0',cat:'Code',icon:'⬛',color:'#000',url:'https://v0.dev',tag:'UI Generator',price:'Free / $20/mo',
    desc:'AI UI generator by Vercel. Describe a component and get production-ready React/Tailwind code instantly.',
    review:'<p>Vercel v0 is the fastest way to build a good-looking UI. Describe a component — "a pricing table with three tiers, a recommended badge on the middle one, and a monthly/yearly toggle" — and v0 generates the React + Tailwind code. The output is clean, modern, and follows design best practices. It is not for building entire apps, but for generating UI components that you then integrate into your codebase, it is excellent.</p>'
  },
  {id:'lovable',name:'Lovable',cat:'Code',icon:'💝',color:'#ec4899',url:'https://lovable.dev',tag:'No-Code App',price:'Free / $25/mo',
    desc:'AI app builder. Full-stack apps from prompts with auth, database, and hosting — similar to Bolt.new with a different design philosophy.',
    review:'<p>Lovable competes directly with Bolt.new in the "prompt to full-stack app" space. The difference is philosophical: Lovable prioritizes design polish and user experience out of the box, while Bolt focuses more on technical capability. Both are excellent for MVPs. Try whichever one has a UI and workflow you prefer — they solve the same problem with different tastes.</p>'
  },
  {id:'replicate',name:'Replicate',cat:'Code',icon:'🔁',color:'#000',url:'https://replicate.com',tag:'Model Hosting',price:'Pay per use',
    desc:'Cloud platform for running open-source AI models. Thousands of models, pay-per-use pricing. Essential for AI developers.',
    review:'<p>Replicate is the easiest way to run open-source AI models in the cloud. You do not need a GPU, you do not need to set up Python environments — just pick a model and call the API. It hosts Stable Diffusion, Llama, Whisper, and thousands of other models. For developers building AI-powered apps, Replicate removes the infrastructure headache. Pricing is usage-based and reasonable for prototyping.</p>'
  },
  {id:'huggingface',name:'Hugging Face',cat:'Code',icon:'🤗',color:'#ffbd45',url:'https://huggingface.co',tag:'AI GitHub',price:'Free / $9/mo',
    desc:'The GitHub of AI. 500K+ models, datasets, and demo Spaces. The central hub of the open-source AI community.',
    review:'<p>Hugging Face is where the open-source AI community lives. It hosts models, datasets, and interactive demos (Spaces) for everything from language models to image generators to scientific AI. If an AI model is open-source, it is probably on Hugging Face. For developers and researchers, it is essential infrastructure. For casual users, it is where you go to try bleeding-edge models before they become products.</p>'
  },
  {id:'openai-api',name:'OpenAI API',cat:'Code',icon:'🔌',color:'#10a37f',url:'https://platform.openai.com',tag:'Most Used API',price:'Pay per token',
    desc:'Access GPT-4o, DALL·E, Whisper, and TTS through developer APIs. The most widely used AI platform for building applications.',
    review:'<p>The OpenAI API is how developers build AI-powered applications. It gives you programmatic access to GPT-4o, DALL·E, Whisper (speech-to-text), and TTS models. The documentation is excellent, the SDKs cover every major language, and the ecosystem of tools and tutorials is unmatched. If you are building an app that needs AI, start here — it is the safe, well-documented choice.</p>'
  },
  {id:'anthropic-api',name:'Claude API',cat:'Code',icon:'🔌',color:'#d97706',url:'https://anthropic.com/api',tag:'Best for Agents',price:'Pay per token',
    desc:'Build AI agents with Claude API. Tool use, vision, 200K context, and prompt caching for cost-efficient AI applications.',
    review:'<p>The Claude API is the preferred choice for building AI agents — applications where the AI takes actions (calling APIs, running code, searching databases) rather than just generating text. The tool use system is more reliable than OpenAI, the 200K context window handles huge documents, and prompt caching reduces costs for repeated queries. For agent-based applications, Claude API beats OpenAI API.</p>'
  },
  {id:'copy-ai',name:'Copy.ai',cat:'Writing',icon:'📄',color:'#000',url:'https://copy.ai',tag:'Sales Copy',price:'Free / $49/mo',
    desc:'AI sales and marketing writer. GTM workflows, cold outreach automation, and content pipelines for revenue teams.',
    review:'<p>Copy.ai competes with Jasper in the AI marketing space but focuses more on sales workflows — cold email sequences, LinkedIn outreach, and go-to-market content. If Jasper is for marketing teams, Copy.ai is for revenue teams. Both are good; the choice comes down to which templates and workflows match your team structure. Both are overkill for individual creators.</p>'
  },
  {id:'rytr',name:'Rytr',cat:'Writing',icon:'📖',color:'#f59e0b',url:'https://rytr.me',tag:'Budget Writing',price:'Free / $9/mo',
    desc:'Affordable AI writing assistant. 40+ use cases, 30+ languages, built-in plagiarism checker. Best bang for the buck in AI writing.',
    review:'<p>Rytr is the budget alternative to Jasper and Copy.ai. For $9/month (or free with limits), you get an AI writer that covers most common content formats — blog posts, emails, social media captions, product descriptions. The quality is good enough for most use cases, and the price makes it accessible to freelancers and small businesses who cannot justify $49/month for Jasper.</p>'
  },
  {id:'jenni',name:'Jenni AI',cat:'Writing',icon:'🎓',color:'#6366f1',url:'https://jenni.ai',tag:'Academic',price:'Free / $20/mo',
    desc:'AI academic writing assistant. Essays, research papers, literature reviews with proper citations. A student essential.',
    review:'<p>Jenni AI is purpose-built for academic writing. It helps with essays, research papers, and literature reviews while properly formatting citations (APA, MLA, Chicago, etc.). Unlike general-purpose AI that might hallucinate references, Jenni is designed to work with real sources. For students and researchers, it is the most appropriate AI writing tool — but remember to check your institution academic integrity policy.</p>'
  },
  {id:'murf',name:'Murf AI',cat:'Audio',icon:'🎙️',color:'#8b5cf6',url:'https://murf.ai',tag:'Voiceover',price:'$19/mo+',
    desc:'AI voiceover studio. 120+ natural voices in 20+ languages. Used for training videos, podcasts, and e-learning content.',
    review:'<p>Murf is the workhorse of AI voiceover — more affordable than ElevenLabs for long-form content, with a larger voice library and better studio features for editing timing and emphasis. The voices are good but not ElevenLabs-level natural. Best for e-learning, corporate training videos, and podcasts where you need professional narration at scale without hiring voice actors.</p>'
  },
  {id:'udio',name:'Udio',cat:'Audio',icon:'🎶',color:'#dc2626',url:'https://udio.com',tag:'Music Pro',price:'Free / $10/mo',
    desc:'Professional AI music creation. Higher production quality than Suno with stem separation for remixing and custom arrangements.',
    review:'<p>Udio is Suno main competitor in AI music generation. The key difference: Udio produces tracks with higher production quality and cleaner instrument separation, while Suno is better at capturing genre vibes and vocal hooks. Udio stem separation feature lets you extract individual instruments for remixing — useful for producers. Try both and see which sound you prefer; the gap between them is narrowing every month.</p>'
  },
  {id:'otter',name:'Otter.ai',cat:'Productivity',icon:'🎤',color:'#3b82f6',url:'https://otter.ai',tag:'Meeting Notes',price:'Free / $17/mo',
    desc:'AI meeting transcription and notes. Real-time transcription, automated summaries, and action items from your conversations.',
    review:'<p>Otter.ai joins your meetings and takes notes so you do not have to. It transcribes in real time, identifies different speakers, and generates summaries with action items. The killer feature: you can search across all your past meetings for specific topics or decisions. For people who spend more than 5 hours a week in meetings, the time savings pay for the subscription many times over.</p>'
  },
  {id:'gamma',name:'Gamma',cat:'Productivity',icon:'📊',color:'#6366f1',url:'https://gamma.app',tag:'Presentations',price:'Free / $10/mo',
    desc:'AI presentation and document maker. Generate beautiful decks, docs, and websites from a single prompt in seconds.',
    review:'<p>Gamma generates entire presentations from a prompt or outline. Unlike PowerPoint templates that look like PowerPoint templates, Gamma decks look modern and designed. You can also generate documents and simple websites. It is the fastest way to turn an idea into a shareable, good-looking deck — perfect for pitch decks, project proposals, and internal presentations where you want to look polished without spending hours on slide design.</p>'
  },
  {id:'beautiful-ai',name:'Beautiful.ai',cat:'Productivity',icon:'📈',color:'#2563eb',url:'https://beautiful.ai',tag:'Smart Slides',price:'$12/mo+',
    desc:'AI presentation designer with smart templates. Automatic layout adjustment, brand controls, and team collaboration features.',
    review:'<p>Beautiful.ai enforces good design by automatically adjusting slide layouts as you add content. You cannot make an ugly slide because the AI fixes your spacing, alignment, and typography in real time. For teams that need brand-consistent presentations without a dedicated designer, it is a solid investment. Gamma is better for speed; Beautiful.ai is better for brand control.</p>'
  },
  {id:'zapier',name:'Zapier AI',cat:'Productivity',icon:'⚙️',color:'#ff4a00',url:'https://zapier.com/ai',tag:'Automation',price:'$20/mo+',
    desc:'AI automation platform connecting 7,000+ apps. Build AI workflows with natural language — no code, no APIs, no complexity.',
    review:'<p>Zapier AI lets you build automated workflows that include AI steps. Example: "When I get an email from a customer, have AI analyze the sentiment, draft a reply based on our FAQ, and save it to my drafts folder." It connects to 7,000+ apps and the AI steps mean you can add intelligence to automations that used to be simple if-this-then-that rules. Expensive but powerful.</p>'
  },
  {id:'framer',name:'Framer AI',cat:'Image',icon:'🏗️',color:'#000',url:'https://framer.com/ai',tag:'AI Websites',price:'$5/mo+',
    desc:'AI website builder. Generate complete, responsive, and polished websites from text prompts. Publish instantly.',
    review:'<p>Framer AI generates entire websites from a text description — landing pages, portfolios, company sites. The output is genuinely good-looking and responsive. You can then use Framer visual editor to tweak everything. For non-developers who need a polished web presence fast, it is the best option. For developers who want full code control, it is the wrong tool.</p>'
  }
];

/* ============ RENDER HELPERS ============ */
function getParam(p){return new URL(window.location.href).searchParams.get(p)}

function renderCard(t){
  return `<div class="tool-card" onclick="location.href='tool-detail.html?id=${t.id}'" style="cursor:pointer">
    <div class="cat">${t.cat}</div>
    <div class="header">
      <div class="icon" style="background:${t.color}20;color:${t.color}">${t.icon}</div>
      <h3>${t.name}</h3>
    </div>
    <p>${t.desc}</p>
    <div class="footer">
      <span class="tag">${t.tag}</span>
      <span class="review-link">Read Review →</span>
    </div>
  </div>`;
}

/* ============ LISTING PAGE ============ */
function renderListing(){
  const g=document.getElementById('toolsGrid');if(!g)return;
  g.innerHTML=toolsData.map(renderCard).join('');
  document.getElementById('toolCount').textContent=toolsData.length;
  document.getElementById('resultCount').textContent='Showing '+toolsData.length+' tools';

  // Search
  document.getElementById('searchBtn').addEventListener('click',()=>{
    const q=document.getElementById('searchInput').value.trim().toLowerCase();
    const filtered=q?toolsData.filter(t=>t.name.toLowerCase().includes(q)||t.cat.toLowerCase().includes(q)||t.desc.toLowerCase().includes(q)):toolsData;
    g.innerHTML=filtered.map(renderCard).join('');
    document.getElementById('resultCount').textContent='Showing '+filtered.length+' tools';
  });
  document.getElementById('searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('searchBtn').click()});

  // Filters
  document.querySelectorAll('.filter-btn').forEach(b=>{
    b.addEventListener('click',()=>{
      document.querySelectorAll('.filter-btn').forEach(bb=>bb.classList.remove('active'));
      b.classList.add('active');
      const cat=b.dataset.cat;
      const filtered=cat==='all'?toolsData:toolsData.filter(t=>t.cat===cat);
      g.innerHTML=filtered.map(renderCard).join('');
      document.getElementById('resultCount').textContent='Showing '+filtered.length+' tools';
    });
  });
}

/* ============ DETAIL PAGE ============ */
function renderDetail(){
  const id=getParam('id');
  const t=toolsData.find(t=>t.id===id);
  if(!t){document.getElementById('detailHeader').innerHTML='<h1>Tool Not Found</h1><p><a href="index.html">← Back to Directory</a></p>';return}
  document.title=t.name+' Review — AI Tools Directory';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content='In-depth review of '+t.name+'. '+t.desc;
  document.getElementById('detailHeader').innerHTML=`
    <div class="breadcrumb"><a href="index.html">Home</a> / ${t.cat} / ${t.name}</div>
    <div class="tool-icon">${t.icon}</div>
    <h1>${t.name}</h1>
    <p style="color:var(--text2);max-width:550px;margin:8px auto 0;">${t.desc}</p>
    <div class="tag-row">
      <span class="tag-pill tag-cat">${t.cat}</span>
      <span class="tag-pill tag-price">${t.price}</span>
      <span class="tag-pill tag-cat">${t.tag}</span>
    </div>
    <a href="${t.url}" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top:20px;">Visit ${t.name} →</a>
  `;
  document.getElementById('detailContent').innerHTML=t.review||'<p>'+t.desc+'</p><p>Full review coming soon. <a href="'+t.url+'" target="_blank" rel="noopener">Try '+t.name+' →</a></p>';

  // Related
  const related=toolsData.filter(r=>r.cat===t.cat&&r.id!==t.id).slice(0,4);
  document.getElementById('relatedTools').innerHTML=related.map(r=>`
    <div class="tool-card" onclick="location.href='tool-detail.html?id=${r.id}'" style="cursor:pointer">
      <div class="header">
        <div class="icon" style="background:${r.color}20;color:${r.color};width:36px;height:36px;font-size:1.1rem">${r.icon}</div>
        <h3 style="font-size:.95rem">${r.name}</h3>
      </div>
      <p style="font-size:.78rem">${r.desc.slice(0,100)}...</p>
    </div>
  `).join('');
}

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded',()=>{
  const path=window.location.pathname.replace(/^\/+/,'').replace(/\/$/,'');
  if(path.includes('tool-detail'))renderDetail();
  else renderListing();
});