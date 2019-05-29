# Installing Dependencies
    1. Install postgres db and it should be up and running.
    2. Create a database and update all credentials in .env file located in the root of backend folder.
    3. (Optional) Install postgresdb client - pgAdmin.

# Setup frontend
    ```
    1. Go to frontend folder and run npm install.
    2. After that run npm start.
    ```

# Setup backend
    ```
    1. Go to backend folder and run npm install.
    3. After that run npm start and server will start at port 3000.
    ```

# User Stories:
- As a user, I want to add a temperature to my log
- The input must only take numbers
- You must display a validation error when invalid data is entered in the input
- As a user, I want to delete a temperature from my log
- As a user, I want to see the temperature median in my entire log
- As a user, I want to see the average temperature of my entire log
- As a user, I want to see the highest temperature in my log
- As a user, I want to see the lowest temperature in my log

# UI WireFrame

```
Temperature
------------------------------   -------------------
|                            |   | Add Temperature |
------------------------------   -------------------
* This field is required

--------------------------------------------------------------------------------

Average: 28.9 °c     Highest: 32.1 °c     Lowest: -3.6 °c     Median: 18.4 °c

--------------------------------------------------------------------------------

Temperature Log:

-------------------------------------------------------------
| Date           | Temperature              |               |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
```
