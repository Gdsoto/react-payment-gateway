// Libs
import type { Metadata } from 'next';

// Styles
import './globals.scss';
import { inter } from '@/utils/declareFonts';

// Components
import BaseLayout from '@/components/layouts/BaseLayout';

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
			<body className={inter.className}>
				<BaseLayout>{children}</BaseLayout>
			</body>
		</html>
	);
}
