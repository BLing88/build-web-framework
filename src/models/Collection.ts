import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from "axios";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse) => {
      this.models = res.data.map((val: K) => this.deserialize(val));
      this.trigger("change");
    });
  }
}
