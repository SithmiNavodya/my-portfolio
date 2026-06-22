import React, { useState, useEffect, useRef } from "react";
import profilePic from "./assets/me.jpeg";

type Page = "home" | "about" | "projects" | "contact";

/* ═══════════════════════════════════════════════
   PROJECTS — clean, no redundancy
═══════════════════════════════════════════════ */
const PROJECTS = [
  {
    id: "01",
    name: "DocLink - Smart Healthcare & Telemedicine Platform",
    tag: "Microservices · Group Project",
    year: "2026",
    desc: "Built the Doctor Management and Telemedicine microservices within a Spring Boot & React platform — featuring real-time video consultations via Jitsi Meet, doctor availability scheduling, appointment handling, and digital prescriptions — backed by PostgreSQL, containerised with Docker and Kubernetes.",
    stack: ["Spring Boot", "React + TypeScript", "Docker", "Kubernetes", "REST APIs", "PostgreSQL" , "Jitsi Meet"],
    accent: "#6366F1",
    size: "large",
    github: "https://github.com/Ramidu-Theekshana/DocLink-healthcare-platform",
    live: null,
    image: "/docklink.jpeg",
  },
  {
    id: "02",
    name: "VitaSense - Healthcare Web Application",
    tag: "MERN · Academic",
    year: "2026",
    desc: "Built the Mental Health and Physical Assessment modules for a full-stack MERN healthcare platform — featuring dynamic recommendations based on user results, USDA FoodData Central API integration for nutritional search, and YouTube API for health content delivery.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    accent: "#6366F1",
    size: "medium",
    github: "https://github.com/Ramidu-Theekshana/VitaSense-Health_Care_System",
    live: "https://vita-sense-health-care-system.vercel.app/",
    image: "/Vitasence.png",
  },
  {
    id: "03",
    name: "Vehicle Service Center System",
    tag: "Spring Boot · Individual",
    year: "2025",
    desc: "End-to-end vehicle service center system managing customer records, service bookings, appointment tracking, and inventory — built with a Spring Boot REST backend and React frontend, persisted to MySQL.",
    stack: ["Spring Boot", "React", "MySQL"],
    accent: "#6366F1",
    size: "medium",
    github: "https://github.com/SithmiNavodya/vehicle-service-center",
    live: null,
    image: "/VSC_inv.png",
  },
  {
    id: "04",
    name: "Smart Tea Factory Management system",
    tag: "MERN · Academic",
    year: "2025",
    desc: "Full-stack MERN application for tea factory operations — covers warehouse and inventory management with real-time stock tracking, automated report generation, and an internal messaging workflow for team communication.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    accent: "#6366F1",
    size: "medium",
    github: "https://github.com/Ramidu-Theekshana/Smart-Tea-Factory-Management-System",
    live: null,
    image: "/TeaF.jpeg",
  },
  {
    id: "05",
    name: "Laundry Management System",
    tag: "Java MVC · Academic",
    year: "2025",
    desc: "Built the Order Management and Discount Handling modules for a JSP/Servlets MVC system — featuring full CRUD operations and a Tailwind CSS interface to improve user experience.",
    stack: ["Java", "JSP/Servlets", "Tailwind CSS", "MySQL"],
    accent: "#6366F1",
    size: "medium",
    github: null,
    live: null,
    image: null,
  },
];

/* ═══════════════════════════════════════════════
   CURSOR GLOW
═══════════════════════════════════════════════ */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top  = e.clientY  + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div ref={ref} style={{
      position: "fixed", pointerEvents: "none", zIndex: 0,
      width: 500, height: 500, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
      transform: "translate(-50%,-50%)",
      transition: "left 0.12s ease, top 0.12s ease",
    }} />
  );
}

/* ═══════════════════════════════════════════════
   NAV — minimal floating pill
═══════════════════════════════════════════════ */
function Nav({ page, go }: { page: Page; go: (p: Page) => void }) {
  const links: { l: string; p: Page }[] = [
    { l: "Home", p: "home" }, { l: "About", p: "about" },
    { l: "Projects", p: "projects" }, { l: "Contact", p: "contact" },
  ];
  return (
    <>
      <style>{`
        @keyframes fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes shimmer  { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes orbit    { from{transform:rotate(0deg) translateX(160px) rotate(0deg)} to{transform:rotate(360deg) translateX(160px) rotate(-360deg)} }
        @keyframes scaleIn  { from{opacity:0;transform:scale(0.94)} to{opacity:1;transform:scale(1)} }
        * { box-sizing: border-box; }
      `}</style>
      <nav style={{
        position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)",
        zIndex: 300, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)",
        border: "1px solid rgba(99,102,241,0.15)", borderRadius: 60,
        padding: "8px 10px", display: "flex", alignItems: "center", gap: 2,
        boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
      }}>
        {links.map(({ l, p }) => (
          <button key={p} onClick={() => go(p)} style={{
            background: page === p ? "#6366F1" : "transparent",
            color: page === p ? "#fff" : "#666",
            border: "none", borderRadius: 50, cursor: "pointer",
            padding: "8px 22px", fontSize: 13,
            fontFamily: "'DM Sans',sans-serif", fontWeight: 600,
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { if (page !== p) e.currentTarget.style.color = "#6366F1"; }}
            onMouseLeave={e => { if (page !== p) e.currentTarget.style.color = "#666"; }}>
            {l}
          </button>
        ))}
      </nav>
    </>
  );
}

/* ═══════════════════════════════════════════════
   HOME — editorial split, orbiting tags, shimmer name
═══════════════════════════════════════════════ */
function Home({ go }: { go: (p: Page) => void }) {
  const [typed, setTyped] = useState("");
  const words = ["focus on Full-Stack Development", "SE undergraduate @ SLIIT","Quick Learner"];
  const [wi, setWi] = useState(0); const [ci, setCi] = useState(0); const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[wi];
    let t: ReturnType<typeof setTimeout>;
    if (!del && ci < w.length)       t = setTimeout(() => { setTyped(w.slice(0,ci+1)); setCi(c=>c+1); }, 75);
    else if (!del && ci === w.length) t = setTimeout(() => setDel(true), 1600);
    else if (del && ci > 0)           t = setTimeout(() => { setTyped(w.slice(0,ci-1)); setCi(c=>c-1); }, 40);
    else { setDel(false); setWi(i=>(i+1)%words.length); }
    return () => clearTimeout(t);
  }, [ci, del, wi]);

  // orbiting skill bubbles
  const orbitSkills = ["React", "Express.js", "Spring Boot", "Node.js", "JS", "MySQL"];

  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"0 3rem", paddingTop:80, position:"relative", zIndex:1 }}>
      <div style={{ maxWidth:1160, margin:"0 auto", width:"100%", display:"grid", gridTemplateColumns:"1fr 420px", gap:"6rem", alignItems:"center" }}>

        {/* ── LEFT ── */}
        <div style={{ animation:"fadeUp 0.7s ease both" }}>
          {/* open badge */}
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8, marginBottom:"2.5rem",
            background:"rgba(16,185,129,0.07)", border:"1px solid rgba(16,185,129,0.2)",
            borderRadius:50, padding:"6px 18px",
          }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:"#10B981", display:"inline-block",
              boxShadow:"0 0 0 3px rgba(16,185,129,0.2)", animation:"float 2s ease-in-out infinite" }} />
            <span style={{ fontFamily:"monospace", fontSize:12, fontWeight:700, color:"#059669", letterSpacing:"0.06em" }}>
              OPEN TO INTERNSHIPS · 2026
            </span>
          </div>

          {/* Name — shimmer gradient */}
          <h1 style={{
            fontFamily:"'DM Sans',sans-serif", fontWeight:800,
            fontSize:"clamp(3.8rem,6.5vw,6rem)", lineHeight:0.95,
            letterSpacing:"-3.5px", margin:"0 0 1.6rem",
          }}>
            <span style={{ display:"block", color:"#0F0F0E" }}>Sithmi</span>
            <span style={{
              display:"block",
              background:"linear-gradient(270deg,#6366F1,#06B6D4,#8B5CF6,#6366F1)",
              backgroundSize:"400% auto",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
              animation:"shimmer 4s linear infinite",
            }}>Navodya.</span>
          </h1>

          {/* Typewriter */}
          <p style={{ fontFamily:"monospace", fontSize:15, color:"#777", marginBottom:"2rem", display:"flex", alignItems:"center", gap:4 }}>
            <span style={{ color:"#6366F1" }}>▸</span>
            <span style={{ color:"#444", fontWeight:600 }}>{typed}</span>
            <span style={{ width:8, height:18, background:"#6366F1", display:"inline-block", borderRadius:2, animation:"blink 1s step-start infinite" }} />
          </p>

          {/* One-liner — NOT a repeated bio */}
          <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:17, lineHeight:1.75, color:"#5A5856", maxWidth:460, marginBottom:"2.8rem" }}>
            Year 3 SE undergraduate at <strong style={{ color:"#0F0F0E" }}>SLIIT</strong> — with experience in full-stack development. Seeking an internship to apply my skills in React, Spring Boot, and databases to build real-world applications.</p>

          {/* CTAs */}
          <div style={{ display:"flex", gap:"0.85rem", flexWrap:"wrap" }}>
            <button onClick={() => go("projects")} style={{
              background:"#0F0F0E", color:"#fff", border:"none",
              borderRadius:50, padding:"14px 32px", fontSize:14,
              fontFamily:"'DM Sans',sans-serif", fontWeight:700, cursor:"pointer",
              letterSpacing:"0.02em", transition:"all 0.2s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.background="#6366F1"; e.currentTarget.style.boxShadow="0 10px 30px rgba(99,102,241,0.35)";}}
              onMouseLeave={e=>{e.currentTarget.style.background="#0F0F0E"; e.currentTarget.style.boxShadow="none";}}>
              See my work →
            </button>
            <a href="https://github.com/SithmiNavodya" style={{
              display:"inline-flex", alignItems:"center", gap:7,
              background:"transparent", color:"#0F0F0E",
              border:"1.5px solid #E0DDD8", borderRadius:50, padding:"14px 28px",
              fontSize:14, fontFamily:"'DM Sans',sans-serif", fontWeight:700, textDecoration:"none",
              transition:"border-color 0.2s",
            }}
              onMouseEnter={e=>e.currentTarget.style.borderColor="#6366F1"}
              onMouseLeave={e=>e.currentTarget.style.borderColor="#E0DDD8"}>
              ⎇ GitHub
            </a>
            <a href="https://www.linkedin.com/in/navodya-thilakarathna" style={{
              display:"inline-flex", alignItems:"center", gap:7,
              background:"transparent", color:"#0A66C2",
              border:"1.5px solid rgba(10,102,194,0.25)", borderRadius:50, padding:"14px 28px",
              fontSize:14, fontFamily:"'DM Sans',sans-serif", fontWeight:700, textDecoration:"none",
              transition:"all 0.2s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.background="#0A66C2"; e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="#0A66C2";}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent"; e.currentTarget.style.color="#0A66C2"; e.currentTarget.style.borderColor="rgba(10,102,194,0.25)";}}>
              in LinkedIn
            </a>
            <a href="/Sithmi%20Navodya_resume.pdf" download="Sithmi_Navodya_CV.pdf" style={{
              display:"inline-flex", alignItems:"center", gap:7,
              background:"#6366F1", color:"#fff",
              border:"none", borderRadius:50, padding:"14px 28px",
              fontSize:14, fontFamily:"'DM Sans',sans-serif", fontWeight:700, textDecoration:"none",
              transition:"all 0.2s",
              boxShadow: "0 4px 12px rgba(99,102,241,0.2)",
            }}
              onMouseEnter={e=>{e.currentTarget.style.background="#4F46E5"; e.currentTarget.style.boxShadow="0 8px 20px rgba(99,102,241,0.4)";}}
              onMouseLeave={e=>{e.currentTarget.style.background="#6366F1"; e.currentTarget.style.boxShadow="0 4px 12px rgba(99,102,241,0.2)";}}>
              ↓ Download CV
            </a>
          </div>
        </div>

        {/* ── RIGHT — abstract orbiting visual ── */}
        <div style={{ position:"relative", display:"flex", alignItems:"center", justifyContent:"center", animation:"fadeUp 0.7s 0.15s ease both" }}>
          {/* Centre avatar */}
          <div style={{
            width:200, height:200, borderRadius:"50%",
            background:"linear-gradient(135deg,#6366F1 0%,#06B6D4 100%)",
            overflow: "hidden",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 32px 80px rgba(99,102,241,0.35)",
            zIndex:2, position:"relative",
            border: "6px solid #fff",
          }}>
            <img 
              src={profilePic} 
              alt="Sithmi Navodya" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
          </div>

          {/* Dashed orbit ring */}
          <div style={{
            position:"absolute", width:440, height:440, borderRadius:"50%",
            border:"1.5px dashed rgba(99,102,241,0.2)",
          }} />

          {/* Orbiting pills */}
          {orbitSkills.map((s, i) => {
            const angle = (360 / orbitSkills.length) * i;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * 220;
            const y = Math.sin(rad) * 220;
            return (
              <div key={s} style={{
                position:"absolute",
                left:"50%", top:"50%",
                transform:`translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                zIndex:3,
              }}>
                <div style={{
                  background:"#fff", border:"1.5px solid rgba(99,102,241,0.2)",
                  borderRadius:50, padding:"6px 16px",
                  fontFamily:"monospace", fontSize:12, fontWeight:700,
                  color:"#6366F1", whiteSpace:"nowrap",
                  boxShadow:"0 4px 20px rgba(0,0,0,0.08)",
                  animation:`float ${2.5 + i * 0.3}s ease-in-out ${i * 0.2}s infinite`,
                }}>
                  {s}
                </div>
              </div>
            );
          })}

          {/* Projects card — top right */}
          <div style={{
            position:"absolute", top:-10, right:-30,
            background:"linear-gradient(135deg,#6366F1,#8B5CF6)", borderRadius:14, padding:"12px 18px",
            boxShadow:"0 12px 32px rgba(99,102,241,0.3)", zIndex:3,
          }}>
            <p style={{ fontFamily:"DM Sans',sans-serif", fontSize:10, color:"rgba(255,255,255,0.6)", margin:"0 0 3px", textTransform:"uppercase", letterSpacing:"0.1em" }}>Projects</p>
            <p style={{ fontFamily:"'Syne',sans-serif", fontSize:24, color:"#fff", margin:0, fontWeight:800 }}>5 ✦</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   ABOUT — professional, grounded, no fluff
═══════════════════════════════════════════════ */
function About() {
  const skillGroups = [
    { cat: "Languages",  items: ["Java", "JavaScript", "TypeScript"] },
    { cat: "Frontend",   items: ["React", "Tailwind CSS", "JSP/Servlets", "HTML/CSS"] },
    { cat: "Backend",    items: ["Spring Boot", "Node.js", "Express", "REST APIs"] },
    { cat: "Database",   items: ["MongoDB", "MySQL" ,"PostgreSQL"] },
    { cat: "DevOps",     items: ["Docker", "Kubernetes", "Git"] },
    { cat: "Tools",      items: [ "Postman", "IntelliJ", "VS Code" ,"Eclipse"] },
  ];

  return (
    <div style={{ minHeight:"100vh", padding:"110px 3rem 80px", position:"relative", zIndex:1 }}>
      <div style={{ maxWidth:1160, margin:"0 auto" }}>

        {/* ── HEADER ── */}
        <div style={{ 
          marginBottom:"4rem", 
          animation:"fadeUp 0.6s ease both",
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: "4rem",
          alignItems: "center"
        }}>
          <div>
            <span style={{
              fontFamily:"monospace", fontSize:11, fontWeight:700, color:"#6366F1",
              letterSpacing:"0.18em", textTransform:"uppercase",
              background:"rgba(99,102,241,0.07)", border:"1px solid rgba(99,102,241,0.18)",
              borderRadius:50, padding:"5px 14px", display:"inline-block", marginBottom:"1.25rem",
            }}>About</span>
            <h2 style={{
              fontFamily:"'DM Sans',sans-serif", fontWeight:800,
              fontSize:"clamp(2.8rem,5.5vw,4.5rem)", lineHeight:1.0,
              letterSpacing:"-2.5px", color:"#0F0F0E", margin:"0 0 1.5rem",
            }}>
              Sithmi <br />
              <span style={{ color:"#6366F1" }}>Navodya</span>
            </h2>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:17, lineHeight:1.85, color:"#5A5856", maxWidth:600, margin:0 }}>
             Year 3 Software Engineering undergraduate at SLIIT, actively building full-stack web systems across academic and individual projects using Java, the MERN stack, and Spring Boot. I contribute across the entire development lifecycle — from database design and REST API development to frontend integration</p>
            <div style={{ marginTop: "2rem" }}>
              <a href="/Sithmi%20Navodya_resume.pdf" download="Sithmi_Navodya_CV.pdf" style={{
                display:"inline-flex", alignItems:"center", gap:8,
                background:"#0F0F0E", color:"#fff", border:"none",
                borderRadius:50, padding:"12px 28px", fontSize:14,
                fontFamily:"'DM Sans',sans-serif", fontWeight:700, textDecoration:"none",
                transition:"all 0.2s",
              }}
                onMouseEnter={e=>{e.currentTarget.style.background="#6366F1"; e.currentTarget.style.boxShadow="0 10px 30px rgba(99,102,241,0.35)";}}
                onMouseLeave={e=>{e.currentTarget.style.background="#0F0F0E"; e.currentTarget.style.boxShadow="none";}}>
                ↓ Download Full CV (PDF)
              </a>
            </div>
          </div>

          <div style={{
            width: "340px", height: "420px", borderRadius: 24,
            overflow: "hidden", position: "relative",
            boxShadow: "0 20px 40px rgba(99,102,241,0.15)",
            border: "1px solid rgba(162, 162, 175, 0.1)",
          }}>
            <img 
              src={profilePic} 
              alt="Sithmi Navodya" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
          </div>
        </div>

        {/* ── TWO-COL ── */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"start" }}>

          {/* LEFT — education + focus areas */}
          <div style={{ animation:"fadeUp 0.6s 0.1s ease both" }}>

            {/* Education card */}
            <div style={{
              background:"#0F0F0E", borderRadius:20, padding:"2rem",
              marginBottom:"1.5rem", position:"relative", overflow:"hidden",
            }}>
              <div style={{ position:"absolute", top:-40, right:-40, width:180, height:180, borderRadius:"50%", background:"rgba(99,102,241,0.12)" }} />
              <div style={{ position:"relative", zIndex:1 }}>
                <p style={{ fontFamily:"monospace", fontSize:10, color:"#444", textTransform:"uppercase", letterSpacing:"0.14em", fontWeight:700, margin:"0 0 1rem" }}>Education</p>
                <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:18, fontWeight:800, color:"#fff", margin:"0 0 4px", letterSpacing:"-0.5px" }}>BSc (Hons) Information Technology</p>
                <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"#666", margin:"0 0 1.25rem" }}>
                  Specialising in Software Engineering<br />Sri Lanka Institute of Information Technology · 2023–2027
                </p>
                <div style={{ display:"flex", gap:"1.5rem" }}>
                  <div>
                    <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:22, fontWeight:800, color:"#fff", margin:"0 0 2px", letterSpacing:"-1px" }}>3.3<span style={{ fontSize:13, color:"#444", fontFamily:"monospace", fontWeight:400 }}> / 4.0</span></p>
                    <p style={{ fontFamily:"DM Sans',sans-serif", fontSize:9, color:"#555", margin:0, textTransform:"uppercase", letterSpacing:"0.1em" }}>CGPA</p>
                  </div>
                  <div>
                    <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:22, fontWeight:800, color:"#fff", margin:"0 0 2px" }}>Year 3</p>
                    <p style={{ fontFamily:"DM Sans',sans-serif", fontSize:9, color:"#555", margin:0, textTransform:"uppercase", letterSpacing:"0.1em" }}>Current</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Focus areas — clean list, no self-aggrandising */}
            <div style={{ background:"#fff", border:"1px solid #ECEAE5", borderRadius:20, padding:"2rem" }}>
              <p style={{ fontFamily:"monospace", fontSize:10, color:"#999", textTransform:"uppercase", letterSpacing:"0.14em", fontWeight:700, margin:"0 0 1.25rem" }}>Areas of focus</p>
              <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
                {[
                  { area:"Full-Stack Web Development", note:"End-to-end systems using MERN and Spring Boot" },
                  { area:"RESTful API Design", note:"Structured, documented, and testable API architecture" },
                  { area:"Database Management", note:"Relational (MySQL) and non-relational (MongoDB)" },
                  { area:"Containerisation & DevOps", note:"Docker, Kubernetes, deployment workflows" },
                  { area:"Software Architecture", note:"MVC, microservices, clean layered design" },
                ].map((f, i, arr) => (
                  <div key={f.area} style={{
                    paddingTop: i === 0 ? 0 : "1rem",
                    paddingBottom: i < arr.length - 1 ? "1rem" : 0,
                    borderBottom: i < arr.length - 1 ? "1px solid #F4F2EE" : "none",
                  }}>
                    <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:600, color:"#0F0F0E", margin:"0 0 2px" }}>{f.area}</p>
                    <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color:"#AAA", margin:0 }}>{f.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — skills grouped */}
          <div style={{ animation:"fadeUp 0.6s 0.2s ease both" }}>
            <p style={{ fontFamily:"monospace", fontSize:10, color:"#999", textTransform:"uppercase", letterSpacing:"0.14em", fontWeight:700, margin:"0 0 1.25rem" }}>Technical skills</p>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.85rem" }}>
              {skillGroups.map(g => (
                <div key={g.cat} style={{
                  background:"#fff", border:"1px solid #ECEAE5", borderRadius:14,
                  padding:"1.1rem 1.4rem", display:"flex", alignItems:"baseline", gap:"1.25rem",
                  transition:"border-color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "#C7D2FE"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "#ECEAE5"}>
                  <span style={{
                    fontFamily:"monospace", fontSize:10, fontWeight:700, color:"#6366F1",
                    textTransform:"uppercase", letterSpacing:"0.1em",
                    minWidth:72, flexShrink:0,
                  }}>{g.cat}</span>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                    {g.items.map(s => (
                      <span key={s} style={{
                        background:"#F8F8F6", border:"1px solid #E8E5E0",
                        borderRadius:5, padding:"3px 10px", fontSize:12,
                        fontFamily:"monospace", color:"#444", fontWeight:700,
                        transition:"all 0.15s", cursor:"default",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background="#6366F1"; e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="#6366F1"; }}
                        onMouseLeave={e => { e.currentTarget.style.background="#F8F8F6"; e.currentTarget.style.color="#444"; e.currentTarget.style.borderColor="#E8E5E0"; }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PROJECTS — magazine bento grid, NO repeated text
═══════════════════════════════════════════════ */
function Projects() {
  const [hov, setHov] = useState<string | null>(null);

  const big = PROJECTS[0];
  const small = PROJECTS.slice(1);

  return (
    <div style={{ minHeight:"100vh", padding:"110px 3rem 80px", position:"relative", zIndex:1 }}>
      <div style={{ maxWidth:1160, margin:"0 auto" }}>

        {/* Header — minimal */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"3rem", animation:"fadeUp 0.6s ease both" }}>
          <h2 style={{
            fontFamily:"'DM Sans',sans-serif", fontSize:"clamp(2.5rem,5vw,4.5rem)",
            fontWeight:800, color:"#0F0F0E", letterSpacing:"-2.5px", margin:0,
          }}>Projects<span style={{ color:"#6366F1" }}>.</span></h2>
          <a href="https://github.com/SithmiNavodya" style={{
            fontFamily:"monospace", fontSize:13, fontWeight:700, color:"#6366F1",
            textDecoration:"none", display:"flex", alignItems:"center", gap:6,
            border:"1.5px solid rgba(99,102,241,0.25)", borderRadius:50, padding:"8px 20px",
            transition:"all 0.2s",
          }}
            onMouseEnter={e=>{e.currentTarget.style.background="#6366F1"; e.currentTarget.style.color="#fff";}}
            onMouseLeave={e=>{e.currentTarget.style.background="transparent"; e.currentTarget.style.color="#6366F1";}}>
            ⎇ All on GitHub →
          </a>
        </div>

        {/* BENTO GRID */}
        <div style={{ display:"grid", gridTemplateColumns:"1.4fr 1fr", gridTemplateRows:"auto auto", gap:"1.25rem", animation:"scaleIn 0.5s 0.1s ease both" }}>

          {/* BIG card — spans 2 rows */}
          <div
            onMouseEnter={() => setHov("01")}
            onMouseLeave={() => setHov(null)}
            style={{
              gridRow:"1 / 3",
              background: hov === "01" ? "#0F0F0E" : "#fff",
              border:`1.5px solid ${hov==="01" ? "#0F0F0E" : "#ECEAE5"}`,
              borderRadius:24, padding:"2.5rem",
              transition:"all 0.3s cubic-bezier(0.34,1.2,0.64,1)",
              transform: hov==="01" ? "scale(1.01)" : "scale(1)",
              boxShadow: hov==="01" ? "0 32px 80px rgba(0,0,0,0.15)" : "0 2px 16px rgba(0,0,0,0.04)",
              cursor:"default", position:"relative", overflow:"hidden",
            }}>
            {/* Background orb */}
            <div style={{
              position:"absolute", bottom:-60, right:-60,
              width:280, height:280, borderRadius:"50%",
              background: hov==="01" ? "rgba(99,102,241,0.15)" : "rgba(99,102,241,0.04)",
              transition:"background 0.3s",
            }} />
            <div style={{ position:"relative", zIndex:1 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"2rem" }}>
                <span style={{
                  fontFamily:"monospace", fontSize:10, fontWeight:700,
                  color: hov==="01" ? "rgba(255,255,255,0.3)" : "#CCC",
                  letterSpacing:"0.1em", textTransform:"uppercase",
                }}>{big.id} · {big.year}</span>
                <span style={{
                  background: hov==="01" ? "rgba(99,102,241,0.3)" : "rgba(99,102,241,0.08)",
                  border:`1px solid ${hov==="01" ? "rgba(99,102,241,0.5)" : "rgba(99,102,241,0.2)"}`,
                  borderRadius:50, padding:"3px 12px", fontSize:10,
                  fontFamily:"monospace", fontWeight:700,
                  color: hov==="01" ? "#A5B4FC" : "#6366F1",
                }}>{big.tag}</span>
              </div>
              <h3 style={{
                fontFamily:"'DM Sans',sans-serif", fontSize:26, fontWeight:800,
                color: hov==="01" ? "#fff" : "#0F0F0E",
                margin:"0 0 1rem", lineHeight:1.15, letterSpacing:"-0.8px",
              }}>{big.name}</h3>

              {/* Project Screenshot */}
              <div style={{
                width: "100%", height: 240, borderRadius: 16, overflow: "hidden",
                marginBottom: "1.5rem", border: `1px solid ${hov === "01" ? "rgba(255,255,255,0.1)" : "#eee"}`,
                background: hov === "01" ? "rgba(255,255,255,0.05)" : "#f9f9f9"
              }}>
                <img src={big.image} alt={big.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              <p style={{
                fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.75,
                color: hov === "01" ? "rgba(255,255,255,0.6)" : "#777",
                margin: "0 0 1.5rem",
              }}>{big.desc}</p>

              {/* Links */}
              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                {big.github && (
                  <a href={big.github} target="_blank" rel="noreferrer" style={{
                    textDecoration: "none", color: hov === "01" ? "#fff" : "#6366F1",
                    fontFamily: "monospace", fontSize: 13, fontWeight: 700,
                    display: "flex", alignItems: "center", gap: 6,
                    borderBottom: `1.5px solid ${hov === "01" ? "rgba(255,255,255,0.3)" : "rgba(99,102,241,0.2)"}`,
                    paddingBottom: 2, transition: "all 0.2s"
                  }}>
                    ⎇ GitHub
                  </a>
                )}
                {big.live && (
                  <a href={big.live} target="_blank" rel="noreferrer" style={{
                    textDecoration: "none", color: hov === "01" ? "#fff" : "#6366F1",
                    fontFamily: "monospace", fontSize: 13, fontWeight: 700,
                    display: "flex", alignItems: "center", gap: 6,
                    borderBottom: `1.5px solid ${hov === "01" ? "rgba(255,255,255,0.3)" : "rgba(99,102,241,0.2)"}`,
                    paddingBottom: 2, transition: "all 0.2s"
                  }}>
                    ✦ Live Demo
                  </a>
                )}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {big.stack.map(s => (
                  <span key={s} style={{
                    background: hov==="01" ? "rgba(255,255,255,0.08)" : "#F8F8F6",
                    border:`1px solid ${hov==="01" ? "rgba(255,255,255,0.12)" : "#E8E5E0"}`,
                    borderRadius:6, padding:"4px 11px", fontSize:11,
                    fontFamily:"monospace", color: hov==="01" ? "#A5B4FC" : "#555", fontWeight:700,
                  }}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* SMALL cards */}
          {small.map(p => (
            <div key={p.id}
              onMouseEnter={() => setHov(p.id)}
              onMouseLeave={() => setHov(null)}
              style={{
                background: hov===p.id ? p.accent : "#fff",
                border:`1.5px solid ${hov===p.id ? p.accent : "#ECEAE5"}`,
                borderRadius:20, padding:"1.75rem",
                transition:"all 0.25s cubic-bezier(0.34,1.2,0.64,1)",
                transform: hov===p.id ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hov===p.id ? `0 20px 48px ${p.accent}30` : "0 2px 12px rgba(0,0,0,0.03)",
                cursor:"default",
              }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"0.85rem" }}>
                <span style={{ fontFamily:"monospace", fontSize:10, fontWeight:700, color: hov===p.id ? "rgba(255,255,255,0.5)" : "#CCC", textTransform:"uppercase", letterSpacing:"0.1em" }}>
                  {p.id} · {p.year}
                </span>
                <span style={{
                  background: hov===p.id ? "rgba(255,255,255,0.2)" : "#F8F8F6",
                  border:`1px solid ${hov===p.id ? "rgba(255,255,255,0.3)" : "#E8E5E0"}`,
                  borderRadius:50, padding:"2px 10px", fontSize:10,
                  fontFamily:"monospace", fontWeight:700,
                  color: hov===p.id ? "#fff" : "#888",
                }}>{p.tag}</span>
              </div>
              <h3 style={{
                fontFamily:"'DM Sans',sans-serif", fontSize:16, fontWeight:800,
                color: hov===p.id ? "#fff" : "#0F0F0E",
                margin:"0 0 0.6rem", lineHeight:1.25, letterSpacing:"-0.3px",
              }}>{p.name}</h3>

              {/* Project Screenshot */}
              {p.image && (
                <div style={{
                  width: "100%", height: 180, borderRadius: 12, overflow: "hidden",
                  marginBottom: "1rem", border: `1px solid ${hov === p.id ? "rgba(255,255,255,0.15)" : "#eee"}`,
                  background: "#f9f9f9"
                }}>
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      objectPosition: "center"
                    }} 
                  />
                </div>
              )}

              <p style={{
                fontFamily: "'DM Sans',sans-serif", fontSize: 13, lineHeight: 1.65,
                color: hov === p.id ? "rgba(255,255,255,0.75)" : "#888",
                margin: "0 0 1rem",
              }}>{p.desc}</p>

              {/* Links */}
              <div style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem" }}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" style={{
                    textDecoration: "none", color: hov === p.id ? "#fff" : p.accent,
                    fontFamily: "monospace", fontSize: 11, fontWeight: 700,
                    display: "flex", alignItems: "center", gap: 5,
                    borderBottom: `1.2px solid ${hov === p.id ? "rgba(255,255,255,0.4)" : `${p.accent}40`}`,
                    paddingBottom: 1, transition: "all 0.2s"
                  }}>
                    ⎇ GitHub
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" style={{
                    textDecoration: "none", color: hov === p.id ? "#fff" : p.accent,
                    fontFamily: "monospace", fontSize: 11, fontWeight: 700,
                    display: "flex", alignItems: "center", gap: 5,
                    borderBottom: `1.2px solid ${hov === p.id ? "rgba(255,255,255,0.4)" : `${p.accent}40`}`,
                    paddingBottom: 1, transition: "all 0.2s"
                  }}>
                    ✦ Live Demo
                  </a>
                )}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {p.stack.map(s => (
                  <span key={s} style={{
                    background: hov===p.id ? "rgba(255,255,255,0.15)" : "#F8F8F6",
                    border:`1px solid ${hov===p.id ? "rgba(255,255,255,0.2)" : "#E8E5E0"}`,
                    borderRadius:4, padding:"2px 9px", fontSize:10,
                    fontFamily:"monospace", color: hov===p.id ? "#fff" : "#666", fontWeight:700,
                  }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   CONTACT — dark hero section style
═══════════════════════════════════════════════ */
function Contact() {
  const [form, setForm] = useState({ name:"", email:"", msg:"" });
  const [sent, setSent] = useState(false);
  const [foc, setFoc] = useState<string|null>(null);

  const inp = (k:string) => ({
    width:"100%", padding:"13px 16px",
    background: foc===k ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)",
    border:`1.5px solid ${foc===k ? "rgba(99,102,241,0.6)" : "rgba(255,255,255,0.1)"}`,
    borderRadius:12, fontSize:14, fontFamily:"'DM Sans',sans-serif",
    color:"#fff", outline:"none", boxSizing:"border-box" as const,
    transition:"all 0.2s",
  });

  return (
    <div style={{ minHeight:"100vh", padding:"110px 3rem 80px", position:"relative", zIndex:1 }}>
      <div style={{ maxWidth:1160, margin:"0 auto" }}>

        {/* Dark hero banner */}
        <div style={{
          background:"#0F0F0E", borderRadius:28,
          padding:"4rem", marginBottom:"3rem",
          position:"relative", overflow:"hidden",
          animation:"fadeUp 0.6s ease both",
        }}>
          {/* Orbs */}
          <div style={{ position:"absolute", top:-80, right:-80, width:320, height:320, borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.2) 0%,transparent 70%)" }} />
          <div style={{ position:"absolute", bottom:-80, left:200, width:280, height:280, borderRadius:"50%", background:"radial-gradient(circle,rgba(6,182,212,0.15) 0%,transparent 70%)" }} />

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"center", position:"relative", zIndex:1 }}>
            <div>
              <p style={{ fontFamily:"monospace", fontSize:11, color:"rgba(255,255,255,0.3)", textTransform:"uppercase", letterSpacing:"0.15em", fontWeight:700, margin:"0 0 1rem" }}>
                Let's connect
              </p>
              <h2 style={{
                fontFamily:"'DM Sans',sans-serif", fontSize:"clamp(2.5rem,5vw,4rem)",
                fontWeight:800, color:"#fff", letterSpacing:"-2.5px", margin:"0 0 1.25rem", lineHeight:1,
              }}>
                Ready to build<br />
                <span style={{ background:"linear-gradient(135deg,#6366F1,#06B6D4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  something great?
                </span>
              </h2>
              <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, lineHeight:1.7, color:"rgba(255,255,255,0.5)", margin:"0 0 2rem" }}>
                Internship enquiries, project collaborations, or just a chat about software — I'm all ears.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:"0.85rem" }}>
                {[
                  { label:"sithminavodya013@gmail.com", href:"mailto:sithminavodya013@gmail.com", icon:"✉" },
                  { label:"linkedin.com/in/navodya-thilakarathna", href:"https://www.linkedin.com/in/navodya-thilakarathna", icon:"in" },
                  { label:"github.com/SithmiNavodya", href:"https://github.com/SithmiNavodya", icon:"⎇" },
                ].map(l => (
                  <a key={l.label} href={l.href} style={{
                    display:"flex", alignItems:"center", gap:10,
                    fontFamily:"monospace", fontSize:13, color:"rgba(255,255,255,0.55)",
                    textDecoration:"none", transition:"color 0.15s",
                  }}
                    onMouseEnter={e=>e.currentTarget.style.color="#fff"}
                    onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.55)"}>
                    <span style={{
                      width:32, height:32, borderRadius:8, background:"rgba(255,255,255,0.07)",
                      display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, flexShrink:0,
                    }}>{l.icon}</span>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              {sent ? (
                <div style={{ textAlign:"center", padding:"3rem 0" }}>
                  <div style={{
                    width:64, height:64, borderRadius:"50%",
                    background:"linear-gradient(135deg,#10B981,#06B6D4)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    margin:"0 auto 1.25rem", fontSize:26, color:"#fff",
                  }}>✓</div>
                  <p style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:800, color:"#fff", margin:"0 0 6px" }}>Sent!</p>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"rgba(255,255,255,0.4)", margin:0 }}>I'll reply within 24 hours.</p>
                </div>
              ) : (
                <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                  <input placeholder="Your name" value={form.name}
                    onChange={e=>setForm({...form,name:e.target.value})}
                    onFocus={()=>setFoc("name")} onBlur={()=>setFoc(null)}
                    style={inp("name")} />
                  <input placeholder="your@email.com" type="email" value={form.email}
                    onChange={e=>setForm({...form,email:e.target.value})}
                    onFocus={()=>setFoc("email")} onBlur={()=>setFoc(null)}
                    style={inp("email")} />
                  <textarea placeholder="What are you working on?" rows={5} value={form.msg}
                    onChange={e=>setForm({...form,msg:e.target.value})}
                    onFocus={()=>setFoc("msg")} onBlur={()=>setFoc(null)}
                    style={{...inp("msg"), resize:"vertical"}} />
                  <button onClick={()=>{if(form.name&&form.email&&form.msg)setSent(true);}}
                    style={{
                      background:"linear-gradient(135deg,#6366F1,#8B5CF6)",
                      color:"#fff", border:"none", borderRadius:12, padding:"14px",
                      fontSize:14, fontFamily:"'DM Sans',sans-serif", fontWeight:700,
                      cursor:"pointer", width:"100%",
                      boxShadow:"0 8px 24px rgba(99,102,241,0.35)",
                      transition:"transform 0.15s, box-shadow 0.15s",
                    }}
                    onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 14px 36px rgba(99,102,241,0.45)";}}
                    onMouseLeave={e=>{e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 8px 24px rgba(99,102,241,0.35)";}}>
                    Send message →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0 0.5rem" }}>
          <p style={{ fontFamily:"DM Sans',sans-serif", fontSize:12, color:"#BBB", margin:0 }}>
            Sithmi Navodya Thilakarathna · SLIIT · 2023–2027
          </p>
          <p style={{ fontFamily:"monospace", fontSize:12, margin:0 }}>
            <span style={{ background:"linear-gradient(135deg,#6366F1,#06B6D4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontWeight:700 }}>
              Open to internships 🚀
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════ */
export default function Portfolio() {
  const [page, setPage] = useState<Page>("home");
  const go = (p: Page) => { setPage(p); window.scrollTo({ top: 0, behavior:"smooth" }); };

  const map: Record<Page, React.ReactNode> = {
    home: <Home go={go} />,
    about: <About />,
    projects: <Projects />,
    contact: <Contact />,
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,400;0,600;0,700&display=swap" rel="stylesheet" />
      <div style={{ background:"#FAFAF8", minHeight:"100vh", color:"#0F0F0E" }}>
        <CursorGlow />
        <Nav page={page} go={go} />
        <div key={page} style={{ animation:"scaleIn 0.35s ease both" }}>
          {map[page]}
        </div>
      </div>
    </>
  );
}
