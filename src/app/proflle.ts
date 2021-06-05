export class profile {
  public id: string;
  public first_name: string;
  public last_name: string;
  public email: string;
  public gender: string;
  public profile(
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    gender: string
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.gender = gender;
  }
}
