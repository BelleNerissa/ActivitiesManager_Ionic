import React from "react";

export type ActivityType = "rest" | "work" | "hobby";

export interface Activitiy {
  id: string;
  title: string;
  description: string;
  hour: string;
  activityType: ActivityType;
  imageUrl: string;
  isCompleted: boolean;
}

export interface ActivitiesContextModel {
  activities: Activitiy[];
  addActivity: (
    title: string,
    description: string,
    hour: string,
    activityType: ActivityType
  ) => void;
  completeActivity: (ActivityId: string) => void;
}

const ActivitiesContext = React.createContext<ActivitiesContextModel>({
  activities: [],
  addActivity: () => {},
  completeActivity: () => {},
});

export default ActivitiesContext;
