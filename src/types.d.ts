export interface ApiContacts {
  id: string;
  name: string;
  phone: string;
  email: string;
  photo: string;
}

export interface ContactsJson {
  [id: string] : ApiContacts
}