const toolsData=[
  {name:'ChatGPT',cat:'Chat',icon:'🧠',color:'#10a37f',desc:'OpenAI flagship AI chatbot. GPT-4o model with web search, image gen, code execution.',url:'https://chatgpt.com',tag:'Popular'},
  {name:'Claude',cat:'Chat',icon:'🎯',color:'#d97706',desc:'Anthropic AI assistant. Best for long-form writing, coding, and nuanced reasoning.',url:'https://claude.ai',tag:'Top Rated'},
  {name:'Gemini',cat:'Chat',icon:'💎',color:'#4285f4',desc:'Google AI chatbot. Integrated with Google apps — Gmail, Docs, YouTube, Maps.',url:'https://gemini.google.com',tag:'Free'},
  {name:'DeepSeek',cat:'Chat',icon:'🔍',color:'#4f46e5',desc:'Chinese AI powerhouse. Open-source models rivaling GPT-4 at fraction of cost.',url:'https://chat.deepseek.com',tag:'Value'},
  {name:'Perplexity',cat:'Chat',icon:'🔎',color:'#1e1e1e',desc:'AI search engine with citations. Real-time web research with source links.',url:'https://perplexity.ai',tag:'Research'},
  {name:'Grok',cat:'Chat',icon:'⚡',color:'#1da1f2',desc:'xAI chatbot by Elon Musk. Real-time X/Twitter data, uncensored responses.',url:'https://grok.com',tag:'New'},
  {name:'Poe',cat:'Chat',icon:'📬',color:'#5436da',desc:'Quora multi-model platform. Access Claude, GPT, Gemini, Llama in one place.',url:'https://poe.com',tag:'Multi-Model'},
  {name:'Character.AI',cat:'Chat',icon:'🎭',color:'#ff6b6b',desc:'Chat with AI characters. Roleplay, language practice, creative storytelling.',url:'https://character.ai',tag:'Fun'},
  {name:'Midjourney',cat:'Image',icon:'🖼️',color:'#1a1a2e',desc:'Industry-leading AI image generator. Photorealistic art, illustrations, concept art.',url:'https://midjourney.com',tag:'Best Quality'},
  {name:'DALL·E 3',cat:'Image',icon:'🎨',color:'#10a37f',desc:'OpenAI image generator built into ChatGPT. Text-to-image with precise prompt following.',url:'https://openai.com/dall-e-3',tag:'Integrated'},
  {name:'Stable Diffusion',cat:'Image',icon:'🌈',color:'#9333ea',desc:'Open-source image model. Run locally, unlimited free generations, massive community.',url:'https://stability.ai',tag:'Open Source'},
  {name:'Leonardo AI',cat:'Image',icon:'🦁',color:'#e11d48',desc:'Game asset focused AI image tool. Character design, textures, concept art.',url:'https://leonardo.ai',tag:'Gaming'},
  {name:'Canva AI',cat:'Image',icon:'✨',color:'#00c4cc',desc:'AI-powered design platform. Magic Studio for presentations, social media, logos.',url:'https://canva.com',tag:'Design'},
  {name:'Krea AI',cat:'Image',icon:'🔮',color:'#000',desc:'Real-time AI image generation. Draw + AI renders simultaneously. Unique workflow.',url:'https://krea.ai',tag:'Real-Time'},
  {name:'Remove.bg',cat:'Image',icon:'✂️',color:'#4caf50',desc:'AI background removal. One click, perfect cutouts. Used by millions daily.',url:'https://remove.bg',tag:'Utility'},
  {name:'Sora',cat:'Video',icon:'🎬',color:'#10a37f',desc:'OpenAI text-to-video model. Generate realistic videos from text descriptions.',url:'https://sora.com',tag:'New'},
  {name:'Runway',cat:'Video',icon:'🎥',color:'#000',desc:'Professional AI video editing. Gen-3 model for text-to-video, motion tracking, VFX.',url:'https://runwayml.com',tag:'Pro'},
  {name:'Pika',cat:'Video',icon:'🍿',color:'#ec4899',desc:'AI video generator. Create short clips, animate images, lip-sync AI avatars.',url:'https://pika.art',tag:'Creative'},
  {name:'HeyGen',cat:'Video',icon:'🎙️',color:'#6366f1',desc:'AI avatar video creator. Translate videos, clone voices, digital humans for content.',url:'https://heygen.com',tag:'Business'},
  {name:'Synthesia',cat:'Video',icon:'🤖',color:'#2563eb',desc:'AI video with digital avatars. 140+ languages. Used by 50,000+ companies.',url:'https://synthesia.io',tag:'Enterprise'},
  {name:'CapCut',cat:'Video',icon:'✂️',color:'#000',desc:'ByteDance free video editor. AI captions, effects, background removal, templates.',url:'https://capcut.com',tag:'Free'},
  {name:'GitHub Copilot',cat:'Code',icon:'🐙',color:'#24292e',desc:'#1 AI coding assistant. Autocomplete, chat, code review inside VS Code & JetBrains.',url:'https://github.com/features/copilot',tag:'Best'},
  {name:'Cursor',cat:'Code',icon:'🖱️',color:'#6366f1',desc:'AI-first code editor. Built on VS Code with Claude/GPT integration. Game changer.',url:'https://cursor.sh',tag:'Hot'},
  {name:'Claude Code',cat:'Code',icon:'⚡',color:'#d97706',desc:'Anthropic CLI coding agent. Build entire apps from terminal. Agent-driven development.',url:'https://claude.ai/code',tag:'Agent'},
  {name:'Replit',cat:'Code',icon:'🔄',color:'#f97316',desc:'Browser-based IDE with AI agent. Build and deploy full-stack apps from chat.',url:'https://replit.com',tag:'Web IDE'},
  {name:'Vercel v0',cat:'Code',icon:'⬛',color:'#000',desc:'AI UI generator. Describe your UI — get production-ready React/Tailwind code.',url:'https://v0.dev',tag:'Frontend'},
  {name:'Bolt.new',cat:'Code',icon:'⚡',color:'#6366f1',desc:'AI full-stack app builder. Prompt → running app in browser. No setup needed.',url:'https://bolt.new',tag:'Full-Stack'},
  {name:'Windsurf',cat:'Code',icon:'🌊',color:'#06b6d4',desc:'AI-native IDE by Codeium. Context-aware coding with Cascade agent. Fast autocomplete.',url:'https://codeium.com/windsurf',tag:'Rising'},
  {name:'Jasper',cat:'Writing',icon:'✍️',color:'#e11d48',desc:'AI marketing copywriter. Blog posts, ads, emails, social media — brand voice trained.',url:'https://jasper.ai',tag:'Marketing'},
  {name:'Grammarly',cat:'Writing',icon:'📝',color:'#11b981',desc:'AI writing assistant. Grammar, tone, clarity, plagiarism check. Browser + desktop.',url:'https://grammarly.com',tag:'Essential'},
  {name:'Notion AI',cat:'Productivity',icon:'📋',color:'#000',desc:'AI inside Notion workspace. Write, summarize, translate, brainstorm — all in one.',url:'https://notion.so/product/ai',tag:'Workspace'},
  {name:'ElevenLabs',cat:'Audio',icon:'🎧',color:'#818cf8',desc:'Best AI voice synthesis. Text-to-speech, voice cloning, dubbing in 29 languages.',url:'https://elevenlabs.io',tag:'Best Voice'},
  {name:'Suno',cat:'Audio',icon:'🎵',color:'#9333ea',desc:'AI music generator. Create full songs from text — lyrics, melody, instrumentation.',url:'https://suno.ai',tag:'Music'},
  {name:'Udio',cat:'Audio',icon:'🎶',color:'#dc2626',desc:'AI music creation. Pro-quality tracks, custom genres, stem separation for remixing.',url:'https://udio.com',tag:'Music Pro'},
  {name:'Adobe Firefly',cat:'Image',icon:'🔥',color:'#ff0000',desc:'Adobe AI creative suite. Generative fill, text effects, recolor — integrated with Photoshop.',url:'https://firefly.adobe.com',tag:'Pro Design'},
  {name:'Otter.ai',cat:'Productivity',icon:'🎤',color:'#3b82f6',desc:'AI meeting transcription. Real-time notes, summaries, action items from conversations.',url:'https://otter.ai',tag:'Meetings'},
  {name:'Gamma',cat:'Productivity',icon:'📊',color:'#6366f1',desc:'AI presentation & doc maker. Create beautiful decks, docs, websites from prompts.',url:'https://gamma.app',tag:'Presentations'},
  {name:'Beautiful.ai',cat:'Productivity',icon:'📈',color:'#2563eb',desc:'AI presentation designer. Smart templates, auto-layout, brand controls.',url:'https://beautiful.ai',tag:'Slides'},
  {name:'Anthropic Claude API',cat:'Code',icon:'🔌',color:'#d97706',desc:'Build AI agents with Claude API. Tool use, vision, 200K context, prompt caching.',url:'https://anthropic.com/api',tag:'API'},
  {name:'OpenAI API',cat:'Code',icon:'🔌',color:'#10a37f',desc:'GPT-4o, DALL·E, Whisper, TTS APIs. The most widely used AI platform for developers.',url:'https://platform.openai.com',tag:'API'},
  {name:'Hugging Face',cat:'Code',icon:'🤗',color:'#ffbd45',desc:'The GitHub of AI. 500K+ models, datasets, Spaces for demos. Open-source ML hub.',url:'https://huggingface.co',tag:'Open Source'},
  {name:'Descript',cat:'Video',icon:'🎞️',color:'#6366f1',desc:'AI video/podcast editor. Edit video by editing text. Remove filler words automatically.',url:'https://descript.com',tag:'Podcast'},
  {name:'Copy.ai',cat:'Writing',icon:'📄',color:'#000',desc:'AI sales & marketing writer. GTM workflows, cold outreach, content automation.',url:'https://copy.ai',tag:'Sales'},
  {name:'Rytr',cat:'Writing',icon:'📖',color:'#f59e0b',desc:'Affordable AI writing assistant. 40+ use cases, 30+ languages, built-in plagiarism check.',url:'https://rytr.me',tag:'Budget'},
  {name:'Jenni AI',cat:'Writing',icon:'🎓',color:'#6366f1',desc:'AI academic writing. Papers, essays, literature reviews with citations. Student favorite.',url:'https://jenni.ai',tag:'Academic'},
  {name:'Murf AI',cat:'Audio',icon:'🎙️',color:'#8b5cf6',desc:'AI voiceover studio. 120+ voices in 20 languages. Used for videos, podcasts, e-learning.',url:'https://murf.ai',tag:'Voiceover'},
  {name:'Lovable',cat:'Code',icon:'💝',color:'#ec4899',desc:'AI app builder from prompts. Full-stack apps with auth, database, hosting included.',url:'https://lovable.dev',tag:'No-Code'},
  {name:'Replicate',cat:'Code',icon:'🔁',color:'#000',desc:'Run open-source AI models in cloud. Thousands of models, pay per use. Great for devs.',url:'https://replicate.com',tag:'API'},
  {name:'Zapier AI',cat:'Productivity',icon:'⚙️',color:'#ff4a00',desc:'AI automation platform. Connect 7,000+ apps with AI actions. No code needed.',url:'https://zapier.com/ai',tag:'Automation'},
  {name:'Framer AI',cat:'Image',icon:'🏗️',color:'#000',desc:'AI website builder. Generate and publish complete websites from text prompts in seconds.',url:'https://framer.com/ai',tag:'Web Design'},
];

const grid=document.getElementById('toolsGrid');
const resultCount=document.getElementById('resultCount');
const toolCountEl=document.getElementById('toolCount');

function renderTools(list){
  grid.innerHTML=list.map(t=>`
    <div class="tool-card">
      <div class="cat">${t.cat}</div>
      <div class="header">
        <div class="icon" style="background:${t.color}20;color:${t.color}">${t.icon}</div>
        <h3>${t.name}</h3>
      </div>
      <p>${t.desc}</p>
      <div class="footer">
        <span class="tag">${t.tag}</span>
        <a href="${t.url}" target="_blank" rel="noopener" class="link">Visit →</a>
      </div>
    </div>
  `).join('');
  resultCount.textContent=`Showing ${list.length} tools`;
  toolCountEl.textContent=list.length;
}
renderTools(toolsData);

document.querySelectorAll('.filter-btn').forEach(b=>{
  b.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(bb=>bb.classList.remove('active'));
    b.classList.add('active');
    const cat=b.dataset.cat;
    renderTools(cat==='all'?toolsData:toolsData.filter(t=>t.cat===cat));
  });
});

document.getElementById('searchBtn').addEventListener('click',()=>{
  const q=document.getElementById('searchInput').value.trim().toLowerCase();
  renderTools(q?toolsData.filter(t=>t.name.toLowerCase().includes(q)||t.cat.toLowerCase().includes(q)||t.desc.toLowerCase().includes(q)):toolsData);
});
document.getElementById('searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('searchBtn').click();});
