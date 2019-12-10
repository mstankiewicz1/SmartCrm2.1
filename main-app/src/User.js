import React from 'react';


const User = (props) => {


    const {name, surname, pesel, mobilePhone, landlinePhone, email, numberAccount, accountIncome, divisionMarkets,
        instrumentsPortfolio} = props.user;


        return (
                    <div>
                        <div className="dataUserFromProps">
                            <div className="dataPersonFromProps">
                                <p className="nameAndSurnameFromProps">
                                    <span>{name ? name : null}</span><span> </span><span>{surname ? surname : null}</span>
                                </p>
                                <p className="peselFromProps">{pesel ? pesel : null}</p>
                            </div>
                            <div className="dataContactFromProps">
                                <div>
                                    <p className="mobilePhoneFromProps">Telefon komórkowy: <span>{mobilePhone ? mobilePhone : null}</span></p>
                                    <p className="landlinePhoneFromProps">Telefon stacjonarny: <span>{landlinePhone ? landlinePhone : null}</span></p>
                                    <p className="emailFromProps">email: <span>{email ? email : null}</span></p>
                                </div>
                            </div>
                            <div className="dataAccountNumberFromProps">
                                    <p className="accountNumberFromProps">Numer rachunku: <span>{numberAccount ? numberAccount : null}</span></p>
                            </div>
                        </div>
                        <div className="cleanDataUserFromProps">
                            <button onClick={() => props.delete()}>Wyczyść dane klienta</button>
                        </div>
                        <div className="incomeSectionFromProps">
                            <div className="financialDataFromProps">
                                <div className="financialDataHeaderFromProps">
                                    <span className="financialDataHeaderSpanFromProps">Dane Finansowe</span>
                                </div>
                                    <table id="tableFinancialDataFromProps">
                                        <tbody>
                                            <tr>
                                                <td>Dochodowość:</td>
                                                <td>{accountIncome ? accountIncome : null}</td>
                                            </tr>
                                            <tr>
                                                <td>Obrót na rynku kasowym:</td>
                                                <td>{divisionMarkets.tradingOnCashMarket ? divisionMarkets.tradingOnCashMarket : null }</td>
                                            </tr>
                                            <tr>
                                                <td>Obrót na rynku terminowym:</td>
                                                <td>{divisionMarkets.tradingOnFuturesMarket ? divisionMarkets.tradingOnFuturesMarket : null}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                            <div className="instrumentsSectionFromProps">
                                <div className="portfolioSectionFromProps">
                                    <div className="financialDataHeaderPortfolioFromProps">
                                        <span className="financialDataHeaderPortfolioSpanFromProps">Skład Portfela</span>
                                    </div>
                                        <table id="tableInstrumentsDataFromProps">
                                            <tbody>
                                                <tr>
                                                    <td>Akcje:</td>
                                                    <td>{instrumentsPortfolio.equityInstruments ? instrumentsPortfolio.equityInstruments : null}</td>
                                                </tr>
                                                <tr>
                                                    <td>Obligacje:</td>
                                                    <td>{instrumentsPortfolio.debtInstruments ? instrumentsPortfolio.debtInstruments : null}</td>
                                                </tr>
                                                <tr>
                                                    <td>Wolna Gotowka:</td>
                                                    <td>{instrumentsPortfolio.freeCash ? instrumentsPortfolio.freeCash : null}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                </div>
                            </div>
                        </div>
                    </div>
        );

};

export default User;