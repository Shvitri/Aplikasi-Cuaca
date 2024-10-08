import { IonCardSubtitle, IonCol, IonIcon, IonNote, IonRow } from '@ionic/react';

interface CuacaPropertyProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

export const WeatherProperty: React.FC<CuacaPropertyProps> = ({ label, value, icon }) => (
  <IonCol size="6">
    <IonRow className="ion-justify-content-center ion-align-items-center">
      <IonCol size="3">{icon}</IonCol>
      <IonCol size="9">
        <IonCardSubtitle>{label}</IonCardSubtitle>
        <IonNote>{value}</IonNote>
      </IonCol>
    </IonRow>
  </IonCol>
);

export default WeatherProperty;
