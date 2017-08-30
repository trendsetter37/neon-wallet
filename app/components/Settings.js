import React from 'react';
import { Link } from 'react-router';

const Settings = ({}) =>
  <div id="settings">
    <div className="title">Settings:</div>
    <div className="settingsForm">
      <div className="settingsItem">
        <label>Block Explorer:</label>
        <select>
          <option>Neotracker</option>
          <option>Antchain</option>
        </select>
      </div>
    </div>
    <Link to="/"><button>Home</button></Link>
  </div>

export default Settings;
