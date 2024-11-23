type Create = (input: any) => Promise<{}>
type Find = (input: any) => Promise<{}>
type Update = (input: any) => Promise<{}>
type Delete = (input: any) => Promise<{}>

//this is type of cart repository
export type CartRepositoryType = {
    create: Create;
    find: Find;
    update: Update;
    delete: Delete;
}