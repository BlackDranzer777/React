import React from 'react';
import './WidgetLg.css';

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pinimg.com/236x/f3/e4/4a/f3e44aa13286353ed8cb7955cb3db7a7--ron-weasley-harry-potter-.jpg" alt="Network issue" className="widgetLgImg" />
                        <span className="widgetLgSpan">Ronald Weasley</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$2000</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://api.time.com/wp-content/uploads/2015/04/emma-watson-23.jpg" alt="Network issue" className="widgetLgImg" />
                        <span className="widgetLgSpan">Hermione Granger</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$2000</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="http://2.bp.blogspot.com/_lXVrTUeY2SQ/TOctCIyc6rI/AAAAAAAACcU/NUfWfFNXeh0/s1600/NevilleYR2.jpg" alt="Network issue" className="widgetLgImg" />
                        <span className="widgetLgSpan">Neville Longbottom</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$2000</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
            </table>
        </div>
    )
}
