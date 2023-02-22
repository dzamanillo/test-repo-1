import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [variable, setVariable] = useState(process.env.NEXT_PUBLIC_TEST);

	useEffect(() => {
		setVariable(process.env.NEXT_PUBLIC_TEST);
	}, []);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1>This is Test-Repo-1</h1>
				<p>This is the stage branch</p>
				<p>test</p>
				{variable === "true" ? <p>It is true</p> : <p>It is false</p>}
			</main>
		</>
	);
}
