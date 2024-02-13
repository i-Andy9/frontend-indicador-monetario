import { currencySlice } from "@/interface/interfaceApiRest";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const currencyApi = createApi({
    reducerPath: 'currencyAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://umusk4hnac.execute-api.us-east-1.amazonaws.com/'
    }),
    endpoints: (builder) => ({
        getCurrencys: builder.query<currencySlice[],null>({
            query: () => 'indicadores'
        }),
        getCurrencyById: builder.query<currencySlice,{codigo:string}>({
            query: ({codigo}) => `indicadores/${codigo}`
        })

    })
})

const {useGet}=currencyApi

