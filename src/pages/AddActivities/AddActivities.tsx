import React, { useContext, useRef, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import { bedSharp, briefcaseSharp, gameControllerSharp } from "ionicons/icons";
import ActivitiesContext, { ActivityType } from "../../data/activities-context";
import { useHistory } from "react-router";
import { timeout } from "workbox-core/_private";

const AddActivities: React.FC = () => {
  const history = useHistory();

  const titleInput = useRef<HTMLIonInputElement>(null);
  const descriptionInput = useRef<HTMLIonInputElement>(null);
  const activityTypeInput = useRef<HTMLIonSegmentElement>(null);
  const hourInput = useRef<HTMLIonDatetimeElement>(null);

  const activitiesCtxt = useContext(ActivitiesContext);

  const addActivity = () => {
    // ** A ? é precisa, pois nao necessariamente o valor estara inicializado
    const title = titleInput.current?.value as string;
    const description = descriptionInput.current?.value as string;
    const activityType = activityTypeInput.current?.value as ActivityType;
    const startDate = new Date(hourInput.current?.value as string);
    const startHour = startDate.getHours() + ":" + startDate.getMinutes();
    if (title && description && activityType && startHour) {
      activitiesCtxt.addActivity(title, description, startHour, activityType);
      setToastMsg("The activity has been saved");
      setTimeout(function () {
        history.replace("/all-Activities");
      }, 1000);
    }
  };

  const [toastMsg, setToastMsg] = useState<string>("");
  return (
    <React.Fragment>
      <IonToast
        isOpen={!!toastMsg}
        message={toastMsg}
        duration={3000}
        color="medium"
        onDidDismiss={() => setToastMsg("")}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Add Activities</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonSegment ref={activityTypeInput}>
                  <IonSegmentButton value="rest">
                    <IonIcon color="medium" icon={bedSharp} />
                    <IonLabel color="dark">Rest</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="work">
                    <IonIcon color="medium" icon={briefcaseSharp} />
                    <IonLabel>Work</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="hobby">
                    <IonIcon color="medium" icon={gameControllerSharp} />
                    <IonLabel>Hobby</IonLabel>
                  </IonSegmentButton>
                </IonSegment>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Activity title</IonLabel>
                  <IonInput ref={titleInput} type="text"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Activity description</IonLabel>
                  <IonInput ref={descriptionInput} type="text"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Start hour</IonLabel>
                  <IonDatetime
                    displayFormat="h:mm A"
                    pickerFormat="h:mm A"
                    value={new Date().toISOString()}
                    ref={hourInput}
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center ion-margin-top">
                <IonButton expand="block" fill="outline" onClick={addActivity}>
                  Add Activity
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default AddActivities;
