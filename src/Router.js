import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login / Sign Up" initial />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Your Employees"
            rightTitle=" Add"
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create an Employee" />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit an Employee" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
