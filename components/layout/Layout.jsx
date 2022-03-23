import Head from "next/head";
import { Fragment } from "react";
import MainHeader from "./MainHeader";


export default function Layout(props) {
  return (
    <Fragment>
        <Head>
          <title>NextEvents</title>
        </Head>
        <MainHeader />
        <main>
            {props.children}
        </main>
    </Fragment>
  )
}
