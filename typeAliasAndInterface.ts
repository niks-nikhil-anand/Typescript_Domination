// Type Alias and Interface

// Type Alias starts from here....
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function creatingUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

creatingUser({ name: "", email: "", isActive: true });

// readonly keyword
type NewUser = {
  readonly _id: string;
  name: string;
  email: string;
  isPaid: boolean;
  creditCardDetails?: number;
};

// here , ? makes the creditCardDetails Optional

let myUser: NewUser = {
  _id: "1234",
  name: "nikhil",
  email: "nikhil@gmail.com",
  isPaid: true,
};

myUser.email = "anand@gmail.com";

// myUser._id = "124456"

// here , you can chnages the rest of the instead of property which are marked as readonly
// as shown above

// Intersection

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  carddata: Date;
};

type cardCVV = {
  cardcvv: number;
};

type cardDetails = cardNumber & cardDate & cardCVV;

// Not recommended
type cardDetailsHacckyWay = cardNumber &
  cardDate & {
    cardcvv: number;
  };

/// Type Alias ends here .......
