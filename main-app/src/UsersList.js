import React from 'react';
import User from './User';


const UsersList = (props) => {


    if (props.users.length === 1) {
        return (
            <div className="usersList">
                {props.users.map( user =>
                    <User
                        key={user.id}
                        user={user}
                        name={props.name}
                        surname={props.surname}
                        pesel={props.pesel}
                        mobilePhone={props.mobilePhone}
                        landlinePhone={props.landlinePhone}
                        email={props.email}
                        numberAccount={props.numberAccount}
                        delete={props.delete}
                        accountIncome={props.accountIncome}
                        tradingOnCashMarket={props.divisionMarkets}
                        instrumentsPortfolio={props.instrumentsPortfolio}
                    />
                )}
            </div>
        )
    } else {
        return (
                    <div>
                        <div className="dataUser">
                            <div className="dataPerson">
                                    <p className="headerDataPerson">Właściciel</p>
                            </div>
                            <div className="dataContact">
                                    <p className="headerDataContact">Dane kontaktowe</p>
                            </div>
                            <div className="dataAccountNumber">
                                    <p className="headerDataAccountNumber">Numery rachunków</p>
                            </div>
                        </div>
                        <div className="incomeSection">
                            <div className="financialData">
                                <div className="financialDataHeader">
                                    <span className="financialDataHeaderSpan">Dane Finansowe</span>
                                </div>
                                    <table id="tableFinancialData">
                                        <tbody>
                                            <tr>
                                                <td>Dochodowość:</td>
                                            </tr>
                                            <tr>
                                                <td>Obrót na rynku kasowym:</td>
                                            </tr>
                                            <tr>
                                                <td>Obrót na rynku terminowym:</td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                            <div className="instrumentsSection">
                                <div className="portfolioSection">
                                    <div className="financialDataHeaderPortfolio">
                                        <span className="financialDataHeaderPortfolioSpan">Skład Portfela</span>
                                    </div>
                                        <table id="tableInstrumentsData">
                                            <tbody>
                                                <tr>
                                                    <td>Akcje:</td>
                                                </tr>
                                                <tr>
                                                    <td>Obligacje:</td>
                                                </tr>
                                                <tr>
                                                    <td>Wolna Gotowka:</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
};

export default UsersList;