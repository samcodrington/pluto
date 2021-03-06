import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import TableContainer from "../components/table/TableContainer";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pluto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <TableContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
