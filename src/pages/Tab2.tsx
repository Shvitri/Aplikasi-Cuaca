import { IonButton, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { searchOutline } from 'ionicons/icons';
import { CurrentWeather } from '../components/CurrentWeather';
import './Tab2.css';

interface CuacaSaatIni {
  lokasi: {
    kota: string;
    negara: string;
    waktu: string;
  };
  cuaca: {
    suhu: number;
    angin: number;
    kelembapan: number;
    deskripsi: string;
    ikon: string;
    indexUV: number;
    sunrise: number;
    sunset: number;
  };
}

const Tab2: React.FC = () => {
  const [cari, setCari] = useState('');
  const [cuacaSaatIni, setCuacaSaatIni] = useState<CuacaSaatIni | null>(null);

  const capitalizeEachWord = (str: string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const performSearch = async () => {
    fetchWeather(cari);
  };

  const fetchWeather = async (kota: string) => {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=cd7f5710c36d0d782c5f2bcf59a256a9&units=metric&lang=id`);
    const weatherData = await weatherResponse.json();

    const countryCode = weatherData.sys.country;
    const countryResponse = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    const countryData = await countryResponse.json();
    const countryName = countryData[0]?.name?.common || countryCode;

    const { lat, lon } = weatherData.coord;

    const uvResponse = await fetch(`https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=cd7f5710c36d0d782c5f2bcf59a256a9`);
    const uvData = await uvResponse.json();

    if (weatherData && weatherData.main && weatherData.weather) {
      setCuacaSaatIni({
        lokasi: {
          kota: weatherData.name,
          negara: countryName,
          waktu: new Date().toLocaleString(),
        },
        cuaca: {
          suhu: Math.round(weatherData.main.temp),
          angin: weatherData.wind.speed,
          kelembapan: weatherData.main.humidity,
          deskripsi: capitalizeEachWord(weatherData.weather[0].description),
          ikon: weatherData.weather[0].icon,
          indexUV: uvData.value,
          sunrise: weatherData.sys.sunrise,
          sunset: weatherData.sys.sunset,
        },
      });
    }
  };

  return (
    <IonPage className="tab2-weather-search-page">
      <IonHeader>
        <IonToolbar className="tab2-header-toolbar">
          <IonTitle className="tab2-header-title">Pencarian Cuaca</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="tab2-weather-search-content">
        <IonRow className="tab2-search-row ion-margin-top ion-justify-content-center ion-align-items-center">
          <IonCol size="10">
            <div className="search-container">
              <IonSearchbar className="tab2-search-bar" placeholder="Cari Berdasarkan Nama Kota" animated value={cari} onIonChange={(e) => setCari(e.detail.value!)} />
              <IonButton className="tab2-search-button" onClick={performSearch}>
                <IonIcon icon={searchOutline} />
              </IonButton>
            </div>
          </IonCol>
        </IonRow>
        <div className="tab2-search-results">{cuacaSaatIni ? <CurrentWeather cuacaSaatIni={cuacaSaatIni} /> : <h3 className="ion-text-center">Hasil pencarian akan muncul di sini</h3>}</div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
