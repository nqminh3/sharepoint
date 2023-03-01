import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { WebPartContext } from "@microsoft/sp-webpart-base";


export interface IHelloWorldProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  documentTitle: string;
  currentUserDisplayName: string;
  storageList: string;
  acknowleadgementLabel: string;
  acknowleadgementMessage: string;
  readMessage: string;
  themeVariant : IReadonlyTheme | undefined;
  configured : boolean;

}
