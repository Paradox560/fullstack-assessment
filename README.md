This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Setting Up the Flask App

To set up the Flask app, you need to create a virtual environment and install the required dependencies. Follow these steps:

1. Navigate to the `flask-app` directory:

```bash
cd flask-app
```

2. Create a virtual environment
```bash
python3 -m venv .venv # Mac
python -m venv .venv  # Windows
```

3. Activate the virtual environment
```bash
source .venv/bin/activate  # Mac
.venv/Scripts/activate     # Windows
```

4. Install the required dependencies
```bash
pip install -r requirements.txt
```

5. Start the Flask server
```bash
flask run
```


## Getting Started with Next.js

First, run 
```bash
npm i
```

Then, run the development server in one terminal:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Your task

1. Modify ```src/app/page.tsx```
- You will need to create an input field that accepts any string
- Then create a submit button when pressed will send an api call to ```/api/length/route.ts```

2. Modify ```src/flask-app/app.py```
- If you're confident in your abilities, create the /api/length route
- Otherwise create the test route first

3. Modify ```src/app/api/length/route.ts```
- You will need to create a route that will send an api call to the flask app with the necessary parameters and add error handling

4. Displaying the information
- Take the info from the api call and display it in a paragraph element saying "The length of your string is __"