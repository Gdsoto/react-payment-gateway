// Libs
import type { Metadata } from 'next';

// Assets
import { Inter } from 'next/font/google';

// Styles
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Payment App',
	description: 'Example payment app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
