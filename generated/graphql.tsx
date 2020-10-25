import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  friends: Array<User>;
  MessagesRecieved: Array<Messages>;
  MessagesSent: Array<Messages>;
  followedBy: Array<User>;
  following: Array<User>;
  isActive: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['String']>;
  FriendRequestRecieved: Array<FriendsRequest>;
  FriendRequsetSent: Array<FriendsRequest>;
  reactions: Array<Reaction>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type UserFriendsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};


export type UserMessagesRecievedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<MessagesWhereUniqueInput>;
  after?: Maybe<MessagesWhereUniqueInput>;
};


export type UserMessagesSentArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<MessagesWhereUniqueInput>;
  after?: Maybe<MessagesWhereUniqueInput>;
};


export type UserFollowedByArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};


export type UserFollowingArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};


export type UserFriendRequestRecievedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<FriendsRequestWhereUniqueInput>;
  after?: Maybe<FriendsRequestWhereUniqueInput>;
};


export type UserFriendRequsetSentArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<FriendsRequestWhereUniqueInput>;
  after?: Maybe<FriendsRequestWhereUniqueInput>;
};


export type UserReactionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ReactionWhereUniqueInput>;
  after?: Maybe<ReactionWhereUniqueInput>;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  messages: Array<Messages>;
  friendsRequests: Array<FriendsRequest>;
  CurrentUser?: Maybe<User>;
  /** All Messages from User */
  GetMessages: Array<Messages>;
  Friends?: Maybe<User>;
  GetUsers: Array<User>;
  GetFriendRequests?: Maybe<Array<FriendsRequest>>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};


export type QueryMessagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<MessagesWhereUniqueInput>;
  after?: Maybe<MessagesWhereUniqueInput>;
};


export type QueryFriendsRequestsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<FriendsRequestWhereUniqueInput>;
  after?: Maybe<FriendsRequestWhereUniqueInput>;
};


export type QueryGetMessagesArgs = {
  from: Scalars['String'];
};


export type QueryGetUsersArgs = {
  emailOrUsername: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyUser: BatchPayload;
  deleteManyMessages: BatchPayload;
  deleteManyFriendsRequest: BatchPayload;
  /** Create New User */
  CreateUser: AuthPayload;
  PasswordLogin: AuthPayload;
  OTPLogin?: Maybe<Scalars['String']>;
  ValidateOTP: AuthPayload;
  RequestResetPassword: Scalars['String'];
  ResetPassword: AuthPayload;
  /** Send Chat Message */
  SendMessage: Messages;
  /** Log User in With Google */
  GoogleAuth: AuthPayload;
  SetUserInactive: Scalars['String'];
  AddFriend: Scalars['String'];
  ConfirmFriendRequest: Scalars['String'];
  RemoverFriend: Scalars['String'];
  /** React To Message */
  CreateReaction: Reaction;
  SendFriendRequest: User;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteManyMessagesArgs = {
  where?: Maybe<MessagesWhereInput>;
};


export type MutationDeleteManyFriendsRequestArgs = {
  where?: Maybe<FriendsRequestWhereInput>;
};


export type MutationCreateUserArgs = {
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type MutationPasswordLoginArgs = {
  emailOrUsername: Scalars['String'];
  password?: Maybe<Scalars['String']>;
};


export type MutationOtpLoginArgs = {
  emailOrUsername: Scalars['String'];
};


export type MutationValidateOtpArgs = {
  OTP: Scalars['Int'];
  username: Scalars['String'];
};


export type MutationRequestResetPasswordArgs = {
  emailOrUsername: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
  ConfirmPassword: Scalars['String'];
};


export type MutationSendMessageArgs = {
  Sender: Scalars['String'];
  Receiver: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};


export type MutationGoogleAuthArgs = {
  email?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
};


export type MutationSetUserInactiveArgs = {
  id: Scalars['Int'];
};


export type MutationAddFriendArgs = {
  id: Scalars['Int'];
};


export type MutationConfirmFriendRequestArgs = {
  id: Scalars['Int'];
};


export type MutationRemoverFriendArgs = {
  FriendId: Scalars['Int'];
};


export type MutationCreateReactionArgs = {
  messageId: Scalars['Int'];
  content: Scalars['String'];
};


export type MutationSendFriendRequestArgs = {
  emailOrUsername: Scalars['String'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type Messages = {
  __typename?: 'Messages';
  id: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  from: User;
  SenderId: Scalars['Int'];
  to: User;
  ReceiverId: Scalars['Int'];
  isSenderFriend: Scalars['Boolean'];
  isSenderFollowing: Scalars['Boolean'];
  isSenderFollowedBy: Scalars['Boolean'];
  reactions: Array<Reaction>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type MessagesReactionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ReactionWhereUniqueInput>;
  after?: Maybe<ReactionWhereUniqueInput>;
};

export type FriendsRequest = {
  __typename?: 'FriendsRequest';
  id: Scalars['Int'];
  RequestReceiverId: Scalars['Int'];
  RequsetSenderId: Scalars['Int'];
  sender: User;
  reciever: User;
  createdAt: Scalars['DateTime'];
};

export type Reaction = {
  __typename?: 'Reaction';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  content: Scalars['String'];
  message: Messages;
  messageId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type FriendsPayload = {
  __typename?: 'FriendsPayload';
  user?: Maybe<User>;
  message?: Maybe<Array<Messages>>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
};

export type MessagesWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type FriendsRequestWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ReactionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  email?: Maybe<StringFilter>;
  username?: Maybe<StringFilter>;
  googleId?: Maybe<StringNullableFilter>;
  loginSecret?: Maybe<StringNullableFilter>;
  avatar?: Maybe<StringNullableFilter>;
  password?: Maybe<StringNullableFilter>;
  OneTimePassword?: Maybe<IntNullableFilter>;
  PasswordResetTokenExpiry?: Maybe<FloatNullableFilter>;
  PasswordResetToken?: Maybe<StringNullableFilter>;
  MessagesSent?: Maybe<MessagesListRelationFilter>;
  MessagesRecieved?: Maybe<MessagesListRelationFilter>;
  FriendRequsetSent?: Maybe<FriendsRequestListRelationFilter>;
  FriendRequestRecieved?: Maybe<FriendsRequestListRelationFilter>;
  followedBy?: Maybe<UserListRelationFilter>;
  following?: Maybe<UserListRelationFilter>;
  friends?: Maybe<UserListRelationFilter>;
  friend?: Maybe<UserListRelationFilter>;
  friendId?: Maybe<IntNullableFilter>;
  isActive?: Maybe<BoolFilter>;
  lastSeen?: Maybe<StringNullableFilter>;
  reactions?: Maybe<ReactionListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
  googleId?: Maybe<SortOrder>;
  loginSecret?: Maybe<SortOrder>;
  avatar?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  OneTimePassword?: Maybe<SortOrder>;
  PasswordResetTokenExpiry?: Maybe<SortOrder>;
  PasswordResetToken?: Maybe<SortOrder>;
  friendId?: Maybe<SortOrder>;
  isActive?: Maybe<SortOrder>;
  lastSeen?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type MessagesWhereInput = {
  AND?: Maybe<Array<MessagesWhereInput>>;
  OR?: Maybe<Array<MessagesWhereInput>>;
  NOT?: Maybe<Array<MessagesWhereInput>>;
  id?: Maybe<IntFilter>;
  content?: Maybe<StringNullableFilter>;
  image?: Maybe<StringNullableFilter>;
  from?: Maybe<UserWhereInput>;
  SenderId?: Maybe<IntFilter>;
  to?: Maybe<UserWhereInput>;
  ReceiverId?: Maybe<IntFilter>;
  isSenderFriend?: Maybe<BoolFilter>;
  isSenderFollowing?: Maybe<BoolFilter>;
  isSenderFollowedBy?: Maybe<BoolFilter>;
  reactions?: Maybe<ReactionListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FriendsRequestWhereInput = {
  AND?: Maybe<Array<FriendsRequestWhereInput>>;
  OR?: Maybe<Array<FriendsRequestWhereInput>>;
  NOT?: Maybe<Array<FriendsRequestWhereInput>>;
  id?: Maybe<IntFilter>;
  sender?: Maybe<UserWhereInput>;
  RequsetSenderId?: Maybe<IntFilter>;
  reciever?: Maybe<UserWhereInput>;
  RequestReceiverId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type MessagesListRelationFilter = {
  every?: Maybe<MessagesWhereInput>;
  some?: Maybe<MessagesWhereInput>;
  none?: Maybe<MessagesWhereInput>;
};

export type FriendsRequestListRelationFilter = {
  every?: Maybe<FriendsRequestWhereInput>;
  some?: Maybe<FriendsRequestWhereInput>;
  none?: Maybe<FriendsRequestWhereInput>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type ReactionListRelationFilter = {
  every?: Maybe<ReactionWhereInput>;
  some?: Maybe<ReactionWhereInput>;
  none?: Maybe<ReactionWhereInput>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type ReactionWhereInput = {
  AND?: Maybe<Array<ReactionWhereInput>>;
  OR?: Maybe<Array<ReactionWhereInput>>;
  NOT?: Maybe<Array<ReactionWhereInput>>;
  id?: Maybe<IntFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
  message?: Maybe<MessagesWhereInput>;
  messageId?: Maybe<IntFilter>;
  content?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  NewMessage: Messages;
  ReactionToMessage: Reaction;
  FriendRequestSub: FriendsRequest;
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'avatar' | 'isActive' | 'lastSeen'>
  )> }
);

export type FriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type FriendsQuery = (
  { __typename?: 'Query' }
  & { Friends?: Maybe<(
    { __typename?: 'User' }
    & { friends: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email' | 'avatar' | 'isActive' | 'lastSeen'>
      & { MessagesRecieved: Array<(
        { __typename?: 'Messages' }
        & Pick<Messages, 'content' | 'createdAt'>
      )>, MessagesSent: Array<(
        { __typename?: 'Messages' }
        & Pick<Messages, 'content' | 'createdAt'>
      )> }
    )> }
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { CurrentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'avatar' | 'isActive' | 'lastSeen'>
  )> }
);

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password?: Maybe<Scalars['String']>;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { CreateUser: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar' | 'email'>
    ) }
  ) }
);

export type PasswordLoginMutationVariables = Exact<{
  emailOrUsername: Scalars['String'];
  password?: Maybe<Scalars['String']>;
}>;


export type PasswordLoginMutation = (
  { __typename?: 'Mutation' }
  & { PasswordLogin: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    ) }
  ) }
);

export type OtpLoginMutationVariables = Exact<{
  emailOrUsername: Scalars['String'];
}>;


export type OtpLoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'OTPLogin'>
);

export type VerifyOptMutationVariables = Exact<{
  OTP: Scalars['Int'];
  username: Scalars['String'];
}>;


export type VerifyOptMutation = (
  { __typename?: 'Mutation' }
  & { ValidateOTP: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'avatar' | 'username'>
    ) }
  ) }
);

export type RequestResetPasswordMutationVariables = Exact<{
  emailOrUsername: Scalars['String'];
}>;


export type RequestResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'RequestResetPassword'>
);

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
  ConfirmPassword: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { ResetPassword: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ) }
  ) }
);

export type GoogleAuthMutationVariables = Exact<{
  email: Scalars['String'];
  images: Scalars['String'];
  googleId?: Maybe<Scalars['String']>;
}>;


export type GoogleAuthMutation = (
  { __typename?: 'Mutation' }
  & { GoogleAuth: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'avatar' | 'username'>
    ) }
  ) }
);

export type GetUsersQueryVariables = Exact<{
  emailOrUsername: Scalars['String'];
}>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { GetUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'avatar'>
  )> }
);

export type AddFriendMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AddFriendMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'AddFriend'>
);

export type ConfirmFriendRequestMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ConfirmFriendRequestMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'ConfirmFriendRequest'>
);

export type FriendRequestSubSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type FriendRequestSubSubscription = (
  { __typename?: 'Subscription' }
  & { FriendRequestSub: (
    { __typename?: 'FriendsRequest' }
    & Pick<FriendsRequest, 'id'>
    & { sender: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    ) }
  ) }
);

export type GetFriendRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFriendRequestsQuery = (
  { __typename?: 'Query' }
  & { GetFriendRequests?: Maybe<Array<(
    { __typename?: 'FriendsRequest' }
    & Pick<FriendsRequest, 'id' | 'createdAt'>
    & { sender: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'avatar' | 'username'>
    ) }
  )>> }
);

export type GetMessagesQueryVariables = Exact<{
  from: Scalars['String'];
}>;


export type GetMessagesQuery = (
  { __typename?: 'Query' }
  & { GetMessages: Array<(
    { __typename?: 'Messages' }
    & Pick<Messages, 'id' | 'content' | 'image' | 'isSenderFriend' | 'isSenderFollowing' | 'ReceiverId' | 'SenderId' | 'createdAt' | 'updatedAt'>
    & { from: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    ), to: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    ), reactions: Array<(
      { __typename?: 'Reaction' }
      & Pick<Reaction, 'content' | 'userId' | 'messageId' | 'createdAt'>
    )> }
  )> }
);

export type SendMessageMutationVariables = Exact<{
  Sender: Scalars['String'];
  Receiver: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
}>;


export type SendMessageMutation = (
  { __typename?: 'Mutation' }
  & { SendMessage: (
    { __typename?: 'Messages' }
    & Pick<Messages, 'id' | 'content'>
  ) }
);

export type NewMessageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewMessageSubscription = (
  { __typename?: 'Subscription' }
  & { NewMessage: (
    { __typename?: 'Messages' }
    & Pick<Messages, 'id' | 'content' | 'image' | 'isSenderFriend' | 'isSenderFollowing' | 'ReceiverId' | 'SenderId' | 'createdAt' | 'updatedAt'>
    & { from: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    ), to: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar'>
    ), reactions: Array<(
      { __typename?: 'Reaction' }
      & Pick<Reaction, 'id' | 'content' | 'userId' | 'messageId' | 'createdAt'>
    )> }
  ) }
);

export type ReactionMutationVariables = Exact<{
  messageId: Scalars['Int'];
  content: Scalars['String'];
}>;


export type ReactionMutation = (
  { __typename?: 'Mutation' }
  & { CreateReaction: (
    { __typename?: 'Reaction' }
    & Pick<Reaction, 'id' | 'createdAt' | 'content'>
  ) }
);

export type ReactionToMessageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ReactionToMessageSubscription = (
  { __typename?: 'Subscription' }
  & { ReactionToMessage: (
    { __typename?: 'Reaction' }
    & Pick<Reaction, 'id' | 'content' | 'userId' | 'messageId' | 'createdAt'>
  ) }
);


export const UsersDocument = gql`
    query Users {
  users {
    id
    username
    email
    avatar
    isActive
    lastSeen
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const FriendsDocument = gql`
    query Friends {
  Friends {
    friends {
      id
      username
      email
      avatar
      isActive
      lastSeen
      MessagesRecieved(last: 1) {
        content
        createdAt
      }
      MessagesSent(last: 1) {
        content
        createdAt
      }
    }
  }
}
    `;

/**
 * __useFriendsQuery__
 *
 * To run a query within a React component, call `useFriendsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFriendsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFriendsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFriendsQuery(baseOptions?: Apollo.QueryHookOptions<FriendsQuery, FriendsQueryVariables>) {
        return Apollo.useQuery<FriendsQuery, FriendsQueryVariables>(FriendsDocument, baseOptions);
      }
export function useFriendsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FriendsQuery, FriendsQueryVariables>) {
          return Apollo.useLazyQuery<FriendsQuery, FriendsQueryVariables>(FriendsDocument, baseOptions);
        }
export type FriendsQueryHookResult = ReturnType<typeof useFriendsQuery>;
export type FriendsLazyQueryHookResult = ReturnType<typeof useFriendsLazyQuery>;
export type FriendsQueryResult = Apollo.QueryResult<FriendsQuery, FriendsQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  CurrentUser {
    id
    username
    email
    avatar
    isActive
    lastSeen
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $username: String!, $password: String) {
  CreateUser(email: $email, username: $username, password: $password) {
    token
    user {
      id
      username
      avatar
      email
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const PasswordLoginDocument = gql`
    mutation PasswordLogin($emailOrUsername: String!, $password: String) {
  PasswordLogin(emailOrUsername: $emailOrUsername, password: $password) {
    token
    user {
      id
      email
    }
  }
}
    `;
export type PasswordLoginMutationFn = Apollo.MutationFunction<PasswordLoginMutation, PasswordLoginMutationVariables>;

/**
 * __usePasswordLoginMutation__
 *
 * To run a mutation, you first call `usePasswordLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePasswordLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [passwordLoginMutation, { data, loading, error }] = usePasswordLoginMutation({
 *   variables: {
 *      emailOrUsername: // value for 'emailOrUsername'
 *      password: // value for 'password'
 *   },
 * });
 */
export function usePasswordLoginMutation(baseOptions?: Apollo.MutationHookOptions<PasswordLoginMutation, PasswordLoginMutationVariables>) {
        return Apollo.useMutation<PasswordLoginMutation, PasswordLoginMutationVariables>(PasswordLoginDocument, baseOptions);
      }
export type PasswordLoginMutationHookResult = ReturnType<typeof usePasswordLoginMutation>;
export type PasswordLoginMutationResult = Apollo.MutationResult<PasswordLoginMutation>;
export type PasswordLoginMutationOptions = Apollo.BaseMutationOptions<PasswordLoginMutation, PasswordLoginMutationVariables>;
export const OtpLoginDocument = gql`
    mutation OTPLogin($emailOrUsername: String!) {
  OTPLogin(emailOrUsername: $emailOrUsername)
}
    `;
export type OtpLoginMutationFn = Apollo.MutationFunction<OtpLoginMutation, OtpLoginMutationVariables>;

/**
 * __useOtpLoginMutation__
 *
 * To run a mutation, you first call `useOtpLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOtpLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [otpLoginMutation, { data, loading, error }] = useOtpLoginMutation({
 *   variables: {
 *      emailOrUsername: // value for 'emailOrUsername'
 *   },
 * });
 */
export function useOtpLoginMutation(baseOptions?: Apollo.MutationHookOptions<OtpLoginMutation, OtpLoginMutationVariables>) {
        return Apollo.useMutation<OtpLoginMutation, OtpLoginMutationVariables>(OtpLoginDocument, baseOptions);
      }
export type OtpLoginMutationHookResult = ReturnType<typeof useOtpLoginMutation>;
export type OtpLoginMutationResult = Apollo.MutationResult<OtpLoginMutation>;
export type OtpLoginMutationOptions = Apollo.BaseMutationOptions<OtpLoginMutation, OtpLoginMutationVariables>;
export const VerifyOptDocument = gql`
    mutation VerifyOPT($OTP: Int!, $username: String!) {
  ValidateOTP(OTP: $OTP, username: $username) {
    token
    user {
      id
      avatar
      username
    }
  }
}
    `;
export type VerifyOptMutationFn = Apollo.MutationFunction<VerifyOptMutation, VerifyOptMutationVariables>;

/**
 * __useVerifyOptMutation__
 *
 * To run a mutation, you first call `useVerifyOptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyOptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyOptMutation, { data, loading, error }] = useVerifyOptMutation({
 *   variables: {
 *      OTP: // value for 'OTP'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useVerifyOptMutation(baseOptions?: Apollo.MutationHookOptions<VerifyOptMutation, VerifyOptMutationVariables>) {
        return Apollo.useMutation<VerifyOptMutation, VerifyOptMutationVariables>(VerifyOptDocument, baseOptions);
      }
export type VerifyOptMutationHookResult = ReturnType<typeof useVerifyOptMutation>;
export type VerifyOptMutationResult = Apollo.MutationResult<VerifyOptMutation>;
export type VerifyOptMutationOptions = Apollo.BaseMutationOptions<VerifyOptMutation, VerifyOptMutationVariables>;
export const RequestResetPasswordDocument = gql`
    mutation RequestResetPassword($emailOrUsername: String!) {
  RequestResetPassword(emailOrUsername: $emailOrUsername)
}
    `;
export type RequestResetPasswordMutationFn = Apollo.MutationFunction<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;

/**
 * __useRequestResetPasswordMutation__
 *
 * To run a mutation, you first call `useRequestResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetPasswordMutation, { data, loading, error }] = useRequestResetPasswordMutation({
 *   variables: {
 *      emailOrUsername: // value for 'emailOrUsername'
 *   },
 * });
 */
export function useRequestResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>) {
        return Apollo.useMutation<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>(RequestResetPasswordDocument, baseOptions);
      }
export type RequestResetPasswordMutationHookResult = ReturnType<typeof useRequestResetPasswordMutation>;
export type RequestResetPasswordMutationResult = Apollo.MutationResult<RequestResetPasswordMutation>;
export type RequestResetPasswordMutationOptions = Apollo.BaseMutationOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($token: String!, $password: String!, $ConfirmPassword: String!) {
  ResetPassword(token: $token, password: $password, ConfirmPassword: $ConfirmPassword) {
    token
    user {
      username
    }
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *      ConfirmPassword: // value for 'ConfirmPassword'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const GoogleAuthDocument = gql`
    mutation GoogleAuth($email: String!, $images: String!, $googleId: String) {
  GoogleAuth(email: $email, images: $images, googleId: $googleId) {
    token
    user {
      id
      email
      avatar
      username
    }
  }
}
    `;
export type GoogleAuthMutationFn = Apollo.MutationFunction<GoogleAuthMutation, GoogleAuthMutationVariables>;

/**
 * __useGoogleAuthMutation__
 *
 * To run a mutation, you first call `useGoogleAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleAuthMutation, { data, loading, error }] = useGoogleAuthMutation({
 *   variables: {
 *      email: // value for 'email'
 *      images: // value for 'images'
 *      googleId: // value for 'googleId'
 *   },
 * });
 */
export function useGoogleAuthMutation(baseOptions?: Apollo.MutationHookOptions<GoogleAuthMutation, GoogleAuthMutationVariables>) {
        return Apollo.useMutation<GoogleAuthMutation, GoogleAuthMutationVariables>(GoogleAuthDocument, baseOptions);
      }
export type GoogleAuthMutationHookResult = ReturnType<typeof useGoogleAuthMutation>;
export type GoogleAuthMutationResult = Apollo.MutationResult<GoogleAuthMutation>;
export type GoogleAuthMutationOptions = Apollo.BaseMutationOptions<GoogleAuthMutation, GoogleAuthMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers($emailOrUsername: String!) {
  GetUsers(emailOrUsername: $emailOrUsername) {
    id
    username
    avatar
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      emailOrUsername: // value for 'emailOrUsername'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const AddFriendDocument = gql`
    mutation addFriend($id: Int!) {
  AddFriend(id: $id)
}
    `;
export type AddFriendMutationFn = Apollo.MutationFunction<AddFriendMutation, AddFriendMutationVariables>;

/**
 * __useAddFriendMutation__
 *
 * To run a mutation, you first call `useAddFriendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFriendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFriendMutation, { data, loading, error }] = useAddFriendMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAddFriendMutation(baseOptions?: Apollo.MutationHookOptions<AddFriendMutation, AddFriendMutationVariables>) {
        return Apollo.useMutation<AddFriendMutation, AddFriendMutationVariables>(AddFriendDocument, baseOptions);
      }
export type AddFriendMutationHookResult = ReturnType<typeof useAddFriendMutation>;
export type AddFriendMutationResult = Apollo.MutationResult<AddFriendMutation>;
export type AddFriendMutationOptions = Apollo.BaseMutationOptions<AddFriendMutation, AddFriendMutationVariables>;
export const ConfirmFriendRequestDocument = gql`
    mutation ConfirmFriendRequest($id: Int!) {
  ConfirmFriendRequest(id: $id)
}
    `;
export type ConfirmFriendRequestMutationFn = Apollo.MutationFunction<ConfirmFriendRequestMutation, ConfirmFriendRequestMutationVariables>;

/**
 * __useConfirmFriendRequestMutation__
 *
 * To run a mutation, you first call `useConfirmFriendRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmFriendRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmFriendRequestMutation, { data, loading, error }] = useConfirmFriendRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useConfirmFriendRequestMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmFriendRequestMutation, ConfirmFriendRequestMutationVariables>) {
        return Apollo.useMutation<ConfirmFriendRequestMutation, ConfirmFriendRequestMutationVariables>(ConfirmFriendRequestDocument, baseOptions);
      }
export type ConfirmFriendRequestMutationHookResult = ReturnType<typeof useConfirmFriendRequestMutation>;
export type ConfirmFriendRequestMutationResult = Apollo.MutationResult<ConfirmFriendRequestMutation>;
export type ConfirmFriendRequestMutationOptions = Apollo.BaseMutationOptions<ConfirmFriendRequestMutation, ConfirmFriendRequestMutationVariables>;
export const FriendRequestSubDocument = gql`
    subscription FriendRequestSub {
  FriendRequestSub {
    sender {
      id
      username
      avatar
    }
    id
  }
}
    `;

/**
 * __useFriendRequestSubSubscription__
 *
 * To run a query within a React component, call `useFriendRequestSubSubscription` and pass it any options that fit your needs.
 * When your component renders, `useFriendRequestSubSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFriendRequestSubSubscription({
 *   variables: {
 *   },
 * });
 */
export function useFriendRequestSubSubscription(baseOptions?: Apollo.SubscriptionHookOptions<FriendRequestSubSubscription, FriendRequestSubSubscriptionVariables>) {
        return Apollo.useSubscription<FriendRequestSubSubscription, FriendRequestSubSubscriptionVariables>(FriendRequestSubDocument, baseOptions);
      }
export type FriendRequestSubSubscriptionHookResult = ReturnType<typeof useFriendRequestSubSubscription>;
export type FriendRequestSubSubscriptionResult = Apollo.SubscriptionResult<FriendRequestSubSubscription>;
export const GetFriendRequestsDocument = gql`
    query GetFriendRequests {
  GetFriendRequests {
    id
    createdAt
    sender {
      id
      avatar
      username
    }
  }
}
    `;

/**
 * __useGetFriendRequestsQuery__
 *
 * To run a query within a React component, call `useGetFriendRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFriendRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFriendRequestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFriendRequestsQuery(baseOptions?: Apollo.QueryHookOptions<GetFriendRequestsQuery, GetFriendRequestsQueryVariables>) {
        return Apollo.useQuery<GetFriendRequestsQuery, GetFriendRequestsQueryVariables>(GetFriendRequestsDocument, baseOptions);
      }
export function useGetFriendRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFriendRequestsQuery, GetFriendRequestsQueryVariables>) {
          return Apollo.useLazyQuery<GetFriendRequestsQuery, GetFriendRequestsQueryVariables>(GetFriendRequestsDocument, baseOptions);
        }
export type GetFriendRequestsQueryHookResult = ReturnType<typeof useGetFriendRequestsQuery>;
export type GetFriendRequestsLazyQueryHookResult = ReturnType<typeof useGetFriendRequestsLazyQuery>;
export type GetFriendRequestsQueryResult = Apollo.QueryResult<GetFriendRequestsQuery, GetFriendRequestsQueryVariables>;
export const GetMessagesDocument = gql`
    query GetMessages($from: String!) {
  GetMessages(from: $from) {
    id
    content
    from {
      id
      username
      avatar
    }
    to {
      id
      username
      avatar
    }
    reactions {
      content
      userId
      messageId
      createdAt
    }
    image
    isSenderFriend
    isSenderFollowing
    ReceiverId
    SenderId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *      from: // value for 'from'
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions?: Apollo.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
        return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, baseOptions);
      }
export function useGetMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, baseOptions);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($Sender: String!, $Receiver: String!, $content: String = "Empty Message", $image: String = "No Image to display") {
  SendMessage(Sender: $Sender, Receiver: $Receiver, content: $content, image: $image) {
    id
    content
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      Sender: // value for 'Sender'
 *      Receiver: // value for 'Receiver'
 *      content: // value for 'content'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, baseOptions);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const NewMessageDocument = gql`
    subscription NewMessage {
  NewMessage {
    id
    content
    from {
      id
      username
      avatar
    }
    to {
      id
      username
      avatar
    }
    reactions {
      id
      content
      userId
      messageId
      createdAt
    }
    image
    isSenderFriend
    isSenderFollowing
    ReceiverId
    SenderId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useNewMessageSubscription__
 *
 * To run a query within a React component, call `useNewMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessageSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewMessageSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewMessageSubscription, NewMessageSubscriptionVariables>) {
        return Apollo.useSubscription<NewMessageSubscription, NewMessageSubscriptionVariables>(NewMessageDocument, baseOptions);
      }
export type NewMessageSubscriptionHookResult = ReturnType<typeof useNewMessageSubscription>;
export type NewMessageSubscriptionResult = Apollo.SubscriptionResult<NewMessageSubscription>;
export const ReactionDocument = gql`
    mutation Reaction($messageId: Int!, $content: String!) {
  CreateReaction(messageId: $messageId, content: $content) {
    id
    createdAt
    content
  }
}
    `;
export type ReactionMutationFn = Apollo.MutationFunction<ReactionMutation, ReactionMutationVariables>;

/**
 * __useReactionMutation__
 *
 * To run a mutation, you first call `useReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reactionMutation, { data, loading, error }] = useReactionMutation({
 *   variables: {
 *      messageId: // value for 'messageId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useReactionMutation(baseOptions?: Apollo.MutationHookOptions<ReactionMutation, ReactionMutationVariables>) {
        return Apollo.useMutation<ReactionMutation, ReactionMutationVariables>(ReactionDocument, baseOptions);
      }
export type ReactionMutationHookResult = ReturnType<typeof useReactionMutation>;
export type ReactionMutationResult = Apollo.MutationResult<ReactionMutation>;
export type ReactionMutationOptions = Apollo.BaseMutationOptions<ReactionMutation, ReactionMutationVariables>;
export const ReactionToMessageDocument = gql`
    subscription ReactionToMessage {
  ReactionToMessage {
    id
    content
    userId
    messageId
    createdAt
  }
}
    `;

/**
 * __useReactionToMessageSubscription__
 *
 * To run a query within a React component, call `useReactionToMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useReactionToMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReactionToMessageSubscription({
 *   variables: {
 *   },
 * });
 */
export function useReactionToMessageSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ReactionToMessageSubscription, ReactionToMessageSubscriptionVariables>) {
        return Apollo.useSubscription<ReactionToMessageSubscription, ReactionToMessageSubscriptionVariables>(ReactionToMessageDocument, baseOptions);
      }
export type ReactionToMessageSubscriptionHookResult = ReturnType<typeof useReactionToMessageSubscription>;
export type ReactionToMessageSubscriptionResult = Apollo.SubscriptionResult<ReactionToMessageSubscription>;