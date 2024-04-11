export type form = {
  name: string,
  description: string,
  send_text: string,
  success_message: string,
  fields: field[]
}

export type field = {
  name: string,
  type: string,
  placeholder: string,
  required: boolean,
}

export type user = {
  Login: string,
  Password: string,
  FIO: string,
  type: "department" | "accountant" | "employee" | "",
  tickets?: {
    data: {
      attributes: ticket
    }[]
  }
}

export type ticket = {
  createdAt: number,
  updatedAt: number
  Count: number,
  Status: "pending" | "accepted" | "rejected"
  product: {
    data: product
  },
  worker?: {
    data: {
      attributes: user
    }
  }
}

export type product = {
  id: number,
  attributes: {
    Name: string,
    Price: number,
    Image: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
}

