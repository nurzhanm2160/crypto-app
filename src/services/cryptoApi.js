import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '11266ebbc9msh0313951ca148de7p1b3ff4jsn5c332cb7092d',
}

const baseUrl ='https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://coinranking1.p.rapidapi.com/'
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('coins')
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi
