export interface IHistoryLocation {
  dateFrom: string;
  dateTo: string;
  sourcePort: string;
  destinationPort: string;
  sender: string;
  recipient: string;
}

export interface IContainerInfo {
  id: string;
  owner: string;
  history: Array<IHistoryLocation>;
}

export interface IStorageContainerRecord {
  id: string;
  dateTime: string;
  link: string;
  container: IContainerInfo;
}

export interface IContainerInfoResponse {
  containerInfo: IContainerInfo;
  requestLink: string;
}

export interface IMessageBox {
  title: string;
  subtitle?: string;
  message: string;
}
