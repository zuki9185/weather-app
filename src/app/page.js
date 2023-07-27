import WeatherInfo from '@/components/WeatherInfo';
import WeatherSearch from '@/components/WeatherSearch';

export default function Home() {
	return (
		<main className='main-section'>
			<h1 className='app-heading'>Weather App</h1>
			<WeatherSearch />
			<WeatherInfo />
		</main>
	);
}
