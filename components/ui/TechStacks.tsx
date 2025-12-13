import Marquee from "react-fast-marquee";

export default function TechStacks() {
  const tech = [
    { name: "Node", icon: "nodejs/nodejs-plain.svg" },
    { name: "Express", icon: "express/express-original.svg" },
    { name: "Java", icon: "java/java-original-wordmark.svg" },
    { name: "Laravel", icon: "laravel/laravel-original.svg" },
    { name: "JavaScript", icon: "javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "typescript/typescript-original.svg" },
    { name: "Nextjs", icon: "nextjs/nextjs-original.svg" },
    { name: "React", icon: "react/react-original.svg" },
    { name: "Redux", icon: "redux/redux-original.svg" },
    { name: "Angular", icon: "angular/angular-original.svg" },
    { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "mysql/mysql-original.svg" },
    { name: "Firebase", icon: "firebase/firebase-plain.svg" },
    { name: "Supabase", icon: "supabase/supabase-original.svg" },
    { name: "Tailwind", icon: "tailwindcss/tailwindcss-original.svg" },
    { name: "Material UI", icon: "materialui/materialui-plain.svg" },
    { name: "Bootstrap", icon: "bootstrap/bootstrap-original-wordmark.svg" },
    { name: "GIT", icon: "git/git-original.svg" },
    { name: "Github", icon: "github/github-original.svg" },
  ];

  // Devicons using CDN
  const deviconCDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

  return (
    <Marquee speed={40} pauseOnHover direction="left" gradient={false}>
      <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        {tech.map((t, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: "80px",
            }}
          >
            <img
              src={deviconCDN + t.icon}
              alt={t.name}
              width="55"
              height="55"
              style={{ objectFit: "contain" }}
            />
            <span style={{ marginTop: "8px", fontSize: "14px" }}>{t.name}</span>
          </div>
        ))}
        {/* Spacer at the end to prevent overlap */}
        <div style={{ minWidth: "5px" }}></div>
      </div>
    </Marquee>
  );
}
