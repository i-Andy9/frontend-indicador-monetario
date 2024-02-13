import { Provider } from 'react-redux';
import Layout from './../components/Layout'
import { store } from '@/redux/store';

export default function Index() {
  
  return (
    <Provider store={store}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        {/* Reemplaza la etiqueta <script> con next/script */}
        <script src="https://cdn.tailwindcss.com" />
      <Layout>
        <div></div>
      </Layout>
    </Provider>
  );
}