import { title } from "process";
import React, { useState } from "react";
import ActivitiesContext, {
  ActivitiesContextModel,
  Activitiy,
  ActivityType,
} from "./activities-context";

const ActivitiesContextProvider: React.FC = (props) => {
  const [activities, setActivities] = useState<Activitiy[]>([
    {
      id: Math.random().toString(),
      title: "Viagem a Petesburgo",
      description: "Passar um dia pela cidade fabulosa",
      hour: "07:00",
      activityType: "rest",
      imageUrl: "/assets/images/image1.jpg",
      isCompleted: false,
    },
    {
      id: Math.random().toString(),
      title: "Trabalho de marketing digital",
      description: "Terminar modelo de landpage do curso",
      hour: "12:00",
      activityType: "work",
      imageUrl: "/assets/images/image3.jpg",
      isCompleted: false,
    },
    {
      id: Math.random().toString(),
      title: "Sessao de fotos",
      description: "Realizar a sessao de fotos das vitrines",
      hour: "14:00",
      activityType: "hobby",
      imageUrl: "/assets/images/image4.jpg",
      isCompleted: false,
    },
    {
      id: Math.random().toString(),
      title: "Estudar conceito dinamico de arte",
      description: "Terminar as anotacoes da ultima aula",
      hour: "14:00",
      activityType: "work",
      imageUrl: "/assets/images/image3.jpg",
      isCompleted: false,
    },
  ]);

  const addActivity = (
    title: string,
    description: string,
    hour: string,
    activityType: ActivityType
  ) => {
    let imageUrl = "";
    switch (activityType) {
      case "rest":
        imageUrl = "/assets/images/image1.jpg";
        break;
      case "work":
        imageUrl = "/assets/images/image3.jpg";
        break;
      case "hobby":
        imageUrl = "/assets/images/image4.jpg";
        break;
      default:
        imageUrl = "/assets/images/image1.jpg";
        break;
    }
    // const activityDate = new Date();
    // const hour = activityDate.getHours() + ":" + activityDate.getMinutes();

    const newActivity: Activitiy = {
      id: Math.random().toString(),
      title,
      description,
      hour,
      activityType,
      imageUrl,
      isCompleted: false,
    };

    setActivities((currentActivities) => {
      return [...currentActivities, newActivity];
    });
  };

  const completeActivity = (activityId: string) => {
    setActivities((currentActivities) => {
      const updateActivites = [...currentActivities];
      const selectedActivityIndex = activities.findIndex(
        (act) => act.id === activityId
      );
      const updateActivity = {
        ...updateActivites[selectedActivityIndex],
        isCompleted: true,
      };
      updateActivites[selectedActivityIndex] = updateActivity;
      return updateActivites;
    });
  };

  const activitiesContext: ActivitiesContextModel = {
    activities,
    addActivity,
    completeActivity,
  };

  return (
    <ActivitiesContext.Provider value={activitiesContext}>
      {props.children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesContextProvider;
