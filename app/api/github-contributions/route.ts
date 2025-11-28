import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get("username")

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 })
  }

  if (!process.env.GITHUB_TOKEN) {
    return NextResponse.json(
      {
        error: "GitHub token not configured",
        message:
          "To display your GitHub contributions, please add your GitHub Personal Access Token to the environment variables.",
        setupUrl: "https://github.com/settings/tokens",
        mockData: true,
        totalContributions: 1847,
        weeks: generateMockWeeks(),
      },
      { status: 200 }, // Return 200 with mock data instead of error
    )
  }

  try {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  contributionLevel
                }
              }
            }
          }
        }
      }
    `

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error("[v0] GitHub API error:", errorBody)
      throw new Error("Failed to fetch from GitHub API")
    }

    const data = await response.json()

    if (data.errors) {
      console.error("[v0] GitHub API errors:", data.errors)
      throw new Error(data.errors[0]?.message || "GitHub API error")
    }

    const contributionData = data.data?.user?.contributionsCollection?.contributionCalendar

    if (!contributionData) {
      throw new Error("No contribution data found")
    }

    return NextResponse.json({
      totalContributions: contributionData.totalContributions,
      weeks: contributionData.weeks,
      mockData: false,
    })
  } catch (error) {
    console.error("[v0] Error fetching GitHub contributions:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch GitHub contributions",
        details: error instanceof Error ? error.message : "Unknown error",
        mockData: true,
        totalContributions: 1847,
        weeks: generateMockWeeks(),
      },
      { status: 200 }, // Return 200 with mock data as fallback
    )
  }
}

function generateMockWeeks() {
  const weeks = []
  const today = new Date()
  const oneYearAgo = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000)

  const currentDate = new Date(oneYearAgo)
  let week: any[] = []

  while (currentDate <= today) {
    const dayOfWeek = currentDate.getDay()

    const contributionCount = Math.floor(Math.random() * 15)
    let contributionLevel: "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE"

    if (contributionCount === 0) {
      contributionLevel = "NONE"
    } else if (contributionCount < 4) {
      contributionLevel = "FIRST_QUARTILE"
    } else if (contributionCount < 8) {
      contributionLevel = "SECOND_QUARTILE"
    } else if (contributionCount < 12) {
      contributionLevel = "THIRD_QUARTILE"
    } else {
      contributionLevel = "FOURTH_QUARTILE"
    }

    week.push({
      date: currentDate.toISOString().split("T")[0],
      contributionCount,
      contributionLevel,
    })

    if (dayOfWeek === 6 || currentDate.getTime() === today.getTime()) {
      weeks.push({ contributionDays: week })
      week = []
    }

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return weeks
}
