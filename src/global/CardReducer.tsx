import { createSlice } from '@reduxjs/toolkit';

const InitialCards = [
    {
      id: 1,
      name: 'Kanon',
      cardNumber: '556789001',
      email: 'kanon@gmail.com',
      mobile: '9777598654',
      network: 'Rupay'
    },
    {
      id: 2,
      name: 'John',
      cardNumber: '',
      email: 'john@gmail.com',
      mobile: '9876543210',
      network: ''
    },
    {
      id: 3,
      name: 'Emma',
      cardNumber: '987654321',
      email: 'emma@gmail.com',
      mobile: '1234567890',
      network: 'Mastercard'
    },
    {
      id: 4,
      name: 'Alice',
      cardNumber: '',
      email: 'alice@gmail.com',
      mobile: '7890123456',
      network: ''
    },
    {
      id: 5,
      name: 'Bob',
      cardNumber: '012345678',
      email: 'bob@gmail.com',
      mobile: '2345678901',
      network: 'Discover'
    },
    {
      id: 6,
      name: 'Linda',
      cardNumber: '',
      email: 'linda@gmail.com',
      mobile: '9012345678',
      network: ''
    },
    {
      id: 7,
      name: 'Mike',
      cardNumber: '345678901',
      email: 'mike@gmail.com',
      mobile: '6789012345',
      network: 'JCB'
    },
    {
      id: 8,
      name: 'Sophia',
      cardNumber: '234567890',
      email: 'sophia@gmail.com',
      mobile: '8901234567',
      network: 'Diners Club'
    },
    {
      id: 9,
      name: 'Daniel',
      cardNumber: '789012345',
      email: 'daniel@gmail.com',
      mobile: '4567890123',
      network: 'UnionPay'
    },
    {
      id: 10,
      name: 'Olivia',
      cardNumber: '',
      email: 'olivia@gmail.com',
      mobile: '0123456789',
      network: ''
    }
]


export interface CardProperty {
  id: number;
  name: string;
  cardNumber: string;
  email: string;
  mobile: string
  network: string;
}



const CardSlice = createSlice({
  name: "Card Details",
  initialState: InitialCards,
  reducers: {
    addCard: (state, action) => {
      state.push({
        name: action.payload.amount,
        cardNumber: action.payload.description,
        email: action.payload.date,
        mobile: action.payload.category,
        network: action.payload.network,
        id: action.payload.id,
      });
    },
    updateCard: (state, action) => {
      const { id, cardNumber, email, mobile, network } = action.payload;
      const updateCard = state.find((card) => card.id == id);
      if (updateCard) {
        updateCard.cardNumber = cardNumber;
        updateCard.email = email;
        updateCard.mobile = mobile;
        updateCard.network = network;
      }
    },
    deleteCard: (state, action) => {
      const { id } = action.payload;
      const deleteCrd = state.find((card) => card.id == id);
      if (deleteCrd) {
        return state.filter(crd => crd.id !== id);
      }
    }
  },
});

export const { addCard, updateCard, deleteCard } = CardSlice.actions;
export default CardSlice.reducer;