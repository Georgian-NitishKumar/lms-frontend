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