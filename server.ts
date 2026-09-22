import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // AI Admissions & Academic Counselor endpoint
  app.post('/api/counselor', async (req, res) => {
    const { question, history } = req.body;

    if (!question || typeof question !== 'string') {
      res.status(400).json({ error: 'Question is required' });
      return;
    }

    const schoolContext = `
You are the Official Senior Admissions & Academic Counselor for "Oakridge International Academy", an elite CBSE & IB World School established in 1994 on a 25-acre eco-campus.
Key School Highlights:
- Campus Size: 25 Acres, 135+ faculty, 11:1 student-to-teacher ratio, 100% university placement record (Ivy League, IIT, Russell Group).
- Infrastructure & Benches: Ergonomic dual German beechwood benches with 12° writing inclination, lumbar alignment, bullnose safety corners, and bag hooks. Hexagonal collaborative STEM benches with built-in power & 65W USB-PD charging. 86" 4K interactive Promethean smartboards, acoustic ceiling baffles (NRC 0.85), HEPA air filtration, circadian daylight LED lighting.
- Science & Tech Labs: Chemistry wet-labs with acid-proof ceramic slabs and fume extractors, Physics optics darkrooms, Robotics & AI Hub with 3D printers and autonomous test tracks, Biotech gene labs.
- Sports & Arts: 400m synthetic running track, FIFA turf football ground, heated Olympic 50m pool, maple-wood indoor basketball gym, 4 floodlit tennis courts, 1,200-seat Symphony Hall auditorium, sculpture & ceramic studios with kilns.
- Grades & Streams: Pre-K to Grade 12. Senior secondary streams:
  1) STEM Engineering (PCM + CS/AI)
  2) Life Sciences Medical (PCB + Biotech/Math)
  3) Commerce & Finance (Accountancy, Business, Economics, Applied Math)
  4) Humanities & Public Policy (History, Pol Sci, Psychology, Legal Studies)
- Faculty: Dr. Evelyn Vance (Ph.D. Cambridge Physics), Marcus Sterling (M.Sc. MIT AI & Robotics), Ananya Sharma (M.A. Oxford Literature), Prof. Rajesh Sen (M.Sc. IIT Math), Dr. Ananya Ray (Stanford postdoc Biotech), Vipin Mehra (FCA Commerce), Coach David Miller (Former National Sprinter).
- Admissions & Fees: Admissions open for 2027-2028. Merit scholarships up to 40% for 92%+ or national sports achievers. 10% sibling discount. GPS-monitored AC buses across 42 city routes. Boarding lodges available from Grade 6.

Please answer the user's inquiry warmly, professionally, and concisely in 2-4 easy-to-read paragraphs or neat bullet points. Highlight specific facts, classroom benches/facilities, teachers, or admission steps when relevant.
`;

    // Attempt to call Gemini API if key is available
    if (process.env.GEMINI_API_KEY) {
      try {
        const ai = new GoogleGenAI({
          apiKey: process.env.GEMINI_API_KEY,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            },
          },
        });

        const promptText = `${schoolContext}\n\nUser Question: ${question}\n\nPlease respond as the Oakridge Admissions Counselor:`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: promptText,
        });

        const reply = response.text || "Thank you for inquiring with Oakridge Academy. Our admissions office is ready to assist you.";
        res.json({ reply, source: 'ai' });
        return;
      } catch (err: any) {
        console.warn('Gemini API call failed, falling back to built-in counselor knowledge engine:', err.message);
      }
    }

    // Built-in intelligent answering fallback if API key is not yet set
    const qLower = question.toLowerCase();
    let fallbackReply = '';

    if (qLower.includes('bench') || qLower.includes('desk') || qLower.includes('furniture') || qLower.includes('seating') || qLower.includes('posture')) {
      fallbackReply = `At Oakridge Academy, student orthopedic health is paramount. Every classroom features customized German-engineered dual benches made of high-density beechwood with a 12° angled writing surface to eliminate neck fatigue. The chairs provide an S-curve lumbar backrest and waterfall front edge to preserve healthy blood circulation during active learning. In our STEM and robotics labs, we utilize modular hexagonal mobile benches with integrated 65W USB-PD charging and acid-resistant tops for seamless teamwork.`;
    } else if (qLower.includes('fee') || qLower.includes('cost') || qLower.includes('scholarship') || qLower.includes('discount')) {
      fallbackReply = `Our transparent fee structure ranges from approximately ₹1,35,000/year for Early Years to ₹2,40,000/year for Senior Secondary Streams (payable in 3 term installments). We offer Merit Scholarships up to a 40% tuition concession for academic scores above 92% or verified national-level athletic/arts honors. Additionally, a 10% sibling discount is automatically applied for younger siblings enrolled simultaneously. You can use our interactive Fee Estimator on the portal for a personalized calculation!`;
    } else if (qLower.includes('admission') || qLower.includes('apply') || qLower.includes('document') || qLower.includes('eligibility')) {
      fallbackReply = `Admissions for the upcoming 2027–2028 academic cycle are officially open! The process is completed in 4 simple steps: 1) Fill out our online application form on this portal, 2) Upload the applicant's birth certificate, previous year report card, and passport photos, 3) Attend the interactive diagnostic assessment and principal discussion, and 4) Complete enrollment upon receiving the provisional letter. Applications submitted through this portal receive a real-time Reference ID to track live progress.`;
    } else if (qLower.includes('stream') || qLower.includes('subject') || qLower.includes('course') || qLower.includes('grade 11') || qLower.includes('stem')) {
      fallbackReply = `In Senior Secondary (Grades 11 & 12), Oakridge provides 4 rigorous pathways: 
1. **STEM Engineering (PCM)**: Physics, Chemistry, Math, with electives in Computer Science & AI.
2. **Life Sciences & Medical (PCB)**: Physics, Chemistry, Biology, with Biotechnology & Psychology.
3. **Commerce & Finance**: Accountancy, Business Studies, Economics, and Applied Mathematics.
4. **Humanities & Public Policy**: World History, Political Science, Psychology, and Legal Studies.
All streams feature weekly 6-hour laboratory sessions guided by faculty holding degrees from Cambridge, MIT, IIT, and Oxford.`;
    } else if (qLower.includes('teacher') || qLower.includes('faculty') || qLower.includes('staff')) {
      fallbackReply = `Our 135+ faculty members include distinguished researchers and master educators, such as Dr. Evelyn Vance (Ph.D. Cambridge Physics), Marcus Sterling (M.Sc. MIT Computer Science & AI), Ananya Sharma (M.A. Oxford English), and Prof. Rajesh Sen (M.Sc. IIT Bombay Mathematics). We maintain an enviable 11:1 student-to-teacher ratio to ensure customized mentorship for every scholar.`;
    } else if (qLower.includes('area') || qLower.includes('campus') || qLower.includes('ground') || qLower.includes('sports') || qLower.includes('pool') || qLower.includes('map')) {
      fallbackReply = `Our 25-acre green eco-campus features 8 dedicated zones: the Aryabhata Academic Quad (64 smart classrooms), the Ada Lovelace STEM & Robotics Hub, the 3-storey Tagore Central Library (55,000+ titles), Olympia Athletic Arena with an 8-lane 400m synthetic track and FIFA turf, an Olympic heated 50m pool, a 1,200-seat Symphony Hall auditorium, and residential boarding lodges. You can explore our interactive campus map and photo gallery right on the portal!`;
    } else {
      fallbackReply = `Welcome to the Oakridge International Academy Admissions Portal! We are delighted to guide you. Our 25-acre campus offers CBSE & IB certified education from Pre-K through Grade 12, featuring state-of-the-art ergonomic classrooms, high-tech science labs, Olympic athletic facilities, and distinguished faculty. Would you like to know more about our admissions timeline, fee structure, classroom bench ergonomics, or our senior academic streams?`;
    }

    res.json({ reply: fallbackReply, source: 'counselor_knowledge_base' });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Oakridge School Portal Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
