import { Eventing } from "./Eventing";
import { User, UserProps } from "./User";
import axios, { AxiosResponse } from "axios";

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse) => {
      this.models = res.data.map((val: UserProps) => User.buildUser(val));
    });
  }
}
