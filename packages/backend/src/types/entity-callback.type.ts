export interface IEntityCallback {
  (id: string): Promise<boolean>;
}
