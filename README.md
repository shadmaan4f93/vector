# Vector Demo Application

This is simple demo app to show crad on the web page with drag and drop functionality

## Getting Started

This project has separate backend and frontend app. The technology used to develop frontend is react and for backend python with starlette.

### Prerequisites

Software and package requirements.

For backend application.

```
Python: 3.6 or Latest
pip: 3.5 or Latest

```

For frontend application.

```
Node: 10.15 or Latest
npm: 5.8 or Latest

```

### Local Installation and Run

Follow the steps to run backend application on your local system

Create virtual environment and activate it.

```
> python3 -m venv env
> source env/bin/activate

```

```
Open command prompt and go to root directory of the project.
Run the following commands:

> cd backend
> pip3 install -r requirements.txt              # Make sure requirements.txt file exist in the backend directory.
> uvicorn --host 0.0.0.0 --port 8080 app:app    # To Run server.

Open Browser and go to: http://localhost:8080/

```

Follow the steps to run frontend application on your local system

```
Open command prompt and go to root directory of the project.
Run the following commands:

> npm install  # Make sure package.json file exist in the root directory.
> npm start    # To Run server.

Open Browser and go to: http://localhost:3000/

```


### Local Installation and Run using docker

Follow the steps to run application in docker.

```
Open command prompt and go to root directory of the project.
Run the following commands:

> docker-compose up -d          # Make sure docker is runing on yor local system.
> docker-compose up --build     # To Rebuild on change
> docker-compose up

Frontend accessable on : http://localhost:3000/
backend accessable on : http://localhost:8080/

```

## Authors

* **MD SHADMAAN** - *Full-stack developer* - [skwebinfo](https://www.skwebinfo.com/)