# LMS Frontend

### Setup instruction

01. Clone the project

```
    git clone https://github.com/Georgian-NitishKumar/lms-frontend.git
```

02. Move into the directory

```
   cd lms-frontend
```
03. install dependencies

```
   npm i
```

04. run the server

```
    npm run dev
```


### Setup instructions for tailwind

[Tailwind official instruction doc (https://tailwindcss.com/docs/installation)]

01. install tailwindcss

```

    npm install -D tailwindcss
```

02. Create tailwind config file

```

    npx tailwindcss init
```

03. Add file extensions to tailwind config file in the content property

```

    "./src/**/*.{html,js, jsx, ts, tsx}"
```

04. Add the tailwind directives at the top of the `index.css` file

```

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### Adding plugins and dependencies

```

npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort eslint

1. Install simple import sort
```
    npm i -D eslint-plugin-simple-import-sort
```
2. Add rule in `.eslint.cjs`

```
    'simple-import-sort/imports': 'error'
```
3. add simple-import sort plugin in `eslint.cjs`

```
   plugins:  ['...', 'simple-import-sort']
``` 

4. To enable auto import sort on file save in vscode

    - open `settings.json`
    - add the following config
```

    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
}