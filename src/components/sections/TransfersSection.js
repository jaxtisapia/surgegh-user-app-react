import React, {Component} from 'react'

export default class TransfersSection extends Component{
    render(){
        return(
            <div className="uk-flex uk-flex-center">

                <div className="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-width-1-2@m">

                    <h1 className="uk-heading-line uk-text-center"><span className='thin-text'>Completed Transfers</span></h1>

                    <div className="uk-overflow-auto">
                        <table className="uk-table uk-table-small uk-table-divider">
                        <thead>
                        <tr>
                            <th>Transaction</th>
                            <th>Amount(GHC)</th>
                            <th>Partner</th>
                            <th>Date</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>System</td>
                            <td>Fee</td>
                            <td>10</td>
                            <td>11/01/18</td>
                        </tr>
                        <tr>
                            <td>0243683423</td>
                            <td>Sent</td>
                            <td>100</td>
                            <td>9/01/18</td>
                        </tr>
                        <tr>
                            <td>0243683423</td>
                            <td>Received</td>
                            <td>200</td>
                            <td>9/01/18</td>
                        </tr>
                        <tr>
                            <td>0243683423</td>
                            <td>Received</td>
                            <td>200</td>
                            <td>9/01/18</td>
                        </tr>
                        <tr>
                            <td>0243683423</td>
                            <td>Sent</td>
                            <td>100</td>
                            <td>9/01/18</td>
                        </tr>
                        <tr>
                            <td>0243683423</td>
                            <td>Received</td>
                            <td>200</td>
                            <td>9/01/18</td>
                        </tr>
                        <tr>
                            <td>0243683423</td>
                            <td>Received</td>
                            <td>200</td>
                            <td>9/01/18</td>
                        </tr>
                        </tbody>
                    </table>


                </div>
                </div>

            </div>
        )
    }
}