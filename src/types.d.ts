export interface ApiContacts {
  id: string;
  name: string;
  phone: string;
  email: string;
  photo: string;
}

export type Contact = Omit<ApiContacts, 'id'>

export interface ContactsJson {
  [id: string] : ApiContacts
}