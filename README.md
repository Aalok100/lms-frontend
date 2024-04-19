# LMS FRONTEND

### Setup instruction



1. Clone the Project
```
    git clone https://github.com/Aalok100/lms-frontend.git
```

2. Move on the directory
```
    cd lms-frontend 
```

3. install dpandancies
```
    npm i
```


4. run the server
```
    npm run dev
```




### Setup instruction for tailwind 

[Tailwind official instruction](https://tailwindcss.com/docs/installation)

1. install tailwind css
```
    npm install -D tailwindcss
```

2. Create config file 
```
    npx tailwindcss init
```

3. Add file extension to tailwind config file in the contents property
```
    "./src/**/*.{html,js, jsx, ts,tsx}"
```
4. Add the taileind directive at the top of the `index.css` file
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### Adding plugins and dependencies
```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```
