import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: "whji8163",
    dataset: "production"
});