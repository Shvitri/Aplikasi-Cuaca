import { IonCard, IonCardContent, IonGrid, IonRow, IonText, IonCardTitle, IonCol } from '@ionic/react';
import WeatherProperty from './WeatherProperty';
import { Wind, Sun, Sunrise, Sunset } from 'lucide-react';

interface CuacaSaatIniProps {
  cuacaSaatIni: {
    lokasi: {
      kota: string;
      negara: string;
    };
    cuaca: {
      suhu: number;
      angin: number;
      deskripsi: string;
      ikon: string;
      sunrise: number;
      indexUV: number;
      sunset: number;
    };
  };
}

export const CurrentWeather: React.FC<CuacaSaatIniProps> = ({ cuacaSaatIni }) => (
  <IonGrid>
    <IonCard>
      <IonCardContent className="ion-text-center">
        <IonText color="primary">
          <h1 style={{ marginTop: '15px' }}>
            {cuacaSaatIni.lokasi.kota}, <span style={{ color: 'gray' }}>{cuacaSaatIni.lokasi.negara}</span>
          </h1>
        </IonText>
        <div className="ion-margin-top">
          <img alt="kondisi" src={`https://openweathermap.org/img/wn/${cuacaSaatIni.cuaca.ikon}@2x.png`} />
          <IonText color="dark">
            <h1 style={{ fontWeight: 'bold' }}>{cuacaSaatIni.cuaca.deskripsi}</h1>
          </IonText>
        </div>
        <IonCardTitle style={{ fontSize: '3rem' }} className="ion-margin-top">
          {cuacaSaatIni.cuaca.suhu}&#8451;
        </IonCardTitle>
        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol size="6">
              <WeatherProperty label="Angin" value={`${cuacaSaatIni.cuaca.angin} m/s`} icon={<Wind />} />
            </IonCol>
            <IonCol size="6">
              <WeatherProperty label="Matahari Terbit" value={new Date(cuacaSaatIni.cuaca.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} icon={<Sunrise />} />
            </IonCol>
            <IonCol size="6">
              <WeatherProperty label="Index UV" value={cuacaSaatIni.cuaca.indexUV} icon={<Sun />} />
            </IonCol>
            <IonCol size="6">
              <WeatherProperty label="Matahari Terbenam" value={new Date(cuacaSaatIni.cuaca.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} icon={<Sunset />} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  </IonGrid>
);

export default CurrentWeather;
