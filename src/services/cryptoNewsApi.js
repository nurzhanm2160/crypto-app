import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/'

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '11266ebbc9msh0313951ca148de7p1b3ff4jsn5c332cb7092d',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi