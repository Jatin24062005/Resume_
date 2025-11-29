import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  Twitter,
  FileText,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { GitHubContributions } from "@/components/github-contributions";

export default function PortfolioPage() {
  return (
    <main className="relative mx-auto w-full scroll-my-12 overflow-auto p-4 md:p-16 bg-background">
      <section className="mx-auto w-full max-w-2xl space-y-8">
        {/* Header Section */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">
              Jatin
              <Link href="mailto:jatin04072005@gmail.com">
                <Badge
                  variant="secondary"
                  className="ml-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                >
                  Hire Me!
                </Badge>
              </Link>
            </h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              Full Stack Developer and DevOps Engineer focused on learning
              through experimentation and product development.
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <Link
                href="https://www.google.com/maps/place/Delhi"
                target="_blank"
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline transition-all duration-200"
              >
                <Globe className="size-3" />
                New Delhi, Gurugram
              </Link>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground">
              <Button
                size="icon"
                variant="outline"
                asChild
                className="transition-all duration-300 hover:scale-110 hover:bg-accent hover:rotate-6 bg-transparent"
              >
                <Link href="mailto:jatin04072005@gmail.com">
                  <Mail className="size-4" />
                </Link>
              </Button>
              <Button
                size="icon"
                variant="outline"
                asChild
                className="transition-all duration-300 hover:scale-110 hover:bg-accent hover:-rotate-6 bg-transparent"
              >
                <Link href="tel:+918130143138">
                  <Phone className="size-4" />
                </Link>
              </Button>
              <Button
                size="icon"
                variant="outline"
                asChild
                className="transition-all duration-300 hover:scale-110 hover:bg-accent hover:rotate-6 bg-transparent"
              >
                <Link href="https://github.com/Jatin24062005" target="_blank">
                  <Github className="size-4" />
                </Link>
              </Button>
              <Button
                size="icon"
                variant="outline"
                asChild
                className="transition-all duration-300 hover:scale-110 hover:bg-accent hover:-rotate-6 bg-transparent"
              >
                <Link href="https://linkedin.com/in/jatinsfe" target="_blank">
                  <Linkedin className="size-4" />
                </Link>
              </Button>
              <Button
                size="icon"
                variant="outline"
                asChild
                className="transition-all duration-300 hover:scale-110 hover:bg-accent hover:rotate-6 bg-transparent"
              >
                <Link href="https://x.com/Jatin_Code" target="_blank">
                  <Twitter className="size-4" />
                </Link>
              </Button>
              <Button
                size="icon"
                variant="outline"
                asChild
                className="transition-all duration-300 hover:scale-110 hover:bg-accent hover:-rotate-6 bg-transparent"
              >
                <Link
                  href="https://drive.google.com/file/d/1RhUOmZYX0BzLzuJ64riEfURGKYAWvBEN/view"
                  target="_blank"
                >
                  <FileText className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <Avatar className="size-28 rounded-lg transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-xl">
            <AvatarImage
              src="/square-image_1.jpg"
              alt="Jatin Kashyap"
            />
            <AvatarFallback>JK</AvatarFallback>
          </Avatar>
        </div>

        <GitHubContributions username="Jatin24062005" />

        {/* About Me */}
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">About Me</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground leading-relaxed">
            Passionate Software Developer with a strong foundation in full-stack
            development and DevOps practices. Proven track record in designing
            and implementing scalable, resilient, and user-centric applications.
            Adept at leveraging modern technologies to solve complex problems
            and deliver impactful solutions. Currently enrolled in Cohort 3.0
            under Harkirat, while learning Solana and Ethereum wallet
            development.
          </p>
        </section>

        {/* Work Experience */}
        {/* Work Experience */}
        {/* Work Experience */}
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Work Experience</h2>

          {/* Yatiken Software Solution */}
          {/* Yatiken Software Solution */}
          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2">
                <CardTitle className="text-base">
                  <Link
                    href="https://www.yatiken.com/"
                    target="_blank"
                    className="inline-flex items-center gap-1.5 hover:underline transition-all duration-200"
                  >
                    Yatiken Software Solution
                    <ExternalLink className="size-3.5" />
                  </Link>
                  <Badge variant="secondary" className="ml-2">
                    Software Developer
                  </Badge>
                  <Badge variant="secondary" className="ml-1">
                    On-site
                  </Badge>
                </CardTitle>
                <span className="text-sm tabular-nums text-muted-foreground">
                  Aug 2025 – Present
                </span>
              </div>
              <CardDescription className="font-mono text-sm">
                Product Development & Deployment
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="text-pretty font-mono text-xs text-muted-foreground list-disc ml-4 space-y-1">
                <li>
                  Developed and deployed{" "}
                  <Link
                    href="https://doorships.in"
                    target="_blank"
                    className="underline hover:text-primary transition-colors"
                  >
                    DoorShips.in
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://amiprint.in"
                    target="_blank"
                    className="underline hover:text-primary transition-colors"
                  >
                    AmiPrints.in
                  </Link>{" "}
                  from scratch using Node.js, React.js, and MongoDB — 100%
                  production-ready.
                </li>

                <li>
                  Integrated WhatsApp API notifications and automated workflows,
                  improving user engagement by <strong>35%</strong> and reducing
                  manual communication by <strong>60%</strong>.
                </li>

                <li>
                  Implemented Docker-based CI/CD pipelines, achieving{" "}
                  <strong>40% faster deployments</strong> and
                  <strong>25% higher system efficiency</strong> during scaling.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Processing Foundation */}
          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2">
                <CardTitle className="text-base">
                  <Link
                    href="https://github.com/processing/p5.js-web-editor/issues?q=is%3Apr+author%3A@me"
                    target="_blank"
                    className="inline-flex items-center gap-1.5 hover:underline transition-all duration-200"
                  >
                    Processing Foundation
                    <ExternalLink className="size-3.5" />
                  </Link>
                  <Badge variant="secondary" className="ml-2">
                    Open Source Contributor
                  </Badge>
                </CardTitle>
                <span className="text-sm tabular-nums text-muted-foreground">
                  Jan 2025 – Apr 2025
                </span>
              </div>
              <CardDescription className="font-mono text-sm">
                p5.js Web Editor – Open Source Contribution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-pretty font-mono text-xs text-muted-foreground">
                Contributed to 8+ PRs (Redux refactor, Docker fixes,
                accessibility, auto-save). Reviewed PRs, triaged issues,
                discussed designs with maintainers, and proposed ideas later
                submitted as a GSoC 2025 project.
              </p>
            </CardContent>
          </Card>

          {/* ShipDuniya */}
          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2">
                <CardTitle className="text-base">
                  <Link
                    href="https://shipduniya.in/"
                    target="_blank"
                    className="inline-flex items-center gap-1.5 hover:underline transition-all duration-200"
                  >
                    ShipDuniya
                    <ExternalLink className="size-3.5" />
                  </Link>
                  <Badge variant="secondary" className="ml-2">
                    Full Stack Developer
                  </Badge>
                </CardTitle>
                <span className="text-sm tabular-nums text-muted-foreground">
                  Apr 2025 – Aug 2025
                </span>
              </div>
              <CardDescription className="font-mono text-sm">
                Logistics Platform – SaaS Development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-pretty font-mono text-xs text-muted-foreground">
                Built a full-stack logistics platform with AWB & shipping label
                generation, courier API integration, and admin dashboard.
                Developed REST APIs (Node.js, Express), improving data
                processing speed by 25%. Deployed to production at shipduniya.in
                handling end-to-end shipments.
              </p>
            </CardContent>
          </Card>

          {/* 100xDevs */}
          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2">
                <CardTitle className="text-base">
                  <Link
                    href="https://app.100xdevs.com/"
                    target="_blank"
                    className="inline-flex items-center gap-1.5 hover:underline transition-all duration-200"
                  >
                    100xDevs Cohort 3.0
                    <ExternalLink className="size-3.5" />
                  </Link>
                  <Badge variant="secondary" className="ml-2">
                    Open Source Developer
                  </Badge>
                </CardTitle>
                <span className="text-sm tabular-nums text-muted-foreground">
                  Aug 2024 – Dec 2025
                </span>
              </div>
              <CardDescription className="font-mono text-sm">
                MERN Stack Practice & Collaboration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-pretty font-mono text-xs text-muted-foreground">
                Collaborated on real-world MERN projects, strengthened
                Git/GitHub workflows, debugging techniques, testing, and
                component design. Completed weekly challenges & code reviews;
                presented at the World Conference on Computational Intelligence.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "TypeScript",
              "React/Next.js",
              "Node.js/Express.js",
              "Java",
              "SQL/NoSQL",
              "DataStructures/Algorithms",
              "BlockChain/Web3",
              "DevOps/Cloud",
              "Touch Typing → 60wpm",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "BetterUptime",
                url: "https://betteruptime-web.vercel.app/",
                description:
                  "API monitoring platform where users register, add websites, and receive alerts on downtime. Built with real-time health checks, email & SMS notifications using Nodemailer.",
                tags: [
                  "TurboRepo",
                  "Node.js",
                  "Express.js",
                  "Prisma",
                  "Docker",
                  "Nodemailer",
                  "API Monitoring",
                ],
              },
              {
                title: "ShipDuniya",
                url: "https://shipduniya.in/",
                description:
                  "A full-stack logistics platform with AWB generation, label printing, courier API integration, and an admin dashboard. Used in real-world shipping with full backend automation and PM2 on GCP.",
                tags: [
                  "Full Stack",
                  "Node.js",
                  "Express.js",
                  "React",
                  "MongoDB",
                  "Docker",
                  "GCP",
                  "PM2",
                ],
              },

              {
                title: "Recap.AI",
                url: "https://recap-ai-omega.vercel.app/",
                description:
                  "A powerful automation bot that joins Google Meet sessions, records and transcribes audio. Built to automate meeting summarization with browser control via Selenium.",
                tags: [
                  "Node.js",
                  "Selenium",
                  "Whisper AI",
                  "ffmpeg",
                  "MongoDB",
                  "REST API",
                  "Next.js",
                ],
              },
              {
                title: "Jobify",
                url: "https://jobify-nbw1.onrender.com/",
                description:
                  "A full-stack MERN application for users to find job opportunities, post job listings, and connect employers with potential employees.",
                tags: [
                  "MERN Stack",
                  "Job Portal",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "React",
                  "Redux",
                ],
              },
              {
                title: "iPhone 3D",
                url: "https://phone-15.netlify.app",
                description:
                  "A visually stunning 3D representation of Apple's iPhone, created using GSAP, Three.js, React, Tailwind CSS, and JavaScript.",
                tags: [
                  "3D Frontend",
                  "GSAP",
                  "Three.js",
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "Animation",
                ],
              },
              {
                title: "Cravee",
                url: "https://cravee.vercel.app/",
                description:
                  "A full-stack MERN application for food ordering. It features intuitive UI and seamless functionality for food lovers.",
                tags: [
                  "Full Stack",
                  "MERN",
                  "MongoDB",
                  "React",
                  "Node.js",
                  "Express.js",
                  "Redux Toolkit",
                ],
              },
              // {
              //   title: "Web3 Wallet",
              //   url: "https://web-wallet.netlify.app/",
              //   description:
              //     "A secure Web3-based wallet application for generating mnemonics and displaying account balances. Built using React, ethers.js, Web3.js, and Tailwind CSS.",
              //   tags: ["Web3", "Ethers.js", "Web3.js", "React", "Tailwind CSS", "Crypto", "Mnemonic"],
              // },
              // {
              //   title: "Asset.org Front-End Demo",
              //   url: "https://assets-org-front-end-demo.vercel.app/",
              //   description:
              //     "A front-end demo project to showcase the potential UI for Asset.org, Built using React, Tailwind CSS, and modern JavaScript.",
              //   tags: ["Front-End", "React", "Tailwind CSS", "JavaScript", "UI/UX", "Asset Management"],
              // },
            ].map((project) => (
              <Card
                key={project.title}
                className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 hover:border-primary/50 group"
              >
                <CardHeader>
                  <CardTitle className="text-base">
                    <Link
                      href={project.url}
                      target="_blank"
                      className="inline-flex items-center gap-1 hover:underline transition-all duration-200 group-hover:text-primary"
                    >
                      {project.title}
                      <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    </Link>
                  </CardTitle>
                  <CardDescription className="font-mono text-xs line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px] transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Education</h2>

          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2">
                <CardTitle className="text-base">
                  University School Of Information Communication & Technology
                </CardTitle>
                <span className="text-sm tabular-nums text-muted-foreground">
                  2023 - 2027
                </span>
              </div>
              <CardDescription className="font-mono text-sm">
                Bachelor of Technology in Computer Science Engineering
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2">
                <CardTitle className="text-base">
                  SBV East Vinod Nagar, Delhi – 110091
                </CardTitle>
                <span className="text-sm tabular-nums text-muted-foreground">
                  2023
                </span>
              </div>
              <CardDescription className="font-mono text-sm">
                Class XII – CBSE Board, Scored 79%
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </section>
    </main>
  );
}
