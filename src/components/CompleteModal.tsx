import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonModal,
  IonRow,
  IonText,
} from "@ionic/react";
import React, { useState, useContext } from "react";
import ActivitiesContext, { Activitiy } from "../data/activities-context";
interface CompleteModalProps {
  activity: Activitiy;
  dismissModal: () => void;
}

const CompleteModal: React.FC<CompleteModalProps> = (props) => {
  const activitiesCtxt = useContext(ActivitiesContext);
  const confirmCompletion = (activityId: string) => {
    activitiesCtxt.completeActivity(activityId);
    props.dismissModal();
  };

  return (
    <IonContent>
      <IonGrid className="ion-no-padding">
        <IonRow>
          <IonCol className="ion-no-padding">
            <IonImg src={props.activity.imageUrl}></IonImg>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center">
            <IonText>
              <h1>{props.activity.title}</h1>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center ion-no-padding ">
            <IonText color="medium">
              <p>Are you sure to mark this activity as completed?</p>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center">
            <IonButton color="danger" fill="clear" onClick={props.dismissModal}>
              Cancel
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-center">
            <IonButton
              color="sucess"
              fill="clear"
              onClick={() => confirmCompletion(props.activity.id)}
            >
              Confirm
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default CompleteModal;
