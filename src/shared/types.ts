export type Nullable<T> = T | null;
export type Absent<T> = T | undefined;
export type Nillable<T> = Absent<Nullable<T>>;
