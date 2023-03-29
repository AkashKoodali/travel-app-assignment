import { createClient, createCurrentUserHook } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config);

// set up a helper function for generating image urls only for the asset reference data in your document
export const urlFor = (source) => createImageUrlBuilder(config).image(source);