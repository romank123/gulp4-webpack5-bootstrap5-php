## Gulp 4 + Webpack 5 + Bootstrap 5 + Bootstrap Icons + PHP
#### Based on [IamManchanda/gulp-webpack](https://github.com/IamManchanda/gulp-webpack)

All the tasks are done via Gulp. Webpack is just used for ES6 Import/Export as Gulp can't do it to my best of knowledge. Apart from ES6 Import/Export, Gulp was able to do all my other work that I wanted so I have mainly used Gulp. That being said, you can modify the webpack config to your preferences from `webpack` folder and use webpack specific plugins as you need.

## Includes
- Gulp 4
- Webpack 5
- Bootstrap 5
- Bootstrap Icons

## Setup

- Install [Node](https://nodejs.org/)
- Optionally, also install [Yarn](https://yarnpkg.com/) or use *Npm* that comes with Node pre-installed
- Install Gulp globally through `npm install -g gulp@next`
- Install Webpack globally through `npm install -g webpack`
- Fork & clone this project (Yours!)
- `cd` to the cloned project
- Install all [packages](./package.json) with `npm install` or `yarn install`

## Usage

- **Build and Serve locally (Production)** - `npm start` or `yarn start`. The Production port is `8000`.
- **Build and Serve locally (Development)** - `npm run dev` or `yarn run dev`. The Development port is `3000`.
- **Exporting the Project to zip file** - `npm run export` or `yarn run export`

Important Note: **Don't** run these npm scripts simultaneously.

## Appendix

- **Tooling** - Gulpfile Lives in `gulpfile.js` and Webpack config files live within `webpack` folder.
- **Source Files** - Lives in `website/src` folder
- **Compiled Files** - Lives in `website/dist` folder. 
- **Exported Project** - The exported project gets saved as `website.zip` to project root.


