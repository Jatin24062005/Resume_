"use client"

import { useEffect, useState } from "react"

interface ContributionDay {
  date: string
  contributionCount: number
  contributionLevel: "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE"
}

interface Week {
  contributionDays: ContributionDay[]
}

export function GitHubContributions({ username }: { username: string }) {
  const [weeks, setWeeks] = useState<Week[]>([])
  const [totalContributions, setTotalContributions] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isMockData, setIsMockData] = useState(false)

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        setError(null);
  
        const response = await fetch(`/api/github-contributions?username=${username}`);
        const data = await response.json();
  
        if (data.mockData) {
          setIsMockData(true);
  
          if (data.error === "GitHub token not configured") {
            setError(
              "GitHub token not configured. Add your Personal Access Token to environment variables to see real data."
            );
          }
        }
  
        setTotalContributions(data.totalContributions);
        setWeeks(data.weeks);
      } catch (err) {
        console.error("[v0] Error loading contributions:", err);
        setError(err instanceof Error ? err.message : "Failed to load contributions");
      } finally {
        setLoading(false);
      }
    };
  
    // fetch immediately
    fetchContributions();
  
    // refresh every 1 minute (60000 ms)
    const interval = setInterval(() => {
      fetchContributions();
    }, 6000);
  
    // cleanup on unmount or username change
    return () => clearInterval(interval);
  
  }, [username]);
  

  const getLevelColor = (level: string) => {
    switch (level) {
      case "NONE":
        return "bg-[#0d1117] dark:bg-[#0d1117] border border-[#30363d]"
      case "FIRST_QUARTILE":
        return "bg-[#0e4429] dark:bg-[#0e4429]"
      case "SECOND_QUARTILE":
        return "bg-[#006d32] dark:bg-[#006d32]"
      case "THIRD_QUARTILE":
        return "bg-[#26a641] dark:bg-[#26a641]"
      case "FOURTH_QUARTILE":
        return "bg-[#39d353] dark:bg-[#39d353]"
      default:
        return "bg-[#0d1117] dark:bg-[#0d1117] border border-[#30363d]"
    }
  }

  if (loading) {
    return (
      <div className="w-full rounded-lg border border-border bg-card p-4">
        <div className="flex items-center justify-center py-8">
          <div className="text-sm text-muted-foreground">Loading contributions...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full rounded-lg border border-border bg-card p-4">
        <div className="flex flex-col items-center justify-center gap-3 py-8">
          <div className="text-sm text-destructive">{error}</div>
          <a
            href="https://github.com/settings/tokens"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-500 hover:underline"
          >
            Create GitHub Personal Access Token →
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full rounded-lg border border-border bg-card p-4">
      {isMockData && (
        <div className="mb-3 rounded bg-yellow-500/10 p-2 text-xs text-yellow-700 dark:text-yellow-400">
          Showing sample data. Add your GitHub token to see real contributions.
        </div>
      )}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{totalContributions} contributions in the last year</span>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="size-2.5 rounded-sm bg-[#0d1117] dark:bg-[#0d1117] border border-[#30363d]" />
            <div className="size-2.5 rounded-sm bg-[#0e4429] dark:bg-[#0e4429]" />
            <div className="size-2.5 rounded-sm bg-[#006d32] dark:bg-[#006d32]" />
            <div className="size-2.5 rounded-sm bg-[#26a641] dark:bg-[#26a641]" />
            <div className="size-2.5 rounded-sm bg-[#39d353] dark:bg-[#39d353]" />
          </div>
          <span>More</span>
        </div>
      </div>
      <div className="flex gap-[3px] overflow-x-auto">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[3px]">
            {week.contributionDays.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`size-[10px] rounded-sm ${getLevelColor(day.contributionLevel)} transition-all duration-200 hover:ring-2 hover:ring-white/50`}
                title={`${day.contributionCount} contributions on ${day.date}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
