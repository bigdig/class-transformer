import { ExcludeOptions } from "./ExposeExcludeOptions.ts";

export class ExcludeMetadata {
  constructor(
    public target: Function,
    public propertyName: string,
    public options: ExcludeOptions,
  ) {}
}
