import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import SideBar from './SideBar';
import { useGetInidcatorsQuery } from '@/redux/services/apiRest';
import { useAppDispatch } from '@/redux/hooks';
import { updateList } from '@/redux/features/currencySlice';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();

  const { data: indicatorsData, error, isLoading, isFetching, refetch } = useGetInidcatorsQuery(null);
let flag = false;
  // Dispatch de la acción updateList con los datos de los indicadores como argumento
   if (isLoading || isFetching || !indicatorsData || indicatorsData.length < 1) {
    flag= true
   }
console.log(indicatorsData)
  return (
    <>
      <Head>
        <title>CRM - Bolsa de valores</title>
      </Head>

      <div className='bg-gray-400 min-h-screen'>
        <div className="flex min-h-screen"> 
          <SideBar 
            indicatorsData={indicatorsData} 
            isLoading={flag}
          />
          <main className='bg-gray-100 sm:w-3/4 xl:w-5/6 sm:min-h-screen p-5'>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;
