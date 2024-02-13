import { config } from '@/config/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export type Indicator = {
  codigo: string;
  nombre: string;
}
const baseUrl = config.HTTPS.URL_BASE_BACK;

export const indicatorsApi = createApi({
  reducerPath: 'indicatorsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/'
  }),
  endpoints: (builder) => ({
    getInidcators: builder.query<Indicator[], null>({
      query: () => ''
    }),
    getInidcatorsById: builder.query<Indicator, { codigo: string }> ({
      query: ({ codigo }) => `/${codigo}`
    })
  })}
)

export const {useGetInidcatorsQuery, useGetInidcatorsByIdQuery }= indicatorsApi