import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { checkmark, checkmarkOutline } from "ionicons/icons";
import React, { useContext, useState } from "react";
import CompleteModal from "../../components/CompleteModal";

import ActivitiesContext, { Activitiy } from "../../data/activities-context";

const AllActivities: React.FC = () => {
  const [activityToComplete, setActivityToComplete] = useState<Activitiy>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const activitiesContext = useContext(ActivitiesContext);

  const openCompleteModal = (activity: Activitiy) => {
    setActivityToComplete(activity);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <React.Fragment>
      <IonModal isOpen={!!modalIsOpen} swipeToClose={true}>
        <CompleteModal
          activity={activityToComplete as Activitiy}
          dismissModal={closeModal}
        />
      </IonModal>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>All Activities</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {activitiesContext.activities.map((activity) => (
              <IonRow key={activity.id}>
                <IonCol className="ion-text-center">
                  <IonCard>
                    <img src={activity.imageUrl} alt="Activity" />
                    <IonCardHeader>
                      <IonCardTitle>{activity.hour}</IonCardTitle>
                      <IonCardSubtitle>{activity.title}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>{activity.description}</p>
                      <IonItem lines="none">
                        {!activity.isCompleted ? (
                          <IonButton
                            onClick={() => {
                              openCompleteModal(activity);
                            }}
                            fill="clear"
                            style={{ width: "100%" }}
                          >
                            Complete Activity
                          </IonButton>
                        ) : (
                          <IonIcon
                            color="success"
                            style={{ width: "100%" }}
                            icon={checkmarkOutline}
                          />
                        )}
                      </IonItem>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default AllActivities;
