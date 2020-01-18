export class Account {
  constructor(
    public username = "polubik1994",
    public firstName = "Adrian",
    public lastName = "Połubiński",
    public email = "polubik1994@gmail.com",
    public password = "tomcio1994",
    public repeatedPassword = "tomcio1994"
  ) {}
}

export type AccountKeys = (keyof Account)[];
