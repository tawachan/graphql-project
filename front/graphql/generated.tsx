import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Chat = {
  __typename?: "Chat";
  id: Scalars["ID"];
  text: Scalars["String"];
  room?: Maybe<Room>;
};

export type ChatCreateInput = {
  id?: Maybe<Scalars["ID"]>;
  text: Scalars["String"];
  room?: Maybe<RoomCreateOneInput>;
};

export enum ChatOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TextAsc = "text_ASC",
  TextDesc = "text_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ChatWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_lt?: Maybe<Scalars["String"]>;
  text_lte?: Maybe<Scalars["String"]>;
  text_gt?: Maybe<Scalars["String"]>;
  text_gte?: Maybe<Scalars["String"]>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  room?: Maybe<RoomWhereInput>;
  AND?: Maybe<Array<ChatWhereInput>>;
  OR?: Maybe<Array<ChatWhereInput>>;
  NOT?: Maybe<Array<ChatWhereInput>>;
};

export type ChatWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createRoom: Room;
  createChat: Chat;
};

export type MutationCreateRoomArgs = {
  data: RoomCreateInput;
};

export type MutationCreateChatArgs = {
  data: ChatCreateInput;
};

export type Query = {
  __typename?: "Query";
  chat?: Maybe<Chat>;
  chats: Array<Chat>;
  room?: Maybe<Room>;
  rooms: Array<Room>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryChatArgs = {
  where: ChatWhereUniqueInput;
};

export type QueryChatsArgs = {
  where?: Maybe<ChatWhereInput>;
  orderBy?: Maybe<ChatOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryRoomArgs = {
  where: RoomWhereUniqueInput;
};

export type QueryRoomsArgs = {
  where?: Maybe<RoomWhereInput>;
  orderBy?: Maybe<RoomOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type Room = {
  __typename?: "Room";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<RoomStatus>;
};

export type RoomCreateInput = {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<RoomStatus>;
};

export type RoomCreateOneInput = {
  create?: Maybe<RoomCreateInput>;
  connect?: Maybe<RoomWhereUniqueInput>;
};

export enum RoomOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export enum RoomStatus {
  Public = "PUBLIC",
  Limited = "LIMITED",
  Private = "PRIVATE",
}

export type RoomWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  status?: Maybe<RoomStatus>;
  status_not?: Maybe<RoomStatus>;
  status_in?: Maybe<Array<RoomStatus>>;
  status_not_in?: Maybe<Array<RoomStatus>>;
  AND?: Maybe<Array<RoomWhereInput>>;
  OR?: Maybe<Array<RoomWhereInput>>;
  NOT?: Maybe<Array<RoomWhereInput>>;
};

export type RoomWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export enum UserOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};
export type RoomsQueryVariables = {};

export type RoomsQuery = { __typename?: "Query" } & {
  privateRooms: Array<
    { __typename?: "Room" } & Pick<Room, "id" | "name" | "status">
  >;
  publicRooms: Array<
    { __typename?: "Room" } & Pick<Room, "id" | "name" | "status">
  >;
};

export const RoomsDocument = gql`
  query Rooms {
    privateRooms: rooms(where: { status: PRIVATE }) {
      id
      name
      status
    }
    publicRooms: rooms(where: { status: PUBLIC }) {
      id
      name
      status
    }
  }
`;
export type RoomsComponentProps = Omit<
  ReactApollo.QueryProps<RoomsQuery, RoomsQueryVariables>,
  "query"
>;

export const RoomsComponent = (props: RoomsComponentProps) => (
  <ReactApollo.Query<RoomsQuery, RoomsQueryVariables>
    query={RoomsDocument}
    {...props}
  />
);
