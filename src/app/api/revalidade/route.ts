import { PROFILE_CACHE_KEY } from "@/actions/profile/get-profile";
import { PROJECTS_CACHE_KEY } from "@/actions/projects/get-projects";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token || token !== process.env.REVALIDATE_TOKEN) {
    return new Response(null, { status: 403 });
  }

  revalidateTag(PROFILE_CACHE_KEY);
  revalidateTag(PROJECTS_CACHE_KEY);

  return new Response(null, { status: 204 });
}
