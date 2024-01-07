import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import "@/styles/globals.scss";


export default function App({Component, pageProps}: AppProps) {
    return <><ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        progressStyle={{
            color: 'red',
        }}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
    /> <Component {...pageProps} /></>
}
