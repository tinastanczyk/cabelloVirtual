import React from 'react';
import "../assets/css/Services.css";

function Services() {
  return (
    <div class="container row">
      <h1 class="center-align col s12">Services</h1>
      {/* <ul> */}
        <div class="divider"></div>
        <div class="section"></div>
        <div class="flow-text col s12 valign-wrapper section"><h5 class="center-align col s6">Inbox Management</h5>
          <p class="flow-text col s6 offset-s6 center-align">Reading, writing, and sending emails, creating
            folders, creating filters to keep you organized
          </p>
        </div>
        <div class="flow-text col s12 valign-wrapper section"><h5 class="center-align col s6">Calendar Management</h5>
          <p class="flow-text col s6 offset-s6 center-align">Adding work blocks, color coding, adding white
            space and maximizing your day without
            overloading your day with meetings.
          </p>
        </div>
        <div class="flow-text col s12 valign-wrapper section"><h5 class="center-align col s6">Travel Arrangements</h5>
          <p class="flow-text col offset-s6 center-align">Booking flights, hotels, car services and meal
            reservations.
          </p>
        </div>
        <div class="flow-text col s12 valign-wrapper section"><h5 class="center-align col s6" >Expense Reporting</h5>
          <p class="flow-text col offset-s6 center-align">Submitting corporate and personal expenses
            using Workday
          </p>
        </div>
        <div class="flow-text col s12 valign-wrapper section"><h5 class="center-align col s6">Appointment Scheuling</h5>
          <p class="flow-text col offset-s6 center-align">Scheduling and confirming personal
            appointments, or client appointments as
            needed.
          </p>
        </div>
        <div class="flow-text col s12 valign-wrapper section"><h5 class="center-align col s6">Client Service Management</h5>
          <p class="flow-text col offset-s6 center-align">Organizing clients using google docs/excel</p>
        </div>
        <div class="flow-text col s12 valign-wrapper section"><h5 class="center-align col s6">Project Management</h5>
          <p class="flow-text col offset-s6 center-align">Helping keep track of project deadlines,
            making sure tasks are being completed on time
            and delegation help.
          </p>
        </div>
        <div class="flow-text col s12 valign-wrapper section"><h5 class="center-align col s6">Event Coordination</h5>
          <p class="flow-text col offset-s6 center-align">Researching spaces, setting up catering,
            sending out event reminders and more!
          </p>
        </div>
      {/* </ul> */}
      <h1 class="center-align col s12">Pricing</h1>
      <div class="prices col s12 center-align">
      <table class="col s12 centered responsive-table center-align">
        <thead>
          <tr>
              <th>Silver Package</th>
              <th>Gold Package</th>
              <th>Platinum Package</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>$1500</td>
            <td>$2500</td>
            <td>$4000</td>
          </tr>
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
    <h4 class="flow-text">*Additional hours will be charged at $35 per hour or you may choose to upgrade to the next package tier. Time will be tracked using Harvest and a detailed report of hours spent can be emailed at the end of each month.</h4>
    </div>
  );
}

export default Services;