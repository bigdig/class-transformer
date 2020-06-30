import { ExposeOptions } from "./ExposeExcludeOptions.ts";

export class ExposeMetadata {
  constructor(
    public target: Function,
    public propertyName: string,
    public options: ExposeOptions,
  ) {}
}
