import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonMenuToggle,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
// import Home from './pages/Home';
import AllActivities from "./pages/AllActivities/AllActivities";
import AddActivities from "./pages/AddActivities/AddActivities";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import { bodyOutline, newspaperOutline } from "ionicons/icons";
import ActivitiesContextProvider from "./data/ActivitiesContextProviders";

const App: React.FC = () => (
  <IonApp>
    <IonMenu side="start" contentId="scheduleAppM1" menuId="first">
      {/* Header */}
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Schedule App</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* Content */}
      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem
              routerLink="/all-Activities"
              routerDirection="none"
              lines="none"
            >
              <IonIcon color="medium" slot="start" icon={bodyOutline} />
              <IonLabel>All Activities</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem
              routerLink="/add-Activities"
              routerDirection="none"
              lines="none"
            >
              <IonIcon color="medium" slot="start" icon={newspaperOutline} />
              <IonLabel>Add Activities</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>

    <ActivitiesContextProvider>
      <IonReactRouter>
        <IonRouterOutlet id="scheduleAppM1">
          <Route exact path="/all-Activities" component={AllActivities}></Route>
          <Route exact path="/add-Activities" component={AddActivities}></Route>
          <Redirect to="/all-Activities" />
        </IonRouterOutlet>
      </IonReactRouter>
    </ActivitiesContextProvider>
  </IonApp>
);

export default App;
