import {NextResponse} from "next/server";
import {fetchRepos} from "@/lib/github";

export async function GET() {
  try {
    const repos = await fetchRepos("duygualtunaay");
    return NextResponse.json({repos});
  } catch (e) {
    return NextResponse.json({error: "failed"}, {status: 500});
  }
}
