import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Photo } from "types/post.type";

export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: (build) => ({
        getPosts: build.query<Photo[], void>({
            query: () => `/photos?_page=1&limit=10`
        }),
    }),
});

export const { useGetPostsQuery } = postApi;
