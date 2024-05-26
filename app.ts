// Create the interface

interface IProduct {
  type: string
  ID: number
  size: string | number
  color: string
  state: string
  assignCustomer(customer: ICustomer): void
}

interface ICustomer {
  name: string
  surname: string
  email: string
  payment: string
  orderProduct(product: IProduct): void
}

interface IProductionProcess {
  processName: string
  description: string
  products: IProduct[]
  addProduct(product: IProduct): void
}

// Create the class

class Product implements IProduct {
  type: string
  ID: number
  size: string | number
  color: string
  state: string
  constructor(
    type: string,
    ID: number,
    size: string | number,
    color: string,
    state: string
  ) {
    this.type = type
    this.ID = ID
    this.size = size
    this.color = color
    this.state = state
  }

  assignCustomer(customer: ICustomer): void {
    if (this.state === "available") {
      console.log(
        `${customer.name} ${customer.surname} ordered the product '${this.ID}'.`
      )
    }
  }
}

class Customer implements ICustomer {
  name: string
  surname: string
  email: string
  payment: string
  constructor(name: string, surname: string, email: string, payment: string) {
    this.name = name
    this.surname = surname
    this.email = email
    this.payment = payment
  }
  orderProduct(product: IProduct): void {
    product.assignCustomer(this)
  }
}

class ProductionProcess implements IProductionProcess {
  processName: string
  description: string
  products: IProduct[]
  constructor(processName: string, description: string, products: IProduct[]) {
    this.processName = processName
    this.description = description
    this.products = products
  }
  addProduct(product: IProduct): void {
    this.products.push(product)
    console.log(
      `Product '${product.ID}-${product.type}' inserted into the production process ${this.processName}.`
    )
    console.log(
      `List of products in the production process ${
        this.processName
      }: ${this.products.map((product) => ` ${product.ID}-${product.type}`)}.`
    )
  }
}

// Instantiate Products

let product1 = new Product(
  "Swimming suit-woman",
  26347,
  "S",
  "black",
  "available"
)
let product2 = new Product(
  "Swimming suit-man",
  26348,
  "XL",
  "black",
  "available"
)
let product3 = new Product("Flip Flops", 46239, 40, "red", "available")
let product4 = new Product("Slippers", 27831, "39", "white", "available")
let product5 = new Product("Beach towel", 28445, "M", "green", "available")

// Instantiate Customers

let customer1 = new Customer("Jack", "Smith", "jacksmith@gmail.com", "cash")
let customer2 = new Customer(
  "Taylor",
  "Brown",
  "taylorbrown@gmail.com",
  "paypal"
)
let customer3 = new Customer("Weston", "Jones", "westonjones@gmail.com", "card")

// Instantiate Production Process

let process1 = new ProductionProcess(
  "Printing",
  "Form materials by heating them",
  [product3]
)
let process2 = new ProductionProcess("Sewing", "Sewing of products", [
  product1,
  product2,
])

// Orders from customers

customer1.orderProduct(product3)
customer2.orderProduct(product1)
customer3.orderProduct(product4)

// Add new Products to the Production Process

process1.addProduct(product4)
console.log(process1.products)

process2.addProduct(product5)
console.log(process2.products)
