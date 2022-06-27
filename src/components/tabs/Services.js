import React from 'react';
import "../assets/css/Services.css";

function Services() {
  return (
    <div className="container row">
      <h1 className="center-align col s12">Services</h1>
      <table className="col s12 centered responsive-table center-align striped flow-text">
        <thead>
          <tr>
              <th>Service</th>
              <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Inbox Management</td>
            <td>Reading, writing, and sending emails, creating
            folders, creating filters to keep you organized</td>
          </tr>
          <tr>
            <td>Calendar Management</td>
            <td>Adding work blocks, color coding, adding white
            space and maximizing your day without
            overloading your day with meetings.</td>
          </tr>
          <tr>
            <td>Travel Arrangements</td>
            <td>Booking flights, hotels, car services and meal
            reservations.</td>
          </tr>
          <tr>
            <td>Expense Reporting</td>
            <td>Submitting corporate and personal expenses
            using Workday</td>
          </tr>
          <tr>
            <td>Appointment Scheuling</td>
            <td>Scheduling and confirming personal
            appointments, or client appointments as
            needed.</td>
          </tr>
          <tr>
            <td>Client Service Management</td>
            <td>Organizing clients using google docs/excel</td>
          </tr>
          <tr>
            <td>Project Management</td>
            <td>Helping keep track of project deadlines,
            making sure tasks are being completed on time
            and delegation help.</td>
          </tr>
          <tr>
            <td>Event Coordination</td>
            <td>Researching spaces, setting up catering,
            sending out event reminders and more!</td>
          </tr>
        </tbody>
      </table>
      <h1 className="center-align col s12">Packages</h1>
      <div className="col s12 center-align">
      <table className="col s12 centered responsive-table center-align flow-text packages">
        <thead>
          <tr>
              <th>Silver Package</th>
              <th>Gold Package</th>
              <th>Platinum Package</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>40 hrs/month</td>
            <td>80 hrs/month</td>
            <td>120 hrs/month</td>
          </tr>
          <tr>
            <td>Package Includes:
              <ul>
                <li>Email Management</li>
                <li>Calendar Management</li>
              </ul>
            </td>
            <td>Package Includes:
              <ul>
                <li>Silver Package plus</li>
                <li>Expense Reporting</li>
                <li>Invoicing</li>
                <li>Event Coordination</li>
              </ul>
            </td>
            <td>Package Includes:
              <ul>
                <li>Silver {`&`} Gold Package plus</li>
                <li>Client Service Management</li>
                <li>Project Management</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    <h4 className="flow-text">*Additional hours will be charged at $35 per hour or you may choose to upgrade to the next package tier. Time will be tracked using Harvest and a detailed report of hours spent can be emailed at the end of each month.</h4>
    </div>
  );
}

export default Services;