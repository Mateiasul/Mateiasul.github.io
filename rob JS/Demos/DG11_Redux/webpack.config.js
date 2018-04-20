module.exports = {
  // Identify the entry file
  entry: ['babel-polyfill', './main.js'],
  // Identify the file where the bundled js file will be put
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  // Make sure that webpack looks at both JS and JSX files
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Set up the webpack-dev-server
  devServer: {
    inline: true,             // Auto-refresh page on-the-fly
    port: 8080,               // Set the port on the server to run the application on
    historyApiFallback: true  // Allow user to type previously visited url in address bar
  },
  // Enable the production of sourcemaps for easier debugging
  devtool: 'source-map',
  // Set up webpack to load and convert the files to JS
  module: {
    rules: [
      {
        // Find all files that end with .js or .jsx and pass to loader
        test: /\.jsx?$/,
        // Exclude the node_modules folder
        exclude: /node_modules/,
        // Use the babel-loader to load the files
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }
    ]
  }
}
