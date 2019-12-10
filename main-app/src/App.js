import React from 'react';
import './css/style.css';
import UsersList from './UsersList';
import Search from './Search';
import Notes from './Notes';
import NotesList from './NotesList';
import AddBankNumber from './AddBankNumber';
import BankNumbersList from './BankNumbersList';
import AddActivity from './AddActivity';


const allUsers = [
                    {
                        id: 0,
                        name: 'Marek',
                        surname: 'Stankiewicz',
                        pesel: 86032416316,
                        mobilePhone: 123456789,
                        landlinePhone: 221234567,
                        email: 'zxcccv@gmail.com',
                        numberAccount: 12345678,
                        accountIncome: 125000,
                        divisionMarkets: {

                            tradingOnFuturesMarket: 200000,
                        },
                        instrumentsPortfolio: {
                            equityInstruments: 400000,
                            debtInstruments: 500000,
                            freeCash: 600000,
                        },
                    },
                    {
                        id: 1,
                        name: 'Joanna',
                        surname: 'Nowak',
                        pesel: 12345678901,
                        mobilePhone: 234567890,
                        landlinePhone: 222345678,
                        email: 'bdfbbd@gmail.com',
                        numberAccount: 23456789,
                        accountIncome: 150000,
                        divisionMarkets: {
                            tradingOnCashMarket: 75000,
                        },
                        instrumentsPortfolio: {
                            equityInstruments: 500000,
                            debtInstruments: 600000,
                        },
                    },
                    {
                        id: 2,
                        name: 'Bartosz',
                        surname: 'Lubomirski',
                        pesel: 23456789012,
                        mobilePhone: 345678901,
                        landlinePhone: 223456789,
                        email: 'gergdfg@gmail.com',
                        numberAccount: 34567890,
                        accountIncome: 175000,
                        divisionMarkets: {
                            tradingOnCashMarket: 100000,
                            tradingOnFuturesMarket: 250000,
                        },
                        instrumentsPortfolio: {
                            equityInstruments: 600000,
                            debtInstruments: 700000,
                            freeCash: 800000,
                        },
                    },
                    {
                        id: 3,
                        name: 'Agnieszka',
                        surname: 'Marianowska',
                        pesel: 34567890123,
                        mobilePhone: 456789012,
                        landlinePhone: 224567890,
                        email: 'nnin@gmail.com',
                        numberAccount: 45678901,
                        accountIncome: 200000,
                        divisionMarkets: {
                            tradingOnCashMarket: 125000,
                            tradingOnFuturesMarket: 275000,
                        },
                        instrumentsPortfolio: {
                            equityInstruments: 700000,
                            debtInstruments: 800000,
                            freeCash: 900000,
                        },
                    },
                    {
                        id: 4,
                        name: 'Julia',
                        surname: 'Rzeszowska',
                        pesel: 45678901234,
                        mobilePhone: 567890123,
                        landlinePhone: 225678901,
                        email: 'hdgfgfdgfdcv@gmail.com',
                        numberAccount: 56789012,
                        accountIncome: 225000,
                        divisionMarkets: {
                            tradingOnCashMarket: 150000,
                            tradingOnFuturesMarket: 300000,
                        },
                        instrumentsPortfolio: {
                            equityInstruments: 800000,
                            debtInstruments: 900000,
                            freeCash: 1000000,
                        },
                    },
                ];

class App extends React.Component {

    counter = 0;

    state = {
              filteredUsers: allUsers,
              privateNotes: [],
              bankAccountNumbers: [],
              issues: [],
              contacts: [],
              sale: [],
         };


    filterUsers = (e) => {
        e.preventDefault();
        const pesel = e.target.value;
        const filteredUsers = allUsers.filter(function (user) {
            return user.pesel === parseInt(pesel);
        });
        if (pesel.length === 11) {
            this.setState({
                filteredUsers
            });
        }
    };

    deleteUser = () => {
      this.setState({
          filteredUsers: [],
          privateNotes: [],
          bankAccountNumbers: [],
          issues: [],
          contacts: [],
          sale: [],
      })
    };

    addNotes = (text) => {
        const note = {
            id: this.counter,
            text,
        };
        this.counter++;

        this.setState(prevState =>({
            privateNotes: [...prevState.privateNotes, note]
            })
        );

        return true
    };

    addBankNumber = (number) => {
        const num = {
            id: this.counter,
            number,
        };
        this.counter++;

        this.setState(prevState =>({
            bankAccountNumbers: [...prevState.bankAccountNumbers, num]
            })
        );

        return true
    };

    addCase = (title, category, text, important) => {

        const singleCase = {
            id: this.counter,
            title,
            category,
            text,
            important,
            active: true,
        };
        this.counter++;
        this.setState({
            issues: [...this.state.issues, singleCase]
        });
        return true;
    };

    addContact = (title, category, text, important) => {

        const singleContact = {
            id: this.counter,
            title,
            category,
            text,
            important,
            active: true,
        };
        this.counter++;
        this.setState({
            contacts: [...this.state.contacts, singleContact]
        });
        return true;
    };


    addSale = (title, category, text, important) => {

        const singleSale = {
            id: this.counter,
            title,
            category,
            text,
            important,
            active: true,
        };
        this.counter++;
        this.setState({
            sale: [...this.state.sale, singleSale]
        });
        return true;
    };


    render() {
        return (
            <div className="app">
                    <Search change={this.filterUsers}/>
                    <UsersList users={this.state.filteredUsers} delete={this.deleteUser}/>
                    <Notes add={this.addNotes}/>
                    <AddActivity/>
                    <NotesList list={this.state.privateNotes}/>
                    <AddBankNumber addNumber={this.addBankNumber}/>
                    <BankNumbersList listNumbers={this.state.bankAccountNumbers}/>
            </div>
        )
    }
}


export default App;
