import { fetchRepositoryContents } from "@/lib/github-api";
import { unstable_cache } from "next/cache";
import { TProfile, profileSchema } from "./profile-schema";

const PROFILE_FILE_NAME = "profile.json";
export const PROFILE_CACHE_KEY = `profile-${process.env.GITHUB_USERNAME}`;

export type ProfileResponse =
  | {
      error: string;
    }
  | TProfile;

const fetchProfile = async (): Promise<ProfileResponse> => {
  if (!process.env.GITHUB_USERNAME) {
    return {
      error: "GITHUB_USERNAME is required",
    };
  }

  const contentsData = await fetchRepositoryContents(
    process.env.GITHUB_USERNAME,
    process.env.GITHUB_USERNAME,
  );

  if ("message" in contentsData || contentsData.length === 0) {
    return {
      error: "Contents not found",
    };
  }

  const profile = contentsData.find((item) => item.name === PROFILE_FILE_NAME);

  if (!profile) {
    return {
      error: "Profile not found",
    };
  }

  const profileResponse = await fetch(profile.download_url, {
    cache: "no-store",
  });

  const profileData = await profileResponse.json();

  const profileDataParsed = profileSchema.safeParse(profileData);

  if (!profileDataParsed.success) {
    return {
      error: "Invalid profile data",
    };
  }

  return profileDataParsed.data;
};

const getCachedProfile = unstable_cache(
  fetchProfile,
  [PROFILE_CACHE_KEY],
  { revalidate: 60 * 60 * 24 }, // 24 hours
);

export async function getProfile(): Promise<ProfileResponse> {
  return getCachedProfile();
}
