import './globals.css';
import { Inter } from 'next/font/google';
import ReduxStoreProvider from '@/store/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Weather-App',
	description: 'Weather-App',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ReduxStoreProvider>{children}</ReduxStoreProvider>
			</body>
		</html>
	);
}
