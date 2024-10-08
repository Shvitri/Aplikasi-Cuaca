import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { SkeletonDashboard } from '../components/SkeletonDashboard';
import { refreshOutline } from 'ionicons/icons';
import { CurrentWeather } from '../components/CurrentWeather';
import './Tab1.css';

interface CuacaSaatIni {
  lokasi: {
    kota: string;
    negara: string;
  };
  cuaca: {
    suhu: number;
    angin: number;
    deskripsi: string;
    ikon: string;
    indexUV: number;
    sunrise: number;
    sunset: number;
  };
}

const Tab1: React.FC = () => {
  const [cuacaSaatIni, setCuacaSaatIni] = useState<CuacaSaatIni | null>(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const capitalizeEachWord = (str: string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const fetchWeather = async () => {
    setCuacaSaatIni(null);
    const coords = {
      latitude: 1.4748,
      longitude: 124.8421,
    };

    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=cd7f5710c36d0d782c5f2bcf59a256a9&units=metric&lang=id`);
    const weatherData = await weatherResponse.json();

    const uvResponse = await fetch(`https://api.openweathermap.org/data/2.5/uvi?lat=${coords.latitude}&lon=${coords.longitude}&appid=cd7f5710c36d0d782c5f2bcf59a256a9`);
    const uvData = await uvResponse.json();

    const countryCode = weatherData.sys.country;
    const countryResponse = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    const countryData = await countryResponse.json();
    const countryName = countryData[0]?.name?.common || countryCode;

    setCuacaSaatIni({
      lokasi: {
        kota: 'Manado',
        negara: `${countryName}`,
      },
      cuaca: {
        suhu: Math.round(weatherData.main.temp),
        angin: weatherData.wind.speed,
        deskripsi: capitalizeEachWord(weatherData.weather[0].description),
        ikon: weatherData.weather[0].icon,
        indexUV: uvData.value,
        sunrise: weatherData.sys.sunrise,
        sunset: weatherData.sys.sunset,
      },
    });
  };

  return (
    <IonPage className="tab1-weather-page">
      <IonHeader>
        <IonToolbar className="tab1-header-toolbar">
          <IonTitle className="tab1-header-title">Ni Made Shavitri - Aplikasi Cuaca</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={fetchWeather} className="tab1-refresh-button">
              <IonIcon icon={refreshOutline} className="tab1-refresh-icon" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="tab1-weather-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="tab1-header-large">
              Dashboard
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="tab1-weather-card">{cuacaSaatIni ? <CurrentWeather cuacaSaatIni={cuacaSaatIni} /> : <SkeletonDashboard />}</div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
