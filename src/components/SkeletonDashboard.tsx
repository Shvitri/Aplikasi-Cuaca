import { IonCard, IonCardContent, IonCardTitle, IonGrid, IonRow, IonText, IonSkeletonText, IonCol } from '@ionic/react';

export const SkeletonDashboard: React.FC = () => (
  <IonGrid>
    <IonCard>
      <IonCardContent className="ion-text-center">
        <IonText color="primary">
          <h1>
            <IonSkeletonText animated style={{ height: '2rem', width: '90%' }} />
          </h1>
        </IonText>
        <div className="ion-margin-top">
          <IonSkeletonText animated style={{ width: '2rem', height: '2rem' }} />
          <IonText color="dark">
            <h1 style={{ fontWeight: 'bold' }}>
              <IonSkeletonText animated style={{ height: '2rem', width: '90%' }} />
            </h1>
          </IonText>
          <IonText color="medium">
            <p>
              <IonSkeletonText animated style={{ height: '1rem', width: '70%' }} />
            </p>
          </IonText>
        </div>
        <IonCardTitle style={{ fontSize: '3rem' }} className="ion-margin-top">
          <IonSkeletonText animated style={{ height: '3rem', width: '30%' }} />
        </IonCardTitle>
        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol size="6">
              <IonSkeletonText animated style={{ height: '2rem', width: '90%' }} />
            </IonCol>
            <IonCol size="6">
              <IonSkeletonText animated style={{ height: '2rem', width: '90%' }} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  </IonGrid>
);

export default SkeletonDashboard;
